import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { addNewProblem } from "../../actions/index";
import { useDispatch } from "react-redux";

function TextEditor() {
  const [editorHtml, setEditorHtml] = useState("");
  const [state, setState] = useState({
    title: "",
    functionName: "",
    args: "",
    testInput: "",
    testOutput: ""
  });
  const [testCasesInput, setTestCasesInput] = useState([]);
  const [testCasesOutput, setTestCasesOutput] = useState([]);

  const dispatch = useDispatch();

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleAddTestCase = () => {
    setTestCasesInput([...testCasesInput, "[" + state.testInput + "]"]);
    setTestCasesOutput([...testCasesOutput, state.testOutput]);
    setState({
      ...state,
      testInput: "",
      testOutput: ""
    });
  };

  const handleDeleteTestCase = index => {
    setTestCasesInput(testCasesInput.filter((item, i) => i !== index));
    setTestCasesOutput(testCasesOutput.filter((item, i) => i !== index));
  };

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline"],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["clean"]
    ]
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "script",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "bullet",
    "align",
    "color",
    "background"
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "50" }}>
        <h3>{state.title}</h3>
        <ReactQuill
          theme="bubble"
          value={editorHtml}
          readOnly={true}
          style={{ height: "100%" }}
        />
      </div>
      <div style={{ flex: "50" }}>
        <ReactQuill
          theme="snow"
          onChange={html => setEditorHtml(html)}
          value={editorHtml}
          modules={modules}
          formats={formats}
          placeholder={"Write something..."}
          style={{ height: "500px", marginBottom: "100px" }}
        />
        <TextField
          label="Title"
          value={state.title}
          onChange={handleChange("title")}
          style={{ marginRight: "50px", marginBottom: "20px" }}
        />
        <TextField
          label="Main Function"
          value={state.functionName}
          onChange={handleChange("functionName")}
          style={{ marginRight: "50px", marginBottom: "20px" }}
        />
        <TextField
          label="Input Arguments"
          value={state.args}
          onChange={handleChange("args")}
          style={{ marginRight: "50px", marginBottom: "20px" }}
        />
        <div style={{ width: "100%" }}>
          <Typography variant="h6">Test Cases</Typography>
          <TextField
            label="Input"
            variant="outlined"
            multiline
            rows="4"
            value={state.testInput}
            onChange={handleChange("testInput")}
            style={{ marginRight: "50px", marginBottom: "20px", width: "40%" }}
          />
          <TextField
            label="Output"
            variant="outlined"
            multiline
            rows="4"
            value={state.testOutput}
            onChange={handleChange("testOutput")}
            style={{ marginRight: "50px", marginBottom: "20px", width: "40%" }}
          />
          <Button
            variant="contained"
            color="inherit"
            size="large"
            onClick={handleAddTestCase}
          >
            Add
          </Button>
        </div>
        <div style={{ width: "100%" }}>
          <List>
            {testCasesInput.map((item, index) => (
              <ListItem>
                <ListItemText primary={`Test Case ${index}`} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteTestCase(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          onClick={() => {
            console.log("submit problem");
            dispatch(
              addNewProblem(
                state.title,
                editorHtml,
                state.args,
                JSON.stringify(testCasesInput, null, 2).replace(/[^\[\],.\w]/gi, '').replace(/[\n\r]/g, ''),
                JSON.stringify(testCasesOutput, null, 2).replace(/[^\[\],.\w]/gi, '').replace(/[\n\r]/g, ''),
                state.functionName
              )
            );
          }}
        >
          Submit
        </Button>
        {/* <div>{JSON.stringify(testCasesInput, null, 2)}</div> */}
      </div>
    </div>
  );
}

export default TextEditor;
