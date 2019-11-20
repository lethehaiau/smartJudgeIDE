import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";


function App() {
  const problem = useSelector(state => state.problem);
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <div className="App-problem">
          <h3>{problem.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: problem.desc }} />
        </div>
        <div style={{ flex: 50}}>
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default App;
