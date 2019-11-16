export function submitCode(sourceCode) {
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
        command_line_arguments: "[4.5]",
        expected_output: "[0.0]"
      })
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        dispatch({
          type: "SUBMIT_CODE",
          submission_result: { status: result.status.description, message: result.message }
        });
        return result;
      });
  };
}
