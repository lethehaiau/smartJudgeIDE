export function submitCode(sourceCode, problemID, argInput) {
  return dispatch => {
    fetch("http://localhost:3000/submissions?base64_encoded=false&wait=true", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        source_code: sourceCode,
        language_id: "35",
        problem_id: problemID,
        command_line_arguments: argInput
        // expected_output: "[0.0]"
      })
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        dispatch({
          type: "SUBMIT_CODE",
          submission_result: {
            status: result.status.description,
            message: result.message,
            stdout: result.stdout,
            stderr: result.stderr
          }
        });
        return result;
      });
  };
}

export function loadProblems(){
  return dispatch => {
    fetch("http://localhost:3000/problems")
    .then(response => response.json())
    .then(problems => {
      console.log(problems);
      dispatch({
        type: "LOAD_PROBLEMS",
        problems: { ...problems }
      })
    })
  }
}

export function addNewProblem(title, description, args, inputs, outputs, functionName){
  return dispatch => {
    fetch("http://localhost:3000/problems", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description,
        arguments: args,
        inputs: inputs,
        outputs: outputs,
        solution_function: functionName
      })
    })
    .then(() => {return dispatch(loadProblems())})
  }
}