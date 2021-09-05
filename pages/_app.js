import 'tailwindcss/tailwind.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* Navigation bar starts here*/}
      <nav>
        <ul className="flex justify-center">
          <li className="mx-1 hover:underline">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="mx-1 hover:underline">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>

      <Component {...pageProps} />
      
      {/* Footer starts here */}
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="flex items-center justify-center">
          Created with&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>&nbsp;
          by
        <a href="">
          <img src="/ninedotslabs.png" alt="Vercel Logo" className="h-9 ml-2" />
        </a>
        </p>
      </footer>
    </div>
  )
}

export default MyApp
