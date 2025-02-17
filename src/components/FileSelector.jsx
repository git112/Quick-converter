import { Button } from "./ui/button"

const FileSelector = ({ title = "Merge PDF files", description = "Combine PDFs in the order you want with the easiest PDF merger available." }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">
        {title}
      </h1>
      
      <p className="text-muted-foreground text-lg mb-12">
        {description}
      </p>

      <div className="flex flex-col items-center gap-6">
        <div className="w-full max-w-2xl h-64 border-2 border-dashed border-gray-600 rounded-lg 
          flex flex-col items-center justify-center bg-gray-800/50 hover:border-teal-400 transition-colors">
          <Button 
            size="lg" 
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-xl mb-4"
          >
            Select PDF files
          </Button>
          <p className="text-sm text-muted-foreground">
            or drop PDFs here
          </p>
        </div>
      </div>
    </div>
  )
}

export default FileSelector 