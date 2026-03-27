function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div>
      <h3>Prediction Result</h3>
      <p>Disease: {result.disease}</p>
      <p>Confidence: {result.confidence}</p>

      <h4>Precautions:</h4>
      <ul>
        {result.precautions?.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultCard;
