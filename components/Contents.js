import React, { Component } from "react";
import Link from "next/link";

export default class Contents extends Component {
  constructor(props) {
    super(props);
  }

  search(searchWord) {
    this.props.setFilters({
      search: searchWord,
    });
  }

  render() {
    return (
      <div className="md:w-3/5 w-full bg-gray-200">
        <div className="w-full my-12">
          <div className="flex flex-col right-0 w-full h-full">
            <h1 className="text-xl font-bold w-11/12 mx-auto text-center mb-10">
              List Campus on Indonesia for Young Students
            </h1>
            <input
              className="mx-auto rounded w-11/12 border border-main-search shadow-search outline-none px-4 py-2 mb-10 dark:bg-dark-grey"
              type="text"
              placeholder="Live search keyword ..."
              onChange={(e) => this.search(e.target.value)}
            />
            {this.props.data.map((item) => (
              <div
                key={item.id}
                className="mx-auto w-11/12 bg-white mb-6 rounded shadow-content dark:bg-dark-grey"
              >
                <a href="">
                  <div className="flex px-5 py-8">
                    <div>
                      <img src={item.image} className=" w-20 mr-24 sm:mr-12 md:mr-6"></img>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold mb-3">
                        {item.name}
                      </h2>
                      <h3 className="dark:text-white text-sm">{item.region}</h3>
                      <h3 className="dark:text-white text-sm">{item.address}</h3>
                      <p className="text-xs mt-3"><span className="font-bold">Categories</span>: Depok</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="flex flex-col right-0">
          <div className="bg-gray-100 dark:bg-dark-black w-3/5 ml">
            <h1 className="text-xl font-bold dark:text-white text-center mb-5 py-5">
              Kampusin<span className="text-blue-400">.</span>
            </h1>
            <div className="grid justify-around gap-y-8 ">
              <input
                className="border-2 p-1 dark:bg-dark-grey"
                type="text"
                placeholder="Search"
                onChange={(e) => this.search(e.target.value)}
              />
              {this.props.data.map((item) => (
                <Link href={`campus/${item.id}`}>
                  <a>
                    <div
                      key={item.id}
                      className="bg-white w-96 dark:bg-dark-grey rounded-md hover:shadow-xl transition-shadow"
                    >
                      <div className="p-10">
                        <h2 className=" text-xl font-bold text-blue-400">
                          {item.name}
                        </h2>
                        <h3 className="dark:text-white">{item.region}</h3>
                        <h3 className="dark:text-white">{item.address}</h3>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
   */
}
