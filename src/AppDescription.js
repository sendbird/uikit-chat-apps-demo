import React from "react";
import withSendBird from "@sendbird/uikit-react/withSendbird";
import "./styles.css";
import "@sendbird/uikit-react/dist/index.css";

function AppDescription({ reset, start }) {
  return (
    <div className="app-description">
      <h3 class="h3">Rich Interactive Messages</h3>
      <p>
        A selection of rich app experiences for UIKit. Built with the app platform.
      </p>
      <div className="links-container">
        <a
          href="https://www.notion.so/UIKit-App-Platform-e8eb9cc257b94319aa3b04f28ad11b38"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Design document
        </a>
        <a
          href="https://www.notion.so/sendbird/Sendbird-UIKit-Chat-App-Simple-Tutorial-91a3b1b4d2374a239cf61fb7bf67f3cb"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Tutorial
        </a>
        <a
          href="https://github.com/sendbird/sendbird-uikit-app-samples"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Sample code
        </a>
      </div>
      <div className="inbox-bullets">
        <div
          className="inbox-bullet"
          onClick={() => {
            start("https://chatsamples.com/promotion/start", "promotion");
          }}
        >
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-marketing.png"
              class="lazyloaded"
              data-was-processed="true"
              alt="marketing-promotions-icon"
            />
          </div>
          <h5 class="h7">Marketing promotions</h5>
          <h6 className="example-description">
            Send a 20% discount promotion to the customer
          </h6>
          <button
            className="send-example-message-button"
            onClick={() => {
              start("https://chatsamples.com/promotion/start", "promotion");
            }}
          >
            Click to send marketing promotion message
          </button>
          <a
            href="https://github.com/sendbird/sendbird-uikit-app-samples/blob/main/promotion/sendbird.js"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-github"></i>
          </a>
        </div>
        <div className="inbox-bullet">
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-sales-concierge.png"
              class="lazyloaded"
              data-was-processed="true"
              alt="sales-icon"
            />
          </div>
          <h5 class="h7">Sales conversations</h5>
          <h6 className="example-description">
            Share a product recommendation with the customer
          </h6>
          <button
            className="send-example-message-button"
            onClick={() => {
              start(
                "https://chatsamples.com/sales-concierge/start",
                "sales-concierge"
              );
            }}
          >
            Click to send sales message
          </button>
          <a
            href="https://github.com/sendbird/sendbird-uikit-app-samples/blob/main/sales-concierge/sendbird.js"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-github"></i>
          </a>
        </div>
        <div className="inbox-bullet">
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-customer-support.png"
              class="lazyloaded"
              data-was-processed="true"
              alt="customer-support-icon"
            />
          </div>
          <h5 class="h7">Customer support</h5>
          <h6 className="example-description">
            Chat with a customer support agent
          </h6>
          <button
            className="send-example-message-button"
            onClick={() => {
              start(
                "https://chatsamples.com/support-agent/start",
                "support-agent"
              );
            }}
          >
            Click to send customer support message
          </button>
          <a
            href="https://github.com/sendbird/sendbird-uikit-app-samples/blob/main/support-agent/sendbird.js"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-github"></i>
          </a>
        </div>
        <div className="inbox-bullet">
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-notifications.png"
              class="lazyloaded"
              data-was-processed="true"
              alt="order-updates-icon"
            />
          </div>
          <h5 class="h7">Order Tracking</h5>
          <h6 className="example-description">
            Trigger a Sushi delivery notification
          </h6>
          <button
            className="send-example-message-button"
            onClick={() => {
              start(
                "https://chatsamples.com/order-tracking/start",
                "order-tracking"
              );
            }}
          >
            Click to send order tracking message
          </button>
          <a
            href="https://github.com/sendbird/sendbird-uikit-app-samples/blob/main/order-tracking/sendbird.js"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-github"></i>
          </a>
        </div>
        {/* <div className="inbox-bullet">
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-community-conversations@2x.png"
              class="lazyloaded"
              data-was-processed="true"
              alt="marketplace-icon"
            />
          </div>
          <h5 class="h7">Marketplace</h5>
          <h6 className="example-description">
            Share a product detail card with the customer
          </h6>
          <button
            className="send-example-message-button"
            onClick={() => {
              start("https://chatsamples.com/marketplace/start", "marketplace");
            }}
          >
            Click to send marketplace message
          </button>
          <a
            href="https://github.com/sendbird/sendbird-uikit-app-samples/blob/main/marketplace/sendbird.js"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-github"></i>
          </a>
        </div> */}
        <div className="inbox-bullet" onClick={reset}>
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-community-conversations@2x.png"
              class="lazyloaded"
              data-was-processed="true"
              alt="marketplace-icon"
            />
          </div>
          <h5 class="h7">Reset conversation</h5>
        </div>
      </div>
    </div>
  );
}

export default withSendBird(AppDescription);
