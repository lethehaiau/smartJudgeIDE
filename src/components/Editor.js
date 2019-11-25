import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import "./Editor.css";
import { useSelector, useDispatch } from "react-redux";
import { submitCode } from "../actions/index";
import SimpleSnackbar from "./SimpleSnackbar";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-text";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-twilight";

const Editor = () => {
  const [sourceCode, setSourceCode] = useState(
    "def computeDeriv(poly):\n  result = []\n  for e in range(1, len(poly)):\n    result.append(float(poly[e]*e))\n  if result == []:\n    return 0.0\n  else:\n      return result\n"
  );
  const [stdin, setStdin] = useState();
  const [stdout, setStdout] = useState();
  const [open, setOpen] = useState(false);
  const [openCustomInput, setOpenCustomInput] = useState(false);
  const submissionResult = useSelector(state => state.submission_result);
  const submissionStatus = useSelector(state => state.submission_result.status);
  const [activeMessage, setActiveMessage] = useState();
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setActiveMessage(""), 500);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    setActiveMessage(submissionResult.message);
  }, [submissionResult]);

  return (
    <div className="problem-editor">
      <AceEditor
        className="problem-editor__window"
        mode="python"
        theme="solarized_light"
        onLoad={() => {
          console.log("Editor Loaded Successful");
        }}
        onChange={text => setSourceCode(text)}
        value={sourceCode}
        placeholder="This is a placeholder"
        showGutter={true}
        showPrintMargin={true}
        height={"100%"}
        width={"undefined"}
        fontSize={18}
      />
      <div className={"Custom-test-section " + (!openCustomInput && "hide")}>
        <div className="Custom-test-titlebar">
          <Typography variant="inherit" style={{marginRight:'auto', paddingLeft: '15px'}}>Input</Typography>
          <Typography variant="inherit" style={{marginRight:'auto', paddingLeft: '15px'}}>Output</Typography>
        </div>
        <div className="Custom-test-container">
          <AceEditor
            className="problem-editor__window"
            mode="text"
            theme="solarized_light"
            onLoad={() => {
              console.log("Editor Loaded Successful");
            }}
            onChange={text => setStdin(text)}
            value={stdin}
            placeholder="This is a placeholder"
            showGutter={true}
            showPrintMargin={true}
            height={"100%"}
            width={"100%"}
            fontSize={18}
          />
          <AceEditor
            className="problem-editor__window"
            mode="text"
            theme="solarized_light"
            onLoad={() => {
              console.log("Editor Loaded Successful");
            }}
            readOnly={true}
            value={stdout}
            placeholder="This is a placeholder"
            showGutter={true}
            showPrintMargin={true}
            height={"100%"}
            width={"100%"}
            fontSize={18}
            setOptions={{
              showLineNumbers: false
            }}
          />
        </div>
      </div>
      <div className="problem-editor__actions">
        <Typography variant="inherit" className={"Submission-status " + submissionStatus}  style={{marginRight: 'auto'}}>{submissionStatus}</Typography>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch checked={openCustomInput} onChange={(event) => setOpenCustomInput(event.target.checked)} value="openCustomInput" />
            }
            label="Custom Input"
            labelPlacement="start"
            style={{color:'white', marginRight:'5px'}}
          />
        </FormGroup>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          onClick={() => {
            console.log(sourceCode);
            dispatch(submitCode(sourceCode));
            setOpen(true);
          }}
          style={{minWidth: '102px'}}
        >
          {openCustomInput ? "Run" : "Submit"}
        </Button>
      </div>
      <SimpleSnackbar open={open} onClose={handleClose} message={activeMessage} />
    </div>
  );
};
export default Editor;
