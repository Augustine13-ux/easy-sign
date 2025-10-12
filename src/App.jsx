import { useState } from 'react';
import Header from './components/Header';
import Upload from './components/Upload';
import Progress from './components/Progress';
import Results from './components/Results';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState([]);

  const handleFileSelect = (files) => {
    console.log('Files selected:', files);
  };

  const handleUpload = async (files) => {
    setIsUploading(true);
    setStatus('Starting upload...');
    setProgress(0);
    setResults([]);

    try {
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        setProgress(i);
        setStatus(`Uploading... ${i}%`);
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      setStatus('Processing files...');
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate results
      const mockResults = files.map(file => 
        `Processed: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`
      );
      
      setResults(mockResults);
      setStatus('Upload completed successfully!');
      
    } catch (error) {
      setStatus('Upload failed. Please try again.');
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container">
      <Header />
      <main>
        <Upload 
          onFileSelect={handleFileSelect}
          onUpload={handleUpload}
          isUploading={isUploading}
        />
        <Progress status={status} progress={progress} />
        <Results results={results} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
