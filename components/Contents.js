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
      <div className="w-screen bg-gray-100 mr-96">
        <h1 className="text-6xl font-bold text-center mb-5 py-5">
          Kampus<span className="text-blue-400">in</span>
        </h1>
        <div className="grid justify-around">
          <input className="border-2 p-1 mb-4" type="text" placeholder="Search" onChange={e => this.search(e.target.value)} />
          {this.props.data.map((item) => (
            <div key={item.id} className="border-2 bg-white w-96 rounded-md mb-10">
              <div className="p-10">
                <h2 className=" text-xl font-bold hover:text-blue-400">
                  <Link href={`campus/${item.id}`}>
                    <a>{item.name}</a>
                  </Link>
                </h2>
                <h3>{item.region}</h3>
                <h3>{item.address}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
