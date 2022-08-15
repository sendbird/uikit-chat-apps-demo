import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SBProvider from "@sendbird/uikit-react/SendbirdProvider";
import "@sendbird/uikit-react/dist/index.css";
import CustomizedApp from "./CustomizedApp";
import "./styles.css";


let APP_ID = process.env.REACT_APP_APP_ID
let USER_ID = process.env.REACT_APP_USER_ID
let NICKNAME = process.env.REACT_APP_NICKNAME

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/uikit">UIKit</Link>
          </li>
        </ul>

        <hr />

        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Switch>
          <Route exact path="/">
            <div><iframe className="uikit-frame" src="/uikit" title="UIKit"></iframe></div>
          </Route>
          <Route path="/uikit">
            <SBProvider appId={APP_ID} userId={USER_ID} nickname={NICKNAME}>
              <CustomizedApp />
            </SBProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}