import { useState } from "react";
import { predictDisease } from "../services/api";

function SymptomForm({ setResult }) {
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    const symptoms = input.split(",").map(s => s.trim());
    const res = await predictDisease(symptoms);
    setResult(res.data);
  };

  return (
    <div>
      <h2>Enter Symptoms</h2>
      <input
        placeholder="e.g fever, cough"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Predict</button>
    </div>
  );
}

export default SymptomForm;
