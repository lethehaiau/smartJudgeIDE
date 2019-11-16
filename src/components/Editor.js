import React, { useState } from "react";
import AceEditor from "react-ace";
import Button from "@material-ui/core/Button";
import "./Editor.css";
import { useSelector, useDispatch } from "react-redux";
import { submitCode } from "../actions/index";
import SimpleSnackbar from "./SimpleSnackbar";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-solarized_dark";

const Editor = () => {
  const [sourceCode, setSourceCode] = useState(
    "def computeDeriv(poly):\n  result = []\n  for e in range(1, len(poly)):\n    result.append(float(poly[e]*e))\n  if result == []:\n    return 0.0\n  else:\n      return result\n"
  );
  const [open, setOpen] = useState(false);
  const submissionStatus = useSelector(state => state.submission_result.status);
  const submissionMessage = useSelector(state => state.submission_result.message);
  const dispatch = useDispatch();
  return (
    <div className="problem-editor">
      <AceEditor
        className="problem-editor__window"
        mode="python"
        theme="solarized_dark"
        onLoad={() => {
          console.log("Editor Loaded Successful");
        }}
        onChange={text => setSourceCode(text)}
        value={sourceCode}
        placeholder="This is a placeholder"
        showGutter={true}
        showPrintMargin={true}
        height={"600px"}
        width={"undefined"}
        fontSize={18}
      />
      <div className="problem-editor__actions">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log(sourceCode);
            dispatch(submitCode(sourceCode));
            setOpen(true);
            console.log(submissionMessage);
          }}
        >
          Submit
        </Button>
        <p style={{ color: "white" }}>{submissionStatus}</p>
      </div>
      <SimpleSnackbar open={open} setOpen={setOpen} message={submissionMessage}/>
    </div>
  );
};
export default Editor;
