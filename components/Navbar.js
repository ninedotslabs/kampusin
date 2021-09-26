import React, { Component } from "react";
import Link from "next/link";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="flex justify-center">
          <li className="mx-1 hover:underline">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="mx-1 hover:underline">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
