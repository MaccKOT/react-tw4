import React from "react";
import { useState } from "react";

const Header = () => {
    const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

    return (
        <header className="fixed w-full bg-white">
            <nav className="py-2.5">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <a href="#" className="flex items-center">
                        <img src="/logo.svg" className="h-6 mr-3 sm:h-9" />
                        <span className="text-xl font-semibold">
                            Landwind
                        </span>
                    </a>
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMenuShown(!isMenuShown)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            >
                            </path>
                        </svg>
                    </button>
                    <div
                        className={`lg:flex items-center justify-between w-full lg:w-auto lg:order-1 ${
                            isMenuShown ? "" : "hidden"
                        }`}
                    >
                        <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 font-medium">
                            <li>
                                <a
                                    href="#"
                                    className="text-white bg-purple-700 rounded block px-3 py-2"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-700 text-gray-700 rounded block px-3 py-2"
                                >
                                    Company
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-700 text-gray-700 rounded block px-3 py-2"
                                >
                                    Marketplace
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-700 text-gray-700 rounded block px-3 py-2"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-700 text-gray-700 rounded block px-3 py-2"
                                >
                                    Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-purple-700 text-gray-700 rounded block px-3 py-2"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
