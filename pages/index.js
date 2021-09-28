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
    <div>
      <Head>
        <title>Kampusin</title>
        <link rel="icon" href="/ndl.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://use.fontawesome.com/cb65137707.js"></script>
      </Head>

      <main className="font-body container-fluid mx-auto w-full box-border">
        <div className="flex md:flex-row sm:flex-col flex-col w-full">
          <Sidebar />

          <Contents
            data={filteredData}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
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
