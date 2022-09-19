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
          href="https://docs.google.com/document/d/1aS7iOJy0rg0HuXsNHGyTWSQqPgrswErokS0BhRI12E4/edit"
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
                // "https://chatsamples.com/support-agent/start",
                //"http://localhost:8289/support-agent/start",
                "http://localhost:8289/start",
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
        <div className="inbox-bullet">
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-notifications.png"
              class="lazyloaded"
              data-was-processed="true"
              alt="order-updates-icon"
            />
          </div>
          <h5 class="h7">Calendar Appointment</h5>
          <h6 className="example-description">
            Trigger a calendar notification
          </h6>
          <button
            className="send-example-message-button"
            onClick={() => {
              start(
                // "https://chatsamples.com/calendar-appointment/start",
                // "calendar-appointment"
                "http://localhost:8281/start",
                "calendar-appointment"
              );
            }}
          >
            Click to send calendar appointment success message
          </button>
          <a
            href="https://github.com/sendbird/sendbird-uikit-app-samples/blob/main/calendar-appointment/sendbird.js"
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
          <h5 class="h7">Movie Tickets</h5>
          <h6 className="example-description">
            Trigger a movie ticket notification
          </h6>
          <button
            className="send-example-message-button"
            onClick={() => {
              start(
                "https://chatsamples.com/movie-tickets/start",
                "movie-tickets"
              );
            }}
          >
            Click to send movie ticket confirmation message
          </button>
          <a
            href="https://github.com/sendbird/sendbird-uikit-app-samples/blob/main/movie-tickets/sendbird.js"
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
          <h5 class="h7">Purchase Receipt</h5>
          <h6 className="example-description">
            Send a purchase notification
          </h6>
          <button
            className="send-example-message-button"
            onClick={() => {
              start(
                "https://chatsamples.com/purchase-receipt/start",
                "purchase-receipt"
              );
            }}
          >
            Click to send purchase receipt message
          </button>
          <a
            href="https://github.com/sendbird/sendbird-uikit-app-samples/blob/main/purchase-receipt/sendbird.js"
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
