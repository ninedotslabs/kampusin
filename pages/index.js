import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Kampusin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to {' '}
          <a className="text-blue-600" href="https://ninedotslabs.netlify.app/">
            Kampusin
          </a>
        </h1>
      </main>
    </div>
  )
}
