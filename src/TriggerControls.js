import React from "react";
import withSendBird from "@sendbird/uikit-react/withSendbird";

function TriggerControls({ reset, promotion, marketplace }) {
  return (
    <div className="trigger-controls">
        <button onClick={promotion}>Promotion </button>
        <button>Sales concierge</button>
        <button>Support agent</button>
        <button>Order tracking</button>
        <button >Marketplace</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
}

export default withSendBird(TriggerControls);
