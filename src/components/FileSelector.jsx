import React, { useRef } from 'react';
import { Button } from './ui/button';

const FileSelector = ({ title = "Merge PDF files", description = "Combine PDFs in the order you want with the easiest PDF merger available." }) => {
  const fileInputRef = useRef(null);

  const handleSelectFiles = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    // Handle the selected files here
    console.log('Selected files:', files);
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
      
      <Button 
        size="lg"
        onClick={handleSelectFiles}
        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg"
      >
        Select Files
      </Button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        multiple
        accept={getAcceptedFileTypes(title)}
      />
      
      <p className="mt-4 text-sm text-gray-400">
        or drag and drop files here
      </p>
    </div>
  );
};

export default FileSelector; 