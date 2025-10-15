import { useState, useCallback } from 'react';

/**
 * Simplified custom hook for managing file upload state and logic
 */
function useFileUpload(options = {}) {
  console.log('📱 useFileUpload hook called...');
  
  // Upload state
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  /**
   * Formats file size in appropriate units
   */
  const formatFileSize = useCallback((bytes) => {
    if (bytes < 1024) {
      return `${bytes} B`;
    } else if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    } else {
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }
  }, []);

  /**
   * Simulates upload progress
   */
  const simulateProgress = useCallback(async () => {
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      setStatus(`Uploading... ${i}%`);
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }, []);

  /**
   * Processes uploaded files and generates mock results
   */
  const processFiles = useCallback((files) => {
    return Array.from(files).map(file => ({
      name: file.name,
      size: formatFileSize(file.size),
      type: file.type,
      processedAt: new Date().toISOString()
    }));
  }, [formatFileSize]);

  /**
   * Handles the file upload process
   */
  const handleUpload = useCallback(async (files) => {
    if (!files || files.length === 0) {
      console.warn('No files provided for upload');
      return;
    }

    setIsUploading(true);
    setStatus('Starting upload...');
    setProgress(0);
    setResults([]);

    try {
      // Simulate upload progress
      await simulateProgress();

      // Simulate processing
      setStatus('Processing files...');
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Process files and generate results
      const processedFiles = processFiles(files);
      setResults(processedFiles);
      setStatus('Upload completed successfully!');
      
    } catch (error) {
      setStatus('Upload failed. Please try again.');
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  }, [simulateProgress, processFiles]);

  /**
   * Handles file selection
   */
  const handleFileSelect = useCallback((files) => {
    setSelectedFiles(files || []);
  }, []);

  /**
   * Resets all upload state to initial values
   */
  const resetUpload = useCallback(() => {
    setIsUploading(false);
    setStatus('');
    setProgress(0);
    setResults([]);
    setSelectedFiles([]);
  }, []);

  return {
    // State
    isUploading,
    status,
    progress,
    results,
    selectedFiles,
    
    // Actions
    handleFileSelect,
    handleUpload,
    resetUpload
  };
}

export default useFileUpload;
