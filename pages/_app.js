import Head from "next/head";
import "tailwindcss/tailwind.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="This website provides a list of universities in Indonesia for high school students. You can see the name of the university and its address. Click on the name to go to the campus official website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
