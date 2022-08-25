import React, { useState, useCallback } from "react";
import SBConversation from "@sendbird/uikit-react/Channel";
import SBChannelList from "@sendbird/uikit-react/ChannelList";
import withSendBird from "@sendbird/uikit-react/withSendbird";
import "./styles.css";
import "@sendbird/uikit-react/dist/index.css";
import ChatHeader from "./ChatHeader";
import ChannelPreview from "./ChannelPreview";
import IconArrowLeft from "./icon-arrow-left.svg";


function CustomizedApp() {
  const [channel, setChannel] = useState(null);

  const onChannelSelect = (_channel) => {
    setChannel(_channel);
    // window.history.pushState({}, _channel.name, "/" + _channel.url);
  };

  const onBack = () => {
    setChannel(null);
    // window.history.pushState({}, document.title, "/");
  };

  return (
    <div className="uikit">
      {channel ? (
        <div className="sb-conversation">
          {/* temp hack to get working for demo. We want our own component defined via renderChannelHeader */}
          <button className="back-button" onClick={onBack}>
            <img width={20} heigth={20} src={IconArrowLeft} alt="Back button" />
          </button>
          <SBConversation
            channelUrl={channel.url}
          // renderChannelHeader={() => (
          //   <ChatHeader channel={channel} onBack={onBack} />
          // )}
          />
        </div>
      ) : (
        <div className="sb-channel-list">
          <SBChannelList
            renderChannelPreview={({ channel }) => (
              <ChannelPreview
                channel={channel}
                onChannelSelect={onChannelSelect}
              />
            )}
          />
        </div>
      )}
    </div>
  );
}

export default withSendBird(CustomizedApp);
