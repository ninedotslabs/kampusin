import React, { Component } from "react";
import Footer from "./Footer";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="w-0">
        <div className="w-96 h-screen fixed right-0">
            <h1 className="text-center">This is a sidebar</h1>
            <Footer />
        </div>
      </div>
    );
  }
}
