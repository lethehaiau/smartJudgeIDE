import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

function TextEditor() {
  const [editorHtml, setEditorHtml] = useState("");
  const [title, setTitle] = useState("");
  const handleChange = event => {
    setTitle(event.target.value);
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
      <div style={{flex: "50" }}>
        <h3>{title}</h3>
        <ReactQuill
          theme="bubble"
          value={editorHtml}
          readOnly={true}
          style={{ height: "100%"}}
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
          style={{ height: "500px", marginBottom: '100px' }}
        />
        <TextField label="Title" value={title} onChange={handleChange} />
      </div>
    </div>
  );
}

export default TextEditor;
