import { useState } from "react";
import { predictDisease } from "../services/api";

function SymptomForm() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const symptoms = input.split(",");
    const res = await predictDisease(symptoms);
    setResult(res.data);
  };

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Check</button>

      {result && (
        <div>
          <h3>{result.disease}</h3>
          <p>{result.confidence}</p>
        </div>
      )}
    </div>
  );
}

export default SymptomForm;
