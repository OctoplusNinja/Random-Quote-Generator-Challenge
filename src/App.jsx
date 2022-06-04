import React, { Component } from "react";
import { MdAutorenew } from "react-icons/md";
import RandomQuotes from "./components/RandomQuotes/RandomQuotes";
import AuthQuotes from "./components/AuthQuotes/AuthQuotes";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import axios from "axios";
import "./App.css";

const baseURL = "https://quote-garden.herokuapp.com/api/v3/quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: undefined,
      authView: false,
      loading: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeViewMode = this.changeViewMode.bind(this);
  }
  componentDidMount() {
    this.fetchQuotes();
  }
  fetchQuotes() {
    axios.get(`${baseURL}/random`).then((res) => {
      this.setState({ quote: res.data.data[0], loading: false });
    });
  }
  handleClick() {
    this.setState({ loading: true });
    this.setState({ authView: false });
    this.fetchQuotes();
  }
  changeViewMode() {
    this.setState({ authView: true });
  }

  randomView() {}

  render() {
    return (
      <div className="App">
        <div className="random-btn">
          <span onClick={this.handleClick}>
            random
            <span className="refresh-icon">
              <MdAutorenew className="icon" />
            </span>
          </span>
        </div>
        {!this.state.authView ? (
          this.state.loading ? (
            <Loader button />
          ) : (
            <RandomQuotes
              changeMode={this.changeViewMode}
              quote={this.state.quote}
            />
          )
        ) : (
          <AuthQuotes auth={this.state.quote.quoteAuthor} />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
