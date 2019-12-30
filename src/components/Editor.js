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
  
  const [stdin, setStdin] = useState("");
  const [stdout, setStdout] = useState("");
  const [open, setOpen] = useState(false);
  const [openCustomInput, setOpenCustomInput] = useState(false);
  const submissionResult = useSelector(state => state.submission_result);
  const submissionStatus = useSelector(state => state.submission_result.status);
  const current_problem_id = useSelector(state => state.current_problem_id);
  const problems = useSelector(state => state.problems);
  const [sourceCode, setSourceCode] = useState(
    `def ${problems[current_problem_id] ? problems[current_problem_id].functionName : "solution"}(${problems[current_problem_id] ? problems[current_problem_id].args : ""}):\n\t#  Write your code here!\n`
  );
  const [activeMessage, setActiveMessage] = useState();
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setActiveMessage(""), 500);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if(submissionResult.status === "Wrong Answer"){
      setActiveMessage(submissionResult.message);
    }
  }, [submissionResult]);

  useEffect(() => {
    if(openCustomInput){
      //use slice to cut the '[' and ']\n' from the stdout
      setStdout(submissionResult.stdout.slice(1, -1));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[submissionResult])
  console.log(problems);
  useEffect(() => {
    setSourceCode(`def ${problems[current_problem_id] ? problems[current_problem_id].solution_function : "solution"}(${problems[current_problem_id] ? problems[current_problem_id].arguments : ""}):\n\t#  Write your code here!\n`);
  }, [problems, current_problem_id]);

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
        tabSize={2}
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
              console.log("Stdin Loaded Successful");
            }}
            onChange={text => setStdin(text)}
            value={stdin}
            placeholder="This is a placeholder"
            showGutter={true}
            showPrintMargin={true}
            height={"undefined"}
            width={"100%"}
            fontSize={18}
          />
          <AceEditor
            className="problem-editor__window"
            mode="text"
            theme="solarized_light"
            onLoad={() => {
              console.log("Stdout Loaded Successful");
            }}
            readOnly={true}
            value={stdout}
            placeholder="This is a placeholder"
            showGutter={true}
            showPrintMargin={true}
            height={"undefined"}
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
            console.log("Executing");
            //add [[]] to wrap stdin for argument feed single input
            //1 pair for list of input, 1 pair for list of args
            if(openCustomInput){
              if(stdin){
                let argInput = "[[" + stdin + "]]"
                dispatch(submitCode(sourceCode, problems[current_problem_id].id, argInput))
              }
              else{
                setActiveMessage("Input much not be empty!")
                setOpen(true);
              }
            }
            else{
              dispatch(submitCode(sourceCode, problems[current_problem_id].id));
              setOpen(true);
            }
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
