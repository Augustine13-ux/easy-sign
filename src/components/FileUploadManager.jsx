import useFileUpload from '../hooks/useFileUpload.js';
import PropTypes from 'prop-types';

/**
 * FileUploadManager component that provides file upload functionality
 * 
 * This component uses the useFileUpload hook to manage upload state and
 * provides a render prop pattern for child components to access upload
 * functionality.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.children - Render prop function that receives upload state and handlers
 * @param {Object} props.options - Options to pass to useFileUpload hook
 */
function FileUploadManager({ children, options = {} }) {
  const uploadState = useFileUpload(options);

  return children(uploadState);
}

FileUploadManager.propTypes = {
  children: PropTypes.func.isRequired,
  options: PropTypes.object
};

export default FileUploadManager;
