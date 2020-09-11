import React, { Component } from "react";
import Server from "../services/server";
export default class Callback extends Component {
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const code = query.get("code");
    console.log(code);
    Server.authcode(code).then((res) => {
      let respoo = JSON.parse(res.data.body);
      console.log("respoo" + respoo.access_token);
      if(respoo.access_token){
        sessionStorage.setItem("token", JSON.stringify(respoo.access_token));
        window.location.href="/qsales";
      }else{
        window.location.href="/login";
      }
      
    });
  }
  render() {
    return <div>loading</div>;
  }
}
