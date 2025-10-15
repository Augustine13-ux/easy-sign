import FileUploadManager from './components/FileUploadManager.jsx';
import Upload from './components/Upload.jsx';
import Progress from './components/Progress.jsx';
import Results from './components/Results.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  console.log('📱 App component rendering...');
  
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <FileUploadManager>
          {({ 
            isUploading, 
            status, 
            progress, 
            results, 
            selectedFiles,
            handleFileSelect, 
            handleUpload, 
            resetUpload 
          }) => (
            <>
              <Upload 
                onFileSelect={handleFileSelect}
                onUpload={handleUpload}
                selectedFiles={selectedFiles}
                isUploading={isUploading}
              />
              
              <Progress 
                isUploading={isUploading}
                status={status}
                progress={progress}
              />
              
              <Results 
                results={results}
                onReset={resetUpload}
                isUploading={isUploading}
              />
            </>
          )}
        </FileUploadManager>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
