import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Editor from "./components/basics/Editor/Editor";

function App() {
  // const [count, setCount] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [editorHtml, setEditorHtml] = useState<string>("");
  const [showHtml, setShowHtml] = useState<boolean>(false);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Lexical demo</h1>
      <div className="card">
        <Editor
          setEditorHtml={(html: string) => {
            setEditorHtml(html);
          }}
        />
      </div>
      <button
        onClick={() => {
          setShowHtml(true);
        }}>
        Show me the html
      </button>
      <div>{editorHtml.length > 0 && showHtml ? editorHtml : null}</div>
    </>
  );
}

export default App;
