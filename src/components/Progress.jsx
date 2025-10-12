function Progress({ status, progress }) {
  return (
    <section aria-labelledby="progress-title">
      <h2 id="progress-title">Progress</h2>
      <div role="status" aria-live="polite" aria-atomic="true">
        {status && (
          <div className="status-message">
            {status}
          </div>
        )}
        {progress > 0 && (
          <div>
            <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '4px' }}>
              <div 
                style={{ 
                  width: `${progress}%`, 
                  backgroundColor: '#667eea', 
                  height: '20px', 
                  borderRadius: '4px',
                  transition: 'width 0.3s ease'
                }}
              ></div>
            </div>
            <p style={{ textAlign: 'center', margin: '10px 0 0 0' }}>
              {progress}%
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Progress;
