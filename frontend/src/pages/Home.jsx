import { useState } from "react";
import SymptomForm from "../components/SymptomForm";
import ResultCard from "../components/ResultCard";

function Home() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <h1>AI Health Checker</h1>
      <SymptomForm setResult={setResult} />
      <ResultCard result={result} />
    </div>
  );
}

export default Home;
