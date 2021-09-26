import Head from "next/head";
import Link from "next/link";
import { getAllContents } from "../lib/data";

export default function Home(props) {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Kampusin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl font-bold text-center mb-10">
          Welcome to <span className="text-blue-400">Kampusin</span>
        </h1>
        <div className="grid justify-around">
          {props.campus.map((item) => (
            <div key={item.id} className="border-2 w-96 rounded-md mb-10">
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
