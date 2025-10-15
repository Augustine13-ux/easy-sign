import PropTypes from 'prop-types';

/**
 * Progress component for displaying upload progress and status
 * 
 * This component handles:
 * - Display of upload status messages
 * - Visual progress bar representation
 * - Accessibility features for screen readers
 * 
 * @param {Object} props - Component props
 * @param {string} props.status - Current upload status message
 * @param {number} props.progress - Upload progress percentage (0-100)
 */
function Progress({ status, progress }) {
  /**
   * Determines if progress should be shown
   * @returns {boolean} Whether to show progress bar
   */
  const shouldShowProgress = progress > 0 && progress <= 100;

  /**
   * Gets the appropriate ARIA label for the progress bar
   * @returns {string} ARIA label text
   */
  const getProgressLabel = () => {
    if (status.includes('Uploading')) {
      return `Upload progress: ${progress}%`;
    }
    return `Processing progress: ${progress}%`;
  };

  return (
    <section aria-labelledby="progress-title">
      <h2 id="progress-title">Progress</h2>
      
      <div role="status" aria-live="polite" aria-atomic="true">
        {status && (
          <div className="status-message" aria-live="polite">
            {status}
          </div>
        )}
        
        {shouldShowProgress && (
          <div className="progress-container">
            <div 
              className="progress-bar"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label={getProgressLabel()}
              style={{ 
                width: '100%', 
                backgroundColor: '#e0e0e0', 
                borderRadius: '4px',
                height: '20px',
                overflow: 'hidden'
              }}
            >
              <div 
                className="progress-fill"
                style={{ 
                  width: `${progress}%`, 
                  backgroundColor: '#667eea', 
                  height: '100%', 
                  borderRadius: '4px',
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
            
            <p 
              className="progress-text" 
              style={{ 
                textAlign: 'center', 
                margin: '10px 0 0 0',
                fontSize: '0.9em',
                color: '#666'
              }}
              aria-hidden="true"
            >
              {progress}%
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

Progress.propTypes = {
  status: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired
};

export default Progress;
