import React, { Component } from "react";
import Quotes from "../Quotes/Quotes";
import axios from "axios";
import Loader from "../Loader/Loader";
import Pagination from "@mui/material/Pagination";
import "./AuthQuotes.css";

const baseURL = "https://quote-garden.herokuapp.com/api/v3/quotes";

class AuthQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteList: [],
      loaded: false,
      pagination: {},
    };
    this.showAuthQuotes = this.showAuthQuotes.bind(this);
    this.changePage = this.changePage.bind(this);
  }
  componentDidMount() {
    axios.get(`${baseURL}?author=${this.props.auth}`).then((res) => {
      this.setState({
        quoteList: res.data.data,
        pagination: res.data.pagination,
        loaded: true,
      });
    });
  }

  changePage(e, num) {
    this.setState({ loaded: false });
    axios
      .get(`${baseURL}?author=${this.props.auth}&page=${num}`)
      .then((res) => {
        this.setState({
          quoteList: res.data.data,
          pagination: res.data.pagination,
          loaded: true,
        });
      });
  }

  showAuthQuotes() {
    return (
      <div className="AuthQuotesContainer">
        <div className="AuthQuotes">
          {this.state.quoteList.map((q) => {
            return <Quotes key={q._id} quote={q.quoteText} />;
          })}
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        {this.state.loaded
          ? this.showAuthQuotes()
          : Array(5)
              .fill()
              .map((e) => <Loader />)}
        <Pagination
          size="large"
          color="primary"
          count={this.state.pagination.totalPages}
          onChange={this.changePage}
        />
      </>
    );
  }
}

export default AuthQuotes;
