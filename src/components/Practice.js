import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProblems } from "../actions/index";
import "./Practice.css";
import Editor from "./Editor";
import Header from "./Header";
import { FormControl, Select, MenuItem } from "@material-ui/core";

function Practice() {
  const problems = useSelector(state => state.problems);
  const problem = useSelector(state => state.problem);
  const [problemIndex, setProblemIndex] = useState(0);
  const dispatch = useDispatch();

  const handleChange = event => {
    setProblemIndex(event.target.value);
    dispatch({type: "SELECT_PROBLEM", selected_problem_id: event.target.value});
  };

  useEffect(() => {
    dispatch(loadProblems());
    console.log(problems);
  }, []);

  return (
    <div className="Practice">
      <Header />
      <div className="Practice-body">
        <div className="Practice-problem">
          <FormControl className="Problem-selector">
            <Select
              value={problemIndex}
              onChange={handleChange}
              style={{ fontSize: 24 }}
            >
              {Object.keys(problems).map(index => (
                <MenuItem value={index}>{problems[index].title}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div
            dangerouslySetInnerHTML={{
              __html: 
              problems[problemIndex]
                ? problems[problemIndex].description
                : ""
              // problem.desc
            }}
            style={{marginTop: '15px'}}
          />
        </div>
        <div style={{ flex: 50, height: '700px' }}>
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default Practice;
