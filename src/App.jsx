import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: import.meta.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);


  return (
    <div className="App">
      <h1>React AI Image generator</h1>
      <div className="card">
        <div className="title">
          <h2>AI Image Generator</h2>

        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
