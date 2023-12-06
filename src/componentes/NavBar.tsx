import React, { useState } from "react";

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  return (
    <nav className="flex justify-end py-4 items-center bg-[#061559]">
      <div>
        <div className="flex items-center justify-center">
          <div
            className=" relative inline-block text-left dropdown"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <span className="rounded-md shadow-sm">
              <button
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none "
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                aria-controls="headlessui-menu-items-117"
              >
                <span>Ny Hasina</span>
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </span>
            {showNavbar && (
              <div className="dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div
                  className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                  aria-labelledby="headlessui-menu-button-1"
                  id="headlessui-menu-items-117"
                  role="menu"
                >
                  <div className="px-4 py-3">
                    <p className="text-sm leading-5">Signed in as</p>
                    <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                      nyhasina.finaritra@gmail.com
                    </p>
                  </div>

                  <div className="py-1">
                    <a
                      href="/"
                      className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
