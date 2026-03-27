import { useState } from "react";
import axios from "axios";

function SymptomForm() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:8000/predict", {
      symptoms: symptoms.split(",")
    });
    setResult(res.data);
  };

  return (
    <div>
      <input
        placeholder="Enter symptoms"
        onChange={(e) => setSymptoms(e.target.value)}
      />
      <button onClick={handleSubmit}>Check</button>

      {result && <p>Disease: {result.disease}</p>}
    </div>
  );
}

export default SymptomForm;
