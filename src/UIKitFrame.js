import React, { useState, useCallback } from "react";
import withSendBird from "@sendbird/uikit-react/withSendbird";

function UIKitFrame() {
  return (
    <div>
      <div className="button-wrapper">
        <button>Promotion Message </button>
        <button>Sales concierge</button>
        <button>Support agent</button>
        <button>Order tracking</button>
        <button>Marketplace</button>
      </div>

      <iframe className="uikit-frame" src="/uikit" title="UIKit"></iframe>
    </div>
  );
}

export default withSendBird(UIKitFrame);
