function Results({ results }) {
  return (
    <section aria-labelledby="results-title">
      <h2 id="results-title">Results</h2>
      <div id="results-output" className="results-output">
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          <p>Processed results will be displayed here.</p>
        )}
      </div>
    </section>
  );
}

export default Results;
