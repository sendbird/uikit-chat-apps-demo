import React, { useState, useCallback } from "react";
import withSendBird from "@sendbird/uikit-react/withSendbird";

function TriggerControls({ reset }) {
  return (
    <div>
      <div className="button-wrapper">
        <button>Promotion Message </button>
        <button>Sales concierge</button>
        <button>Support agent</button>
        <button>Order tracking</button>
        <button>Marketplace</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default withSendBird(TriggerControls);
