import { useState, useEffect } from "react";
import { getAllContents } from "../lib/data";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Contents from "../components/Contents";


export default function Home(props) {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
  });

  useEffect(() => {
    let datas = allData.filter(
      (data) =>
        data.name.toLowerCase().indexOf(filters.search.toLowerCase()) >= 0
    );
    setFilteredData(datas);
    return () => {};
  }, [filters]);

  useEffect(() => {
    setAllData(props.campus);
    setFilteredData(props.campus);
    return () => {};
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Kampusin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Contents
          data={filteredData}
          filters={filters}
          setFilters={setFilters}
        />

        <Sidebar />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allContents = getAllContents();
  return {
    props: {
      campus: allContents.map(({ data, content, id }) => ({
        ...data,
        content,
        id,
      })),
    },
  };
}
