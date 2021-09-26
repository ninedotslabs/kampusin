import Head from "next/head";
import { getAllContents } from "../../lib/data";

export default function CampusPage({ name, region, address }) {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="font-bold">{name}</h1>
        <h2>{region}</h2>
        <h2>{address}</h2>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allContents = getAllContents();
  const content = allContents.find((item) => item.id === params.id);
  return {
    props: {
      ...content.data,
      // content: content.content
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllContents().map((campus) => ({ params: { id: campus.id } })),
    fallback: false, // See the "fallback" section below
  };
}
