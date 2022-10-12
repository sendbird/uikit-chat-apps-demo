import React, { useState } from "react";
import SBConversation from "@sendbird/uikit-react/Channel";
import SBChannelList from "@sendbird/uikit-react/ChannelList";
import SBChannelSettings from "@sendbird/uikit-react/ChannelSettings";
import withSendBird from "@sendbird/uikit-react/withSendbird";
import "./styles.css";
import "@sendbird/uikit-react/dist/index.css";
import ChannelPreview from "./ChannelPreview";
import IconArrowLeft from "./icon-arrow-left.svg";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles, useTheme } from "@mui/material/styles";
import styled from '@emotion/styled';

// import ChatHeader from "./ChatHeader";

function CustomizedApp({ reset, start }) {
  const [channel, setChannel] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  // const onChannelSelect = (_channel) => {
  //   setChannel(_channel);
  //   //window.history.pushState({}, _channel.name, "/" + _channel.url);
  // };

  const onBack = () => {
    setChannel(null);
    // window.history.pushState({}, document.title, "/");
  };
  console.log("CHANNEL=", channel);

  const drawerWidth = 240;

  const useStyles = styled((theme) => ({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    closeMenuButton: {
      marginRight: "auto",
      marginLeft: 0,
    },
  }));

  const categories = [
    "Marketing Promotions",
    "Sales Conversations",
    "Customer Support",
    "Order Tracking",
    "Calendar Appointment",
    "Movie Tickets",
    "Purchase Receipt",
    "Reset Conversations",
  ];
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const triggerConversation = (e) => {
    if (e.target.innerText === "Marketing Promotions") {
      start("https://chatsamples.com/promotion/start", "promotion");
      handleDrawerToggle();
    } else if (e.target.innerText === "Sales Conversations") {
      start("https://chatsamples.com/sales-concierge/start", "sales-concierge");
      handleDrawerToggle();
    } else if (e.target.innerText === "Customer Support") {
      start("https://chatsamples.com/support-agent/start", "support-agent");
      handleDrawerToggle();
    } else if (e.target.innerText === "Order Tracking") {
      start("https://chatsamples.com/order-tracking/start", "order-tracking");
      handleDrawerToggle();
    } else if (e.target.innerText === "Calendar Appointment") {
      start(
        "https://chatsamples.com/calendar-appointment/start",
        "calendar-appointment"
      );
      handleDrawerToggle();
    } else if (e.target.innerText === "Movie Tickets") {
      start("https://chatsamples.com/movie-tickets/start", "movie-tickets");
      handleDrawerToggle();
    } else if (e.target.innerText === "Purchase Receipt") {
      start(
        "https://chatsamples.com/purchase-receipt/start",
        "purchase-receipt"
      );
      handleDrawerToggle();
    } else if (e.target.innerText === "Reset Conversations") {
      reset();
    }
  };

  const drawer = (
    <div>
      <List>
        {categories.map((text, index) => (
          <div key={text} onClick={(e) => triggerConversation(e)}>
            <ListItem button>
              <ListItemText primary={text} />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );

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
            onChatHeaderActionClick={() => {
              setShowSettings(true);
            }}
          />
          {/* {showSettings && (
            <div className="sendbird-app__settingspanel-wrap">
              <SBChannelSettings
                channelUrl={channel.url}
                onCloseClick={() => {
                  setShowSettings(false);
                }}
              />
            </div>
          )} */}
        </div>
      ) : (
        <div className="sb-channel-list">
          <CssBaseline />
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "right"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                className={classes.closeMenuButton}
              >
                <CloseIcon />
              </IconButton>
              {drawer}
            </Drawer>
          </Hidden>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <SBChannelList
            renderChannelPreview={({ channel }) => (
              <ChannelPreview
                channel={channel}
                onChannelSelect={(channel) => {
                  if (channel) {
                    setChannel(channel);
                  }
                }}
              />
            )}
          // onChannelSelect={(channel) => {
          //   console.log('channel=', channel)
          //   if (channel  && channel.url) {
          //     setChannel(channel);
          //   }
          // }}
          />
        </div>
      )}
    </div>
  );
}

export default withSendBird(CustomizedApp);
