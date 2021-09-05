import Head from 'next/head'
import Link from 'next/link'
import { campusDatas } from '../lib/data'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Kampusin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Kampusin</h1>
      </main>

      <div>
        {campusDatas.map((item) => (
          <div key={item.id} className="my-4">
            <h2 className="font-bold">
              <Link href={`campus/${item.id}`}>
                <a>{item.name}</a>
              </Link>
            </h2>
            <h3>{item.region}</h3>
            <h3>{item.address}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
