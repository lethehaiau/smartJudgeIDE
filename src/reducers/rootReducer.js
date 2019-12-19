const initialState = {
  submission_result: {
    status: "Waiting"
  },
  problem: {
    title: "Derivative of a Polynomial",
    desc: `<div data-block="true" data-editor="9q916" data-offset-key="8prue-0-0" style="box-sizing: border-box; border: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: 400; font-stretch: inherit; line-height: inherit; font-family: Georgia, serif; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline; color: rgb(36, 41, 46); letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;">
    <div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="8prue-0-0" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline; position: relative; white-space: pre-wrap; direction: ltr; text-align: left;"><span data-offset-key="8prue-0-0" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline;"><span data-text="true" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline;">Given a polynomial as list of coefficient. Evaluate polynomial’s derivative for the given value.</span></span></div>
  </div>
  <div data-block="true" data-editor="9q916" data-offset-key="8m8gd-0-0" style="box-sizing: border-box; border: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: 400; font-stretch: inherit; line-height: inherit; font-family: Georgia, serif; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline; color: rgb(36, 41, 46); letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;">
    <div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="8m8gd-0-0" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline; position: relative; white-space: pre-wrap; direction: ltr; text-align: left;"><span data-offset-key="8m8gd-0-0" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline;"><span data-text="true" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline;">Input Format:</span></span></div>
  </div>
  <blockquote class="RichEditor-blockquote" data-block="true" data-editor="9q916" data-offset-key="2hag2-0-0" style="box-sizing: border-box; border-width: 0px 0px 0px 5px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: solid; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: rgb(238, 238, 238); border-image: initial; font-style: italic; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: 400; font-stretch: inherit; line-height: inherit; font-family: &quot;Hoefler Text&quot;, Georgia, serif; font-size: 16px; margin: 16px 0px; padding: 10px 20px; vertical-align: baseline; color: rgb(102, 102, 102); background-color: rgb(255, 255, 255); letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;">
    <div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="2hag2-0-0" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline; position: relative; white-space: pre-wrap; direction: ltr; text-align: left;"><span data-offset-key="2hag2-0-0" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline;"><span data-text="true" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline;">The first and the only argument contains an integer array, A.&nbsp;</span></span></div>
  </blockquote>
  <div data-block="true" data-editor="9q916" data-offset-key="chvgu-0-0" style="box-sizing: border-box; border: 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: 400; font-stretch: inherit; line-height: inherit; font-family: Georgia, serif; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline; color: rgb(36, 41, 46); letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;">
    <div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="chvgu-0-0" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline; position: relative; white-space: pre-wrap; direction: ltr; text-align: left;"><span data-offset-key="chvgu-0-0" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: bold; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline;"><span data-text="true" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline;">Output Format:</span></span></div>
  </div>
  <blockquote class="RichEditor-blockquote" data-block="true" data-editor="9q916" data-offset-key="as6q2-0-0" style="box-sizing: border-box; border-width: 0px 0px 0px 5px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: solid; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: rgb(238, 238, 238); border-image: initial; font-style: italic; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: 400; font-stretch: inherit; line-height: inherit; font-family: &quot;Hoefler Text&quot;, Georgia, serif; font-size: 16px; margin: 16px 0px; padding: 10px 20px; vertical-align: baseline; color: rgb(102, 102, 102); background-color: rgb(255, 255, 255); letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;">
    <div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="as6q2-0-0" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline; position: relative; white-space: pre-wrap; direction: ltr; text-align: left;"><span data-offset-key="as6q2-0-0" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline;"><span data-text="true" style="box-sizing: border-box; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; margin: 0px; padding: 0px; vertical-align: baseline;">Return an integer array representing the coefficients after derivative.&nbsp;</span></span></div>
  </blockquote>`
  },
  problems:{}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SUBMIT_CODE":
      return {
        ...state,
        submission_result: action.submission_result
      };
    case "LOAD_PROBLEMS":
      return {
        ...state,
        problems: action.problems
      }
    default:
      return state;
  }
}

export default reducer;
