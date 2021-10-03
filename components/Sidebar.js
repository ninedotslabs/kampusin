import { Component } from "react";
import useDarkMode from "../hooks/useDarkMode";

export default function Sidebar() {
  const [colorTheme, setColorTheme] = useDarkMode();

  return (
    <div className="relative bg-white md:w-2/5 sm:w-full w-full h-screen mb-24">
      <div className="flex md:fixed sm:relative relative md:shadow-sidebar shadow-none md:w-2/5 w-full h-full">
        <div className="w-full mx-6 my-12">
          <div className="flex mb-10">
            <a href="/">
              <img
                src="/ndl.svg"
                alt="Nine Dots Labs logo"
                className="w-20 mr-4 my-auto"
              ></img>
            </a>
            <div className="border border-primary shadow-default rounded p-4">
              <h1 className="text-xl font-bold mb-2">Nine Dots Labs</h1>
              <p className="text-xs">
                Software Engineering Enthusiasts Organization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
