import Head from 'next/head'
import { campusDatas } from '../../lib/data';


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
  )
}

export async function getStaticProps(context) {
    const { params } = context;
    return {
      props: campusDatas.find((campus) => campus.id === params.id), // will be passed to the page component as props
    }
  }

export async function getStaticPaths() {
  return {
    paths: campusDatas.map((campus) => (
        { params: 
            { id: campus.id }
        }
    )),
    fallback: false // See the "fallback" section below
  };
}