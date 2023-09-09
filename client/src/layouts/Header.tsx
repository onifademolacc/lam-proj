import SearchInput from "components/SearchInput";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col">
      <div id="header" className="w-full shadow bg-brand bg-slate-400 ">
        <div className="container flex flex-wrap items-center justify-between w-full px-3 py-3 mx-auto mt-0">
          <div className="flex items-center justify-between w-full pl-2 md:w-1/2 xl:pl-0">
            <a
              className="flex items-center font-extrabold text-white no-underline hover:text-white hover:no-underline"
              href="#"
            >
              <svg
                className="inline h-6 text-white fill-current md:h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 3H2v14h5V3zm2 0v14h9V3H9zM0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm3 1h3v2H3V4zm0 3h3v2H3V7zm0 3h3v2H3v-2z"></path>
              </svg>
              <span className="pl-4 text-2xl md:text-3xl">
                Deezer Music Finder
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
