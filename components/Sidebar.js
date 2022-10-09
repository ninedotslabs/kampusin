import useDarkMode from '../hooks/useDarkMode';
import Footer from './Footer';
import { FaPen, FaLightbulb, FaGithub, FaDiscord } from 'react-icons/fa';

export default function Sidebar() {
  const [colorTheme, setColorTheme] = useDarkMode();

  return (
    <div className="relative bg-white md:w-2/5 sm:w-full w-full h-screen mb-24">
      <div className="flex md:fixed sm:relative relative md:shadow-sidebar shadow-none md:w-2/5 w-full h-full">
        {/* Container */}
        <div className="w-full mx-6 my-12">
          {/* Logo and team description */}
          <div className="flex mb-10">
            <a href="#" className="flex flex-row items-center mr-4">
              <img
                src="/ndl.svg"
                alt="NineDotsLabs logo"
                className="w-20 mr-4 my-auto"
              ></img>
            </a>
            <div className="border border-primary shadow-default rounded p-4 w-full">
              <h1 className="text-xl font-bold mb-2">NineDotsLabs</h1>
              <p className="text-xs">
                Engineer Comunity at UIN Walisongo Semarang
              </p>
            </div>
          </div>

          {/* Main Buttton */}
          <div className="grid lg:grid-cols-4 lg:gap-6 relative sm:grid-cols-2 sm:gap-x-4 sm:gap-y-12 grid-cols-1 gap-y-14 md:grid-cols-1">
            <a
              href="https://github.com/ninedotslabs/kampusin"
              target="_blank"
              className="relative"
            >
              <div className="flex border px-5 py-2 border-write shadow-write rounded absolute hover:top-1 text-main-write hover:bg-main-write hover:shadow-none hover:text-white w-full justify-center">
                <FaPen className="w-3 lg:mr-1 mr-2" />
                <p className="text-xs">Write</p>
              </div>
            </a>

            <a
              href="https://medium.com/nine-dots-labs"
              target="_blank"
              className="relative"
            >
              <div className="flex border px-5 py-2 border-blog shadow-blog rounded text-main-blog hover:bg-main-blog hover:text-white absolute hover:top-1 hover:shadow-none w-full justify-center">
                <FaLightbulb className="w-3 lg:mr-1 mr-2" />
                <p className="text-xs">Blog</p>
              </div>
            </a>

            <a
              href="https://github.com/ninedotslabs"
              target="_blank"
              className="relative"
            >
              <div className="flex border px-3 py-2 border-github shadow-github rounded text-main-github hover:bg-main-github hover:text-white absolute hover:top-1 hover:shadow-none w-full justify-center">
                <FaGithub className="w-4 lg:mr-1 mr-2" />
                <p className="text-xs">GitHub</p>
              </div>
            </a>

            <a
              href="https://discord.gg/AgpSktz"
              target="_blank"
              className="relative"
            >
              <div className="flex border px-3 py-2 border-discord shadow-discord rounded text-main-discord hover:bg-main-discord hover:text-white absolute hover:top-1 hover:shadow-none w-full justify-center">
                <FaDiscord className="w-4 lg:mr-1 mr-2" />
                <p className="text-xs">Discord</p>
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
