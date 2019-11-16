const initialState = {
  submission_result: {
    status: "Waiting"
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SUBMIT_CODE":
      return {
        ...state,
        submission_result: action.submission_result
      };
    default:
      return state;
  }
}

export default reducer;
