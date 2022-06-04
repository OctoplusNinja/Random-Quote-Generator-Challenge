import React, { Component } from "react";
import "./Quotes.css";

class Quotes extends Component {
  render() {
    return <div className="Quote">“{this.props.quote}”</div>;
  }
}

export default Quotes;
