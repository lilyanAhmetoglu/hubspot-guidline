import React, { Component } from "react";
import queryString from "query-string";
import Server from "../../services/server";
export default class Dashboard extends Component {
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const code = query.get("code");
    console.log(code);
    Server.authcode(code).then((res) => {
      console.log("resposnse is" + res);
    });
  }
  render() {
    return <div>Dashboard is here</div>;
  }
}
