import React from "react";
import { useSelector } from "react-redux";
import "./Practice.css";
import Editor from "./Editor";
import Header from "./Header";


function Practice() {
  const problem = useSelector(state => state.problem);
  return (
    <div className="Practice">
      <Header />
      <div className="Practice-body">
        <div className="Practice-problem">
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

export default Practice;
