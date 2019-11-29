import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Practice from "./components/Practice";
import Admin from "./components/Admin";


function App() {
  return(
    <BrowserRouter>
      <div>
        <Switch>
        <Route path="/practice" component={Practice} exact/>
        <Route path="/admin" component={Admin}/>
        {/* <Route path="/contact" component={Contact}/> */}
        {/* <Route component={Error}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
