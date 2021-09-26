import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Head>
        <title>About - Kampusin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          It's <span className="text-blue-600">About</span> Page 
        </h1>
      </main>
    </div>
  )
}