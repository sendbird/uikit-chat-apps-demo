import React from "react";
import SBProvider from "@sendbird/uikit-react/SendbirdProvider";
import "./styles.css";
import CustomizedApp from "./CustomizedApp";
import Sendbird from "./setupUser";
import AppDescription from "./AppDescription";

const appManifests = [
  {
    "name": "basic-chat-app",
    // "url": "http://localhost:8283/basic-chat-app",
    "command": "basic"
  },
  {
    "name": "giphy-app",
    // "url": "http://localhost:8282/app",
    "url": "https://chatsamples.com/giphy/app",
    "command": "giphy"
  },
  {
    "name": "promotion",
    // "url": "http://localhost:8284/app",
    "url": "https://chatsamples.com/promotion/app"
  },
  {
    "name": "order-tracking",
    "url": "http://localhost:8286/app"
  },
  {
    "name": "concierge",
    // "url": "http://localhost:8287/app",
    "url": "https://chatsamples.com/sales-concierge/app"
  }
];

export default function App() {
  // setup
  const [user, setUser] = React.useState();
  const [channelUrls, setChannelUrls] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  let APP_ID = process.env.REACT_APP_APP_ID;
  let NICKNAME = process.env.REACT_APP_NICKNAME;
  const sendbird = new Sendbird(process.env.REACT_APP_APP_ID);

  React.useEffect(() => {
    const setup = async () => {
      // setup a new user if non exists and create necesary channels e.g. promotion
      // Some of this data needs to be passed to the trigger button and sent in fetch request
      const [
        user,
        promotionsChannel,
        conciergeChannel,
        supportChannel,
        trackingChannel,
        marketplaceChannel,
      ] = await sendbird.setUp();
      console.log(promotionsChannel);
      setUser(user);
      setChannelUrls({
        promotion: promotionsChannel.url,
        "sales-concierge": conciergeChannel.url,
        "support-agent": supportChannel.url,
        "order-tracking": trackingChannel.url,
        marketplace: marketplaceChannel.url,
      });
      setIsLoading(false);
    };
    setup();
  }, []);

  const reset = async () => {
    setIsLoading(true);
    sendbird.reset();

    const [
      user,
      promotionsChannel,
      conciergeChannel,
      supportChannel,
      trackingChannel,
      marketplaceChannel,
    ] = await sendbird.setUp();
    setUser(user);
    setChannelUrls({
      promotion: promotionsChannel.url,
      "sales-concierge": conciergeChannel.url,
      "support-agent": supportChannel.url,
      "order-tracking": trackingChannel.url,
      marketplace: marketplaceChannel.url,
    });
    setIsLoading(false);
  };

  const start = (url, name) => {
    console.log("channel=", channelUrls);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ channelUrl: channelUrls[name] }),
    });
  };

  if (isLoading) {
    return null;
  }

  return (
    // need SB Provider at top level so all of app has access to sendbird data
    <div className="component-wrapper">
      <div className="flex-wrap">
        <SBProvider appId={APP_ID} userId={user.userId} nickname={NICKNAME}>
          <CustomizedApp userId={user.userId} />
          <AppDescription reset={reset} start={start} />
        </SBProvider>
      </div>
    </div>
  );
}
