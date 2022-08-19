import React from "react";
import "./TwitterTimeline.css";
import { Timeline } from "react-twitter-widgets";
import { useCallback, useEffect, useState } from "react";

function TwitterTimeline() {
  useEffect(() => {
    // read script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);
    // delete script tag for unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="timeline-wrapper mt-3 ">
      <div>
        <a
          class="twitter-timeline"
          data-width="320"
          data-height="600"
          data-theme="light"
          href="https://twitter.com/PolymathNYC?ref_src=twsrc%5Etfw"
        >
          Tweets by PolymathNYC
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </div>
  );
}

export default TwitterTimeline;
