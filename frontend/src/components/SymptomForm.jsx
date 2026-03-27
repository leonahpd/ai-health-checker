import { useState } from "react";
import { predictDisease } from "../services/api";

function SymptomForm({ setResult }) {
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    try {
      const symptoms = input.split(",").map(s => s.trim());

      const res = await predictDisease(symptoms);

      setResult(res.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Backend not connected!");
    }
  };

  return (
    <div>
      <input
        placeholder="e.g fever, cough"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Check</button>
    </div>
  );
}

export default SymptomForm;
