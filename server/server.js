const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const { PDFDocument } = require('pdf-lib');
const { fromPath } = require('pdf2pic');
const docxToPdf = require('docx-pdf');
const XLSX = require('xlsx');
const sharp = require('sharp');
const { Document, Packer, Paragraph, TextRun } = require('docx');
const pdf = require('pdf-parse');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
fs.mkdir(uploadsDir, { recursive: true }).catch(console.error);

// Conversion endpoints
app.post('/api/convert/word-to-pdf', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const inputPath = req.file.path;
    const outputPath = inputPath.replace('.docx', '.pdf');

    await new Promise((resolve, reject) => {
      docxToPdf(inputPath, outputPath, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

    const pdfFile = await fs.readFile(outputPath);
    
    // Cleanup
    await fs.unlink(inputPath);
    await fs.unlink(outputPath);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=converted.pdf');
    res.send(pdfFile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Conversion failed' });
  }
});

app.post('/api/convert/pdf-to-images', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const inputPath = req.file.path;
    const options = {
      density: 100,
      saveFilename: "converted",
      savePath: "./uploads",
      format: "png",
      width: 600,
      height: 600
    };

    const convert = fromPath(inputPath, options);
    const pages = await convert.bulk(-1); // Convert all pages

    // Create ZIP file of images
    const images = await Promise.all(pages.map(page => fs.readFile(page.path)));
    
    // Cleanup
    await fs.unlink(inputPath);
    await Promise.all(pages.map(page => fs.unlink(page.path)));

    res.json({ images: images.map(img => img.toString('base64')) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Conversion failed' });
  }
});

app.post('/api/convert/excel-to-pdf', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const workbook = XLSX.readFile(req.file.path);
    const pdfDoc = await PDFDocument.create();

    // Convert each worksheet to PDF
    for (const sheetName of workbook.SheetNames) {
      const worksheet = workbook.Sheets[sheetName];
      const page = pdfDoc.addPage();
      
      // Convert worksheet data to text
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      let y = page.getHeight() - 50;
      
      data.forEach(row => {
        let x = 50;
        row.forEach(cell => {
          page.drawText(cell.toString(), { x, y });
          x += 100;
        });
        y -= 20;
      });
    }

    const pdfBytes = await pdfDoc.save();
    
    // Cleanup
    await fs.unlink(req.file.path);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=converted.pdf');
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Conversion failed' });
  }
});

app.post('/api/convert/image-to-pdf', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const image = await sharp(req.file.path)
      .resize(595, 842, { fit: 'inside' }) // A4 size in points
      .toBuffer();

    const pdfDoc = await PDFDocument.create();
    const img = await pdfDoc.embedJpg(image);
    const page = pdfDoc.addPage([595, 842]);
    
    page.drawImage(img, {
      x: 0,
      y: 0,
      width: page.getWidth(),
      height: page.getHeight(),
      fit: 'contain'
    });

    const pdfBytes = await pdfDoc.save();
    
    // Cleanup
    await fs.unlink(req.file.path);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=converted.pdf');
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Conversion failed' });
  }
});

app.post('/api/convert/pdf-to-word', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    console.log('Processing file:', req.file.originalname);

    // Read the PDF file
    const dataBuffer = await fs.readFile(req.file.path);
    console.log('File read successfully, size:', dataBuffer.length);
    
    // Extract text from PDF
    const pdfData = await pdf(dataBuffer);
    console.log('PDF text extracted, length:', pdfData.text.length);
    
    if (!pdfData.text || pdfData.text.length === 0) {
      throw new Error('No text could be extracted from the PDF');
    }

    // Create a new Word document
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: pdfData.text,
                size: 24, // 12pt font
              }),
            ],
          }),
        ],
      }],
    });

    // Generate the Word document
    const buffer = await Packer.toBuffer(doc);
    console.log('Word document generated, size:', buffer.length);
    
    // Cleanup
    await fs.unlink(req.file.path);

    if (buffer.length === 0) {
      throw new Error('Generated document is empty');
    }

    // Send the Word document
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.setHeader('Content-Disposition', 'attachment; filename=converted.docx');
    res.send(buffer);

  } catch (error) {
    console.error('Conversion error:', error);
    
    // Cleanup on error
    if (req.file) {
      await fs.unlink(req.file.path).catch(console.error);
    }
    
    res.status(500).json({ 
      error: 'Conversion failed: ' + (error.message || 'Unknown error') 
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 