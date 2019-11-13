import React, { useState } from "react";
import AceEditor from "react-ace";
import Button from "@material-ui/core/Button";
import "./Editor.css";
import { useSelector, useDispatch } from "react-redux";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-solarized_dark";

const Editor = () => {
  const [sourceCode, setSourceCode] = useState("");
  const submissionStatus = useSelector(state => state.submission_result.status);
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
            dispatch({
              type: "SUBMIT_CODE",
              submission_result: { status: "Accept" }
            });
            console.log(submissionStatus);
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
export default Editor;
