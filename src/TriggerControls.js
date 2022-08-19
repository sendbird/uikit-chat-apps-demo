import React from "react";
import withSendBird from "@sendbird/uikit-react/withSendbird";

function TriggerControls({ reset, start }) {
  return (
    <div className="trigger-controls">
      <button onClick={() => { start('https://chatsamples.com/promotion/start', 'promotion') }}>Promotion </button>
      <button onClick={() => { start('https://chatsamples.com/sales-concierge/start', 'sales-concierge') }}>Sales concierge</button>
      <button onClick={() => { start('https://chatsamples.com/support-agent/start', 'support-agent') }}>Support agent</button>
      <button onClick={() => { start('https://chatsamples.com/order-tracking/start', 'order-tracking') }}>Order tracking</button>
      <button onClick={() => { start('https://chatsamples.com/marketplace/start', 'marketplace') }}>Marketplace</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default withSendBird(TriggerControls);
