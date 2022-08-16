import React, { useState, useCallback } from "react";
import SBConversation from "@sendbird/uikit-react/Channel";
import SBChannelList from "@sendbird/uikit-react/ChannelList";
import withSendBird from "@sendbird/uikit-react/withSendbird";
import "./styles.css";
import SBProvider from "@sendbird/uikit-react/SendbirdProvider";
import ChatHeader from "./ChatHeader";
import ChannelPreview from "./ChannelPreview";

function CustomizedApp() {
  let APP_ID = process.env.REACT_APP_APP_ID;
  let USER_ID = process.env.REACT_APP_USER_ID;
  let NICKNAME = process.env.REACT_APP_NICKNAME;

  const [channel, setChannel] = useState(null);

  const onChannelSelect = (_channel) => {
    setChannel(_channel);
    window.history.pushState({}, _channel.name, "/" + _channel.url);
  };

  const onBack = () => {
    setChannel(null);
    window.history.pushState({}, document.title, "/");
  };

  return (
    <div className="App">
      <SBProvider appId={APP_ID} userId={USER_ID} nickname={NICKNAME}>
        {channel ? (
          <SBConversation
            channelUrl={channel.url}
            renderChatHeader={({ channel, user }) => (
              <ChatHeader channel={channel} user={user} onBack={onBack} />
            )}
          />
        ) : (
          <SBChannelList
            renderChannelPreview={({ channel }) => (
              <ChannelPreview
                channel={channel}
                onChannelSelect={onChannelSelect}
              />
            )}
          />
        )}
      </SBProvider>
    </div>
  );
}

export default withSendBird(CustomizedApp);
