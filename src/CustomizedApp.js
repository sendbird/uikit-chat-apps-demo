import React, { useState, useCallback } from "react";
import SBConversation from "@sendbird/uikit-react/Channel";
import SBChannelList from "@sendbird/uikit-react/ChannelList";
import SBChannelSettings from "@sendbird/uikit-react/ChannelSettings";
import withSendBird from "@sendbird/uikit-react/withSendbird";
import useSendAppCommandCallback from "./useSendAppCommandCallback.tsx";

function CustomizedApp(props) {
  // default props
  const {
    stores: { sdkStore, userStore },
    config: {
      isOnline,
      userId,
      appId,
      accessToken,
      theme,
      userListQuery,
      logger,
      pubSub,
    },
  } = props;
  const logDefaultProps = useCallback(() => {
    console.log(
      "SDK store list log",
      sdkStore.initialized,
      sdkStore.sdk,
      sdkStore.loading,
      sdkStore.error
    );
    console.log(
      "User store list log",
      userStore.initialized,
      userStore.user,
      userStore.loading
    );
    console.log(
      "Config list log",
      isOnline,
      userId,
      appId,
      accessToken,
      theme,
      userListQuery,
      logger,
      pubSub
    );
  }, [
    sdkStore.initialized,
    sdkStore.sdk,
    sdkStore.loading,
    sdkStore.error,
    userStore.initialized,
    userStore.user,
    userStore.loading,
    isOnline,
    userId,
    appId,
    accessToken,
    theme,
    userListQuery,
    logger,
    pubSub,
  ]);
  logDefaultProps();

  // useState
  const [showSettings, setShowSettings] = useState(false);
  const [currentChannelUrl, setCurrentChannelUrl] = useState("");


  app.post('/start', async (req, res) => {
    //if promotional msg button
    if (req.body.trigger === "button" && req.body.params.buttonId === "promotion-button") {
      const markdownAppData = sendbird.constructMarkdownPromotionMesssge(
        // req.body.params.commandInput,
        // giphySelected
      );
      await sendbird.sendUserMessage(
        markdownAppData,
        req.body.userId,
        req.body.channelUrl,
        req.body.params.commandInput
      );
      return res.sendStatus(200);
    }
   
    //if claimed promotion button
    if (req.body.trigger === "button" && req.body.params.buttonId === "claimed-promotion") {
      const markdownAppData = sendbird.constructMarkdownPromotionSuccessMessage();
      await sendbird.sendUserMessage(
        markdownAppData,
        req.body.userId,
        req.body.channelUrl,
        req.body.params.commandInput
      );
      return res.sendStatus(200);
    }
   
   
    // //if sales button
    // if (req.body.trigger === "button" && req.body.params.buttonId === "1") {
    //   const markdownAppData = sendbird.constructMarkdownAppWithoutButton(
    //     req.body.message,
    //     finalGiphy
    //   );
    //   await sendbird.sendGiphyMessage(
    //     markdownAppData,
    //     req.body.userId,
    //     req.body.channelUrl,
    //     req.body.message
    //   );
    //   return res.sendStatus(200);
    // }

    // //support button

    // if (req.body.trigger === "button" && req.body.params.buttonId === "2") {
    //   const markdownAppData = sendbird.constructMarkdownAppWithoutButton(
    //     req.body.message,
    //     finalGiphy
    //   );
    //   await sendbird.sendGiphyMessage(
    //     markdownAppData,
    //     req.body.userId,
    //     req.body.channelUrl,
    //     req.body.message
    //   );
    //   return res.sendStatus(200);
    // }
    // //order tracking button

    // if (req.body.trigger === "button" && req.body.params.buttonId === "3") {
    //   const markdownAppData = sendbird.constructMarkdownAppWithoutButton(
    //     req.body.message,
    //     finalGiphy
    //   );
    //   await sendbird.sendGiphyMessage(
    //     markdownAppData,
    //     req.body.userId,
    //     req.body.channelUrl,
    //     req.body.message
    //   );
    //   return res.sendStatus(200);
    // }
    // //marketplace button

    // if (req.body.trigger === "button" && req.body.params.buttonId === "4") {
    //   const markdownAppData = sendbird.constructMarkdownAppWithoutButton(
    //     req.body.message,
    //     finalGiphy
    //   );
    //   await sendbird.sendGiphyMessage(
    //     markdownAppData,
    //     req.body.userId,
    //     req.body.channelUrl,
    //     req.body.message
    //   );
    //   return res.sendStatus(200);
    // }
  
  });

  return (
    <div className="customized-app">
      <div className="sendbird-app__wrap">
        {/* <button> Click here</button> */}
        <div className="sendbird-app__channellist-wrap">
          <button onClick={(userId, accessToken)=>useSendAppCommandCallback()} id="promotion-button"> Trigger promotion</button>
          <SBChannelList
            onChannelSelect={(channel) => {
              if (channel && channel.url) {
                setCurrentChannelUrl(channel.url);
              }
            }}
          />
        </div>

        <div className="sendbird-app__conversation-wrap">
          <SBConversation
            channelUrl={currentChannelUrl}
            onChatHeaderActionClick={() => {
              setShowSettings(true);
            }}
          />
        </div>
      </div>
      {showSettings && (
        <div className="sendbird-app__settingspanel-wrap">
          <SBChannelSettings
            channelUrl={currentChannelUrl}
            onCloseClick={() => {
              setShowSettings(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default withSendBird(CustomizedApp);
