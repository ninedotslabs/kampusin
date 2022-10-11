import { useState, useEffect } from "react";
import { getAllContents } from "../lib/data";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Contents from "../components/Contents";
import { useRouter } from "next/router";

export default function Home({campus}) {
  const {query} = useRouter()
  const [dataCampus, setDataCampus] = useState({
    filteredData: campus,
    filters: ""
  });

  useEffect(() => {
    if (query.search) {
      const search = query.search?.toLowerCase() || dataCampus.filters.toLowerCase()
      const data = campus.filter(
        (data) =>
          data.name.toLowerCase().includes(search) ||
          data.tag.toLowerCase().includes(search)
      );
      setDataCampus({
        ...dataCampus,
        filteredData: data,
        filters: query.search ?? ""
      });
      return () => {};
    }
  }, [query]);

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
