/**
 * Upload configuration constants
 */

export const UPLOAD_CONFIG = {
  PROGRESS_INTERVAL: 200, // ms
  PROGRESS_STEP: 10, // percentage
  PROCESSING_DELAY: 1000, // ms
};

export const UPLOAD_STATUS = {
  IDLE: '',
  STARTING: 'Starting upload...',
  PROCESSING: 'Processing files...',
  COMPLETED: 'Upload completed successfully!',
  FAILED: 'Upload failed. Please try again.',
};

export const UPLOAD_MESSAGES = {
  SELECT_FILES: 'Select one or more files to get started.',
  MULTIPLE_FILES_HELP: 'You can choose multiple files at once.',
  UPLOADING_BUTTON: 'Uploading...',
  UPLOAD_BUTTON: 'Upload Files',
  NO_RESULTS: 'Processed results will be displayed here.',
};

export const FILE_SIZE_UNITS = {
  KB: 1024,
  MB: 1024 * 1024,
};
