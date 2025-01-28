import React from 'react'
import CardE from './ui/cardedit';


function ToolSection() {
  return (

    <div className="container py-12 bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-200 py-4">Meet our full product family</h2>
      <h2 className="text-2xl font-bold mb-8 ml-4 text-blue-50">Conversions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-6 bg-gray-900">
        {/* <div className="flex justify-center flex-cols-1 sm:flex-cols-2 md:flex-cols-3 lg:flex-cols-6 gap-28 bg-gray-900"> */}



        <div className="w-16 h-16 my-4 mx-4">
          <CardE title="Word to PDF" icon="W" />
        </div>

        <div className="w-16 h-16 my-4 mx-4">
          <CardE title="Excel to PDF" icon="X" />
        </div>

        <div className="w-16 h-16 my-4 mx-4">
          <CardE title="PowerPoint to PDF" icon="P" />
        </div>

        <div className="w-16 h-16 my-4 mx-4">
          <CardE title="JPG to PDF" icon="gallery" />
        </div>

        <div className="w-16 h-16 my-4 mx-4">
          <CardE title="AutoCAD to PDF" icon="A" />
        </div>

        <div className="w-16 h-16 my-4 mx-4">
          <CardE title="OpenOffice to PDF" icon="cloud-download" />
        </div>



      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-6 bg-gray-900">



        <div className="w-16 h-16 my-4 mx-4">
          <CardE title="Word to PDF" icon="W" />
        </div>

        <div className="w-16 h-16 my-4 mx-4">
          <CardE title="Excel to PDF" icon="X" />
        </div>

        <div className="w-16 h-16 my-4 mx-4">
          <CardE title="PowerPoint to PDF" icon="P" />
        </div>

        <div className="w-16 h-16 my-4 mx-4">
          <CardE title="JPG to PDF" icon="gallery" />
        </div>

        <div className="w-16 h-16 my-4 mx-4">
          <CardE title="AutoCAD to PDF" icon="A" />
        </div>

        <div className="w-16 h-16 my-4 mx-4">
          <CardE title="OpenOffice to PDF" icon="cloud-download" />
        </div>


      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 className="text-2xl font-bold mb-8 ml-4 py-4 text-blue-50">Editing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 bg-gray-900">



        <div className="w-16 h-16 mb-4 ml-4">
          <CardE title="Word to PDF" icon="W" />
        </div>

        <div className="w-16 h-16 mb-4 ml-4">
          <CardE title="Excel to PDF" icon="X" />
        </div>

        <div className="w-16 h-16 mb-4 ml-4">
          <CardE title="PowerPoint to PDF" icon="P" />
        </div>

        <div className="w-16 h-16 mb-4 ml-4">
          <CardE title="JPG to PDF" icon="gallery" />
        </div>

        <div className="w-16 h-16 mb-4 ml-4">
          <CardE title="AutoCAD to PDF" icon="A" />
        </div>

        <div className="w-16 h-16 mb-4 ml-4">
          <CardE title="OpenOffice to PDF" icon="cloud-download" />
        </div>

      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 className="text-2xl font-bold mb-8 ml-4 text-blue-50 py-4">Zip Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 bg-gray-900">



        <div className="w-16 h-16 mb-4 ml-4">
          <CardE title="Word to PDF" icon="W" />
        </div>

        <div className="w-16 h-16 mb-4 ml-4">
          <CardE title="Excel to PDF" icon="X" />
        </div>

        <div className="w-16 h-16 mb-4 ml-4">
          <CardE title="PowerPoint to PDF" icon="P" />
        </div>

        <div className="w-16 h-16 mb-4 ml-4">
          <CardE title="JPG to PDF" icon="gallery" />
        </div>

        <div className="w-16 h-16 mb-4 ml-4">
          <CardE title="AutoCAD to PDF" icon="A" />
        </div>

        <div className="w-16 h-16 mb-4 ml-4">
          <CardE title="OpenOffice to PDF" icon="cloud-download" />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

    </div>


  );
};

export default ToolSection;