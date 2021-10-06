import { useState, useEffect } from "react";
import { getAllContents } from "../lib/data";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Contents from "../components/Contents";
import Footer  from "../components/Footer";

export default function Home({campus}) {
  const [dataCampus, setDataCampus] = useState({
    filteredData: [],
    filters: ""
  });

  useEffect(() => {
    const data = campus.filter(
      (data) =>
        data.name.toLowerCase().includes(dataCampus.filters.toLowerCase()) ||
        data.tag.toLowerCase().includes(dataCampus.filters.toLowerCase())
    );
    setDataCampus({
      ...dataCampus,
      filteredData: data
    });
    return () => {};
  }, [dataCampus.filters]);

  return (
    <div>
      <Head>
        <title>Kampusin</title>
        <link rel="icon" href="/ndl.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
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
            dataCampus={dataCampus}
            data={dataCampus.filteredData}
            setDataCampus={setDataCampus}
          />
        </div>
        <Footer />
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
