import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="flex md:fixed md:bottom-0 w-full md:w-3/5 justify-center text-center h-24 bg-white dark:text-white dark:bg-black text-black">
        <p className="flex items-center mx-auto">
          © 2021-Present &nbsp; <a href="https://ninedotslabs.netlify.app">NineDotsLabs</a>
        </p>
      </footer>
    );
  }
}
