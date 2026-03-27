function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div>
      <h3>Prediction Result</h3>
      <p><strong>Disease:</strong> {result.disease}</p>
      <p><strong>Confidence:</strong> {result.confidence}</p>
    </div>
  );
}

export default ResultCard;
