import { useState } from "react";
import { predictDisease } from "./services/api";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const res = await predictDisease(input.split(","));
    setResult(res.data);
  };

  return (
    <div>
      <h1>AI Health Checker</h1>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Check</button>

      {result && <h3>{result.disease}</h3>}
    </div>
  );
}

export default App;
