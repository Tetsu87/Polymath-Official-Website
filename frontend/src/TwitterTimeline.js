import React from "react";
import "./TwitterTimeline.css";
import { Timeline } from "react-twitter-widgets";

function TwitterTimeline() {
  return (
    <div className="timeline_wrapper mt-3 mx-3">
      <div>
        <main>
          <Timeline className="timeline-height"
            dataSource={{
              sourceType: "profile",
              screenName: "PolymathNYC",
            }}
            options={{
              height: "500",
              width:"375",
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default TwitterTimeline;
