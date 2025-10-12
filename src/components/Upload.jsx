import { useState } from 'react';

function Upload({ onFileSelect, onUpload, isUploading }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    onFileSelect(files);
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      onUpload(selectedFiles);
    }
  };

  return (
    <section aria-labelledby="upload-title">
      <h2 id="upload-title">Upload</h2>
      <p>Select one or more files to get started.</p>
      <form aria-describedby="file-help-text">
        <input 
          id="file-input" 
          name="files" 
          type="file" 
          multiple 
          aria-describedby="file-help-text"
          onChange={handleFileChange}
          disabled={isUploading}
        />
        <p id="file-help-text">You can choose multiple files at once.</p>
        <button 
          id="upload-button" 
          type="button" 
          onClick={handleUpload}
          disabled={selectedFiles.length === 0 || isUploading}
        >
          {isUploading ? 'Uploading...' : 'Upload Files'}
        </button>
      </form>
    </section>
  );
}

export default Upload;
