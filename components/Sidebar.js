import useDarkMode from "../hooks/useDarkMode";
import Footer from "./Footer";

export default function Sidebar() {
  const [colorTheme, setColorTheme] = useDarkMode();

  return (
    <div className="relative bg-white md:w-2/5 sm:w-full w-full h-screen mb-24">
      <div className="flex md:fixed sm:relative relative md:shadow-sidebar shadow-none md:w-2/5 w-full h-full">
        {/* Container */}
        <div className="w-full mx-6 my-12">
          {/* Logo and team description */}
          <div className="flex mb-10">
            <a href="#">
              <img
                src="/ndl.svg"
                alt="Nine Dots Labs logo"
                className="w-20 mr-4 my-auto"
              ></img>
            </a>
            <div className="border border-primary shadow-default rounded p-4">
              <h1 className="text-xl font-bold mb-2">Nine Dots Labs</h1>
              <p className="text-xs">
                Engineer Comunity at UIN Walisongo Semarang
              </p>
            </div>
          </div>

          {/* Main Buttton */}
          <div className="grid grid-cols-4 gap-6 relative">
            <a href="https://github.com/ninedotslabs/kampusin" target="_blank">
              <div className="flex border px-5 py-2 border-write shadow-write rounded absolute hover:top-1 text-main-write hover:bg-main-write hover:shadow-none hover:text-white">
                <svg
                  className="w-3 mr-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="pencil"
                  class="svg-inline--fa fa-pencil"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M497.9 74.16l-60.09-60.1c-18.75-18.75-49.19-18.75-67.93 0L313.4 70.61l127.1 128l56.56-56.55C516.7 123.3 516.7 92.91 497.9 74.16zM31.04 352.1c-2.234 2.234-3.756 5.078-4.377 8.176l-26.34 131.7C-1.703 502.1 6.156 512 15.95 512c1.049 0 2.117-.1035 3.199-.3203l131.7-26.34c3.098-.6191 5.941-2.141 8.176-4.373l259.7-259.7l-128-128L31.04 352.1zM131.9 440.2l-75.14 15.03l15.03-75.15L96 355.9V416h60.12L131.9 440.2z"
                  ></path>
                </svg>
                <p className="text-xs m-auto">Write</p>
              </div>
            </a>

            <a href="https://medium.com/nine-dots-labs" target="_blank">
              <div className="flex border px-5 py-2 border-blog shadow-blog rounded text-main-blog hover:bg-main-blog hover:text-white absolute hover:top-1 hover:shadow-none">
                <svg
                  className="w-3 mr-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="lightbulb"
                  class="svg-inline--fa fa-lightbulb"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"
                  ></path>
                </svg>
                <p className="text-xs m-auto">Blog</p>
              </div>
            </a>

            <a href="https://github.com/ninedotslabs" target="_blank">
              <div className="flex border px-3 py-2 border-github shadow-github rounded text-main-github hover:bg-main-github hover:text-white absolute hover:top-1 hover:shadow-none">
                <svg
                  className="w-4 mr-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  class="svg-inline--fa fa-github"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
                <p className="text-xs m-auto">GitHub</p>
              </div>
            </a>

            <a href="https://discord.gg/AgpSktz" target="_blank">
              <div className="flex border px-3 py-2 border-discord shadow-discord rounded text-main-discord hover:bg-main-discord hover:text-white absolute hover:top-1 hover:shadow-none">
                <svg
                  className="w-4 mr-1 mx-auto"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="discord"
                  class="svg-inline--fa fa-discord"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"
                  ></path>
                </svg>
                <p className="text-xs mx-auto">Discord</p>
              </div>
            </a>
          </div>

          {/* Project description */}
          <div className=" mt-20 mb-8">
            <h3 className=" text-md font-bold mb-3">Kampusin</h3>
            <p className="text-xs">
              This website provides a list of universities in Indonesia for high
              school students. You can see the name of the university and its
              address. Click on the name to go to the campus official website
            </p>
          </div>

          <div>
            <a href="https://github.com/ninedotslabs/kampusin/blob/main/CONTRIBUTING.md">
              <div className="border rounded border-main-categories text-main-categories w-full py-3 transition duration-500 hover:bg-main-categories hover:text-white">
                <p className="text-xs font-bold text-center">Contribute now</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
