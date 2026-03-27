import { useState } from "react";

function Chatbot() {
  const [msg, setMsg] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = () => {
    if (msg.includes("fever")) {
      setResponse("Drink fluids and rest.");
    } else {
      setResponse("Please consult a doctor.");
    }
  };

  return (
    <div>
      <h3>Health Chatbot</h3>
      <input onChange={(e) => setMsg(e.target.value)} />
      <button onClick={sendMessage}>Ask</button>
      <p>{response}</p>
    </div>
  );
}

export default Chatbot;
