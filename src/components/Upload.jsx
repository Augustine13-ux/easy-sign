import { useState } from 'react';
import PropTypes from 'prop-types';
import { UPLOAD_MESSAGES } from '../constants/upload.js';

/**
 * Upload component for file selection and upload initiation
 * 
 * This component handles:
 * - File selection from user input
 * - Display of selected files
 * - Upload button state management
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onFileSelect - Callback when files are selected
 * @param {Function} props.onUpload - Callback when upload is initiated
 * @param {boolean} props.isUploading - Whether upload is in progress
 * @param {Array} props.selectedFiles - Currently selected files
 */
function Upload({ onFileSelect, onUpload, isUploading, selectedFiles = [] }) {
  const [files, setFiles] = useState([]);

  /**
   * Handles file input change event
   * @param {Event} event - File input change event
   */
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    onFileSelect(selectedFiles);
  };

  /**
   * Handles upload button click
   */
  const handleUpload = () => {
    if (files.length > 0) {
      onUpload(files);
    }
  };

  /**
   * Clears selected files
   */
  const clearFiles = () => {
    setFiles([]);
    onFileSelect([]);
    // Reset file input
    const fileInput = document.getElementById('file-input');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <section aria-labelledby="upload-title">
      <h2 id="upload-title">Upload</h2>
      <p>{UPLOAD_MESSAGES.SELECT_FILES}</p>
      
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
        <p id="file-help-text">{UPLOAD_MESSAGES.MULTIPLE_FILES_HELP}</p>
        
        {files.length > 0 && (
          <div className="selected-files">
            <h3>Selected Files ({files.length})</h3>
            <ul>
              {files.map((file, index) => (
                <li key={index}>
                  {file.name} ({(file.size / 1024).toFixed(1)} KB)
                </li>
              ))}
            </ul>
            <button 
              type="button" 
              onClick={clearFiles}
              disabled={isUploading}
              className="clear-files-btn"
            >
              Clear Files
            </button>
          </div>
        )}
        
        <button 
          id="upload-button" 
          type="button" 
          onClick={handleUpload}
          disabled={files.length === 0 || isUploading}
        >
          {isUploading ? UPLOAD_MESSAGES.UPLOADING_BUTTON : UPLOAD_MESSAGES.UPLOAD_BUTTON}
        </button>
      </form>
    </section>
  );
}

Upload.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
  isUploading: PropTypes.bool.isRequired,
  selectedFiles: PropTypes.array
};

export default Upload;
