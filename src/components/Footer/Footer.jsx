import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        created by{" "}
        <a
          href="https://devchallenges.io/portfolio/OctoplusNinja"
          target="_blank"
          rel="noopener noreferrer"
        >
          @OctoplusNinja
        </a>{" "}
        - devChallenges.io
      </div>
    );
  }
}

export default Footer;
