import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="flex w-full justify-center h-24 bg-white dark:text-white dark:bg-black text-black">
        <p className="flex items-center justify-center">
          © 2021-Present &nbsp; <a href="https://ninedotslabs.netlify.app">Nine Dots Labs</a>
        </p>
      </footer>
    );
  }
}
