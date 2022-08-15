import React from "react";
import SBProvider from "@sendbird/uikit-react/SendbirdProvider";
import "@sendbird/uikit-react/dist/index.css";
import CustomizedApp from "./CustomizedApp";
import "./styles.css";

let APP_ID = process.env.REACT_APP_APP_ID
let USER_ID = process.env.REACT_APP_USER_ID
let NICKNAME = process.env.REACT_APP_NICKNAME

export default function App() {
  return (
    <SBProvider appId={APP_ID} userId={USER_ID} nickname={NICKNAME}>
      <CustomizedApp />
    </SBProvider>
  );
}