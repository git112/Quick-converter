import React, { useState } from 'react'
// import CardE from './ui/cardedit';
import { Card, CardContent } from './ui/Card';
import FileSelector from './FileSelector';

// Define the features array
const features = [
  {
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "PDF to Word",
    description: "Convert Word documents to PDF format instantly"
  },
  {
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "Word to PDF",
    description: "Convert Word documents to PDF format instantly"
  },
  {
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "PDF to Excel",
    description: "Convert Word documents to PDF format instantly"
  },
  {
    icon: <span className="text-2xl mb-4">📊</span>,
    title: "Excel to PDF",
    description: "Transform Excel spreadsheets into PDF files"
  },
  {
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "PDF to PowerPoint",
    description: "Convert Word documents to PDF format instantly"
  },
  {
    icon: <span className="text-2xl mb-4">🎯</span>,
    title: "PowerPoint to PDF",
    description: "Convert PowerPoint presentations to PDF format"
  },
  {
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "PDF to JPG",
    description: "Convert Word documents to PDF format instantly"
  },
  {
    icon: <span className="text-2xl mb-4">🖼️</span>,
    title: "JPG to PDF",
    description: "Convert your images to PDF documents easily"
  },
  {
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "PDF to PNG",
    description: "Convert Word documents to PDF format instantly"
  },{
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "PNG to PDF",
    description: "Convert Word documents to PDF format instantly"
  },
];

const features1 = [
  {
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "Merge PDFs",
    description: "Convert Word documents to PDF format instantly"
  },
  {
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "Split PDFs",
    description: "Convert Word documents to PDF format instantly"
  },
  {
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "Compress PDF",
    description: "Convert Word documents to PDF format instantly"
  },
  {
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "Edit PDF",
    description: "Convert Word documents to PDF format instantly"
  },
  {
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "Organize PDF",
    description: "Convert Word documents to PDF format instantly"
  },
  {
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "Watermark PDF",
    description: "Convert Word documents to PDF format instantly"
  },
  
];

const features2 = [
  {
    icon: <span className="text-2xl mb-4">📄</span>,
    title: "Word to PDF",
    description: "Convert Word documents to PDF format instantly"
  },
  {
    icon: <span className="text-2xl mb-4">📊</span>,
    title: "Excel to PDF",
    description: "Transform Excel spreadsheets into PDF files"
  },
  {
    icon: <span className="text-2xl mb-4">🎯</span>,
    title: "PowerPoint to PDF",
    description: "Convert PowerPoint presentations to PDF format"
  },
  {
    icon: <span className="text-2xl mb-4">🖼️</span>,
    title: "JPG to PDF",
    description: "Convert your images to PDF documents easily"
  },
  {
    icon: <span className="text-2xl mb-4">📐</span>,
    title: "AutoCAD to PDF",
    description: "Convert AutoCAD drawings to PDF format"
  },
  {
    icon: <span className="text-2xl mb-4">📝</span>,
    title: "OpenOffice to PDF",
    description: "Convert OpenOffice documents to PDF"
  },
  
];

function ToolSection() {
  const [selectedTool, setSelectedTool] = useState(null);

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
  };

  if (selectedTool) {
    return (
      <section className="w-full min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <button 
            onClick={() => setSelectedTool(null)}
            className="text-cyan-100 hover:text-cyan-200 mb-8 mt-4 flex items-center"
          >
            <span className="mr-2">←</span> Back to tools
          </button>
          <FileSelector 
            title={selectedTool.title}
            description={selectedTool.description}
          />
        </div>
      </section>
    );
  }

  return (
    <div id="tools-section">
      <section className="w-full py-10 md:py-24 lg:py-30 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 text-white">
            Meet our full product family
          </h2>
          
          <h2 className="text-2xl font-bold tracking-tighter my-8 text-white">
            Converting Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-8xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-2 transition-colors transform duration-500 shadow-md rounded-2xl border-transparent hover:bg-transparent 
                hover:scale-105 hover:shadow-lg hover:shadow-teal-400 border-teal-400 cursor-pointer"
                onClick={() => handleToolSelect(feature)}
              >
                <CardContent className="pt-3 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-1 text-cyan-100">{feature.title}</h3>
                    <p className="text-muted-foreground text-cyan-50">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold tracking-tighter my-8 text-white">
            Editing Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-8xl mx-auto">
            {features1.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-2 transition-colors transform duration-500 shadow-md rounded-2xl border-transparent hover:bg-transparent 
                hover:scale-105 hover:shadow-lg hover:shadow-teal-400 border-teal-400 cursor-pointer"
                onClick={() => handleToolSelect(feature)}
              >
                <CardContent className="pt-3 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-1 text-cyan-100">{feature.title}</h3>
                    <p className="text-muted-foreground text-cyan-50">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold tracking-tighter my-8 text-white">
            Zip Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-8xl mx-auto">
            {features2.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-2 transition-colors transform duration-500 shadow-md rounded-2xl border-transparent hover:bg-transparent 
                hover:scale-105 hover:shadow-lg hover:shadow-teal-400 border-teal-400 cursor-pointer"
                onClick={() => handleToolSelect(feature)}
              >
                <CardContent className="pt-3 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-1 text-cyan-100">{feature.title}</h3>
                    <p className="text-muted-foreground text-cyan-50">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ToolSection;


