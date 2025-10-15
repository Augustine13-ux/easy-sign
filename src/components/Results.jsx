import PropTypes from 'prop-types';
import { UPLOAD_MESSAGES } from '../constants/upload.js';

/**
 * Results component for displaying processed file results
 * 
 * This component handles:
 * - Display of processed file results
 * - Reset functionality to clear results
 * - Empty state messaging
 * 
 * @param {Object} props - Component props
 * @param {Array} props.results - Array of processed file results
 * @param {Function} props.onReset - Callback to reset results
 * @param {boolean} props.hasResults - Whether there are results to display
 */
function Results({ results, onReset, hasResults }) {
  /**
   * Formats the processed date for display
   * @param {string} processedAt - ISO date string
   * @returns {string} Formatted date string
   */
  const formatDate = (processedAt) => {
    return new Date(processedAt).toLocaleString();
  };

  return (
    <section aria-labelledby="results-title">
      <h2 id="results-title">Results</h2>
      
      {hasResults && onReset && (
        <div className="results-actions">
          <button 
            type="button" 
            onClick={onReset}
            className="reset-results-btn"
            aria-label="Clear all results"
          >
            Clear Results
          </button>
        </div>
      )}
      
      <div id="results-output" className="results-output">
        {hasResults ? (
          <div className="results-list">
            {results.map((result, index) => (
              <div key={index} className="result-item">
                <div className="result-header">
                  <h3>{result.name}</h3>
                  <span className="file-size">{result.size}</span>
                </div>
                <div className="result-details">
                  <p><strong>Type:</strong> {result.type || 'Unknown'}</p>
                  <p><strong>Processed:</strong> {formatDate(result.processedAt)}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>{UPLOAD_MESSAGES.NO_RESULTS}</p>
          </div>
        )}
      </div>
    </section>
  );
}

Results.propTypes = {
  results: PropTypes.array.isRequired,
  onReset: PropTypes.func,
  hasResults: PropTypes.bool.isRequired
};

export default Results;
