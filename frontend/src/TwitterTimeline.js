import React from "react";
import "./TwitterTimeline.css";
import { Timeline } from "react-twitter-widgets";

function TwitterTimeline() {
  return (
    <div className="timeline_wrapper">
      <div>
        <main>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "PolymathNYC",
            }}
            options={{
              height: "500",
              width:"400",
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default TwitterTimeline;
