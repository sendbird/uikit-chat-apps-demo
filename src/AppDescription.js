import React, { useState, useCallback } from "react";
import withSendBird from "@sendbird/uikit-react/withSendbird";
import "./styles.css";
import "@sendbird/uikit-react/dist/index.css";

function AppDescription() {
  return (
    <div className="app-description">
      <h3 class="h3">A unified experience</h3>
      <p>
        Users wouldn’t leave your app if they didn’t have to. Why send them
        hunting across SMS, email, and messenger apps to track down messages?
      </p>
      <div className="inbox-bullets">
        <div className="inbox-bullet">
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-marketing.png"
              class="lazyloaded"
              data-was-processed="true"
            />
          </div>
          <h5 class="h7">Marketing promotions</h5>
        </div>
        <div className="inbox-bullet">
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-sales-concierge.png"
              class="lazyloaded"
              data-was-processed="true"
            />
          </div>
          <h5 class="h7">Sales conversations</h5>
        </div>
        <div className="inbox-bullet">
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-customer-support.png"
              class="lazyloaded"
              data-was-processed="true"
            />
          </div>
          <h5 class="h7">Customer support</h5>
        </div>
        <div className="inbox-bullet">
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-notifications.png"
              class="lazyloaded"
              data-was-processed="true"
            />
          </div>
          <h5 class="h7">Order updates</h5>
        </div>
        <div className="inbox-bullet">
          <div className="bullet-icon">
            <img
              src="https://sendbird.com/wp-content/themes/sendbird-sb/assets/img/unified-inbox/inbox-community-conversations@2x.png"
              class="lazyloaded"
              data-was-processed="true"
            />
          </div>
          <h5 class="h7">Marketplace</h5>
        </div>
      </div>
    </div>
  );
}

export default withSendBird(AppDescription);
