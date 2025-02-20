import React, { useRef, useState } from 'react';
import { Button } from './ui/button';

const FileSelector = ({ title = "Merge PDF files", description = "Combine PDFs in the order you want with the easiest PDF merger available." }) => {
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [convertedFile, setConvertedFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState(null);

  const handleSelectFiles = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    setConvertedFile(null);
    setError(null);
  };

  const handleConversion = async () => {
    if (selectedFiles.length === 0) return;
    
    setIsConverting(true);
    setError(null);
    const formData = new FormData();
    formData.append('file', selectedFiles[0]);

    try {
      let endpoint = '';
      switch (title) {
        case 'PDF to Word':
          endpoint = '/api/convert/pdf-to-word';
          break;
        case 'Word to PDF':
          endpoint = '/api/convert/word-to-pdf';
          break;
        case 'PDF to JPG':
        case 'PDF to PNG':
          endpoint = '/api/convert/pdf-to-images';
          break;
        case 'Excel to PDF':
          endpoint = '/api/convert/excel-to-pdf';
          break;
        case 'JPG to PDF':
        case 'PNG to PDF':
          endpoint = '/api/convert/image-to-pdf';
          break;
        default:
          throw new Error('Unsupported conversion type');
      }

      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Conversion failed');
      }

      const blob = await response.blob();
      if (blob.size === 0) {
        throw new Error('Converted file is empty');
      }

      setConvertedFile({
        blob,
        name: title === 'PDF to Word' 
          ? `converted-${selectedFiles[0].name.split('.')[0]}.docx`
          : `converted-${selectedFiles[0].name.split('.')[0]}.pdf`
      });
    } catch (error) {
      console.error('Conversion failed:', error);
      setError(error.message);
      setConvertedFile(null);
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!convertedFile) return;
    
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(convertedFile.blob);
    downloadLink.download = convertedFile.name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const getAcceptedFileTypes = (toolTitle) => {
    switch (toolTitle) {
      case 'PDF to Word':
        return '.pdf';
      case 'Word to PDF':
        return '.doc,.docx';
      case 'PDF to Excel':
        return '.pdf';
      case 'Excel to PDF':
        return '.xls,.xlsx';
      case 'PDF to PowerPoint':
        return '.pdf';
      case 'PowerPoint to PDF':
        return '.ppt,.pptx';
      case 'PDF to JPG':
      case 'PDF to PNG':
        return '.pdf';
      case 'JPG to PDF':
        return '.jpg,.jpeg';
      case 'PNG to PDF':
        return '.png';
      default:
        return '*';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] p-12 border-2 border-dashed border-gray-600 rounded-lg">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-400 mb-8">{description}</p>
      
      {!selectedFiles.length ? (
        <>
          <Button 
            size="lg"
            onClick={handleSelectFiles}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg"
          >
            Select Files
          </Button>
          <p className="mt-4 text-sm text-gray-400">
            or drag and drop files here
          </p>
        </>
      ) : (
        <div className="w-full max-w-md">
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold mb-2">Selected Files:</h3>
            {selectedFiles.map((file, index) => (
              <div key={index} className="text-sm text-gray-300 flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {file.name}
              </div>
            ))}
          </div>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          {!convertedFile ? (
            <Button
              onClick={handleConversion}
              disabled={isConverting}
              className="w-full bg-teal-500 hover:bg-teal-600 mb-4 disabled:bg-gray-600"
            >
              {isConverting ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Converting...
                </div>
              ) : 'Convert Files'}
            </Button>
          ) : (
            <Button
              onClick={handleDownload}
              className="w-full bg-green-500 hover:bg-green-600 mb-4"
            >
              Download Converted File
            </Button>
          )}
          
          <Button
            onClick={() => {
              setSelectedFiles([]);
              setConvertedFile(null);
              setError(null);
            }}
            variant="outline"
            className="w-full border-gray-600 text-gray-400 hover:text-white hover:border-gray-500"
          >
            Clear & Select New Files
          </Button>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept={getAcceptedFileTypes(title)}
      />
    </div>
  );
};

export default FileSelector; 