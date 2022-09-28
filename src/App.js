import React from "react";
import SBProvider from "@sendbird/uikit-react/SendbirdProvider";
import "./styles.css";
import CustomizedApp from "./CustomizedApp";
import Sendbird from "./setupUser";
import AppDescription from "./AppDescription";
import { APP_ID, NICKNAME } from './constants';
const appManifests = [
  {
    "name": "basic-chat-app",
    // "url": "http://localhost:8283/basic-chat-app",
    "command": "basic"
  },
  {
    "name": "giphy-app",
    "url": "http://localhost:8282/app",
   // "url": "https://chatsamples.com/giphy/app",
    "command": "giphy"
  },
  {
    "name": "promotion",
    // "url": "http://localhost:8284/app",
    "url": "https://chatsamples.com/promotion/app"
  },
  {
    "name": "order-tracking",
    "url": "https://chatsamples.com/order-tracking/app"
  },
  {
    "name": "concierge",
    // "url": "http://localhost:8287/app",
    "url": "https://chatsamples.com/sales-concierge/app"
  },
  {
    "name": "support-agent",
    // "url": "http://localhost:8287/app",
    // "url": "https://chatsamples.com/support-agent/app"
    "url": "http://localhost:8289/app"
  },
  {
    "name": "calendar-appointment",
    // "url": "http://localhost:8287/app",
    // "url": "https://chatsamples.com/support-agent/app"
    "url": "http://localhost:8281/app"
  },
  {
    "name": "movie-tickets",
    // "url": "http://localhost:8287/app",
    // "url": "https://chatsamples.com/support-agent/app"
    "url": "http://localhost:8284/app"
  },
  {
    "name": "purchase-receipt",
    // "url": "http://localhost:8287/app",
    // "url": "https://chatsamples.com/support-agent/app"
    "url": "http://localhost:8283/app"
  } 
];

export default function App() {
  // setup
  const [user, setUser] = React.useState();
  const [channelUrls, setChannelUrls] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const sendbird = new Sendbird(APP_ID);

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
        calendarChannel,
        movieChannel,
        purchaseChannel,
        giphyChannel,
      ] = await sendbird.setUp();
      console.log(promotionsChannel);
      setUser(user);
      setChannelUrls({
        promotion: promotionsChannel.url,
        "sales-concierge": conciergeChannel.url,
        "support-agent": supportChannel.url,
        "order-tracking": trackingChannel.url,
        marketplace: marketplaceChannel.url,
        "calendar-appointment": calendarChannel.url,
        "movie-tickets": movieChannel.url,
        "purchase-receipt": purchaseChannel.url,
        giphy: giphyChannel.url,
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
      calendarChannel,
      movieChannel,
      purchaseChannel,
      giphyChannel
    ] = await sendbird.setUp();
    setUser(user);
    setChannelUrls({
      promotion: promotionsChannel.url,
      "sales-concierge": conciergeChannel.url,
      "support-agent": supportChannel.url,
      "order-tracking": trackingChannel.url,
      marketplace: marketplaceChannel.url,
      "calendar-appointment": calendarChannel.url,
      "movie-tickets": movieChannel.url,
      "purchase-receipt": purchaseChannel.url,
      giphy: giphyChannel.url,
    });
    setIsLoading(false);
  };

  const start = (url, name) => {
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
    <SBProvider config={{ appManifests }} appId={APP_ID} userId={user.userId} nickname={NICKNAME}>
      <div className="container">
        <div className="uikit-container">
          <CustomizedApp userId={user.userId} />
        </div>

        <div className="controls-container">
          <AppDescription reset={reset} start={start} />
        </div>
      </div>

    </SBProvider>
  );
}
