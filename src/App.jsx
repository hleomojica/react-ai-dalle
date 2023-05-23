import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const [error, setError] = useState("");
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: import.meta.env.OPENAI_API_KEY,
  });
  delete configuration.baseOptions.headers['User-Agent'];

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setLoading(true);
    try {
      const response = await openai.createImage({
        prompt: prompt,
        n: 64,
        size: "512x512",
      });
      setLoading(false);
      setResult(response.data.data[0].url);
    } catch (error) {
      setError(error)
      setLoading(false);
    }
    
  };

  return (
    <div className="App">
      <h1>React AI Image generator</h1>
      {loading ? <h2>Generating image ...</h2> : <></>}
      <div className="card">
        <div className="title">
          <h2>AI Image Generator</h2>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="text-input"
            placeholder="Enter a prompt"
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          <button className="generate-btn" onClick={generateImage}>
            Generate
          </button>
          {result.length ? (
            <img src={result} alt="generated" className="generated-image" />
          ) : (
            <></>
          )}
          {error?(<p className="error">There was an error please contact manager</p>):(<></>)}  
        </div>
      </div>
      <p className="read-the-docs">
        Basic Generator
      </p>
    </div>
  );
}

export default App;
