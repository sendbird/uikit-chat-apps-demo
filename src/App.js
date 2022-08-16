import React from "react";
import SBProvider from "@sendbird/uikit-react/SendbirdProvider";

import "./styles.css";
import CustomizedApp from "./CustomizedApp";
import TriggerControls from "./TriggerControls";
import Sendbird from './setupUser';

export default function App() {
  // setup
  const [user, setUser] = React.useState();

  const [isLoading, setIsLoading] = React.useState(true);
  let APP_ID = process.env.REACT_APP_APP_ID;
  let NICKNAME = process.env.REACT_APP_NICKNAME;
  const sendbird = new Sendbird(process.env.REACT_APP_APP_ID);

  React.useEffect(() => {
    const setup = async () => {
      // setup a new user if non exists and create necesary channels e.g. promotion
      // Some of this data needs to be passed to the trigger button and sent in fetch request
      const [user, promotionsChannel] = await sendbird.setUp();
      setUser(user);
      setIsLoading(false);

    }
    setup();
  }, []);

  const reset = async () => {
    setIsLoading(true);
    sendbird.reset();

    const [user, promotionsChannel] = await sendbird.setUp();
    setUser(user);
    setIsLoading(false);


  }

  if (isLoading) {
    return null;
  }

  return (
    // need SB Provider at top level so all of app has access to sendbird data
    <SBProvider appId={APP_ID} userId={user.userId} nickname={NICKNAME}>
      <TriggerControls reset={reset} />
      <CustomizedApp userId={user.userId} />
    </SBProvider>
  );
}
