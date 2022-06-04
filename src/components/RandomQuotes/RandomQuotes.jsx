import React, { Component } from "react";
import "./RandomQuotes.css";
import Quotes from "../Quotes/Quotes";

class RandomQuotes extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.changeMode();
  }

  render() {
    return (
      <div className="Quote-Container">
        <Quotes className="Random-Quote" quote={this.props.quote.quoteText} />
        <div onClick={this.handleClick} className="Random-Quote-Desc">
          <div className="Desc-Container">
            <h1>{this.props.quote.quoteAuthor}</h1>
            <p>{this.props.quote.quoteGenre}</p>
          </div>
          <div className="arrow">
            <span>&rarr;</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomQuotes;
