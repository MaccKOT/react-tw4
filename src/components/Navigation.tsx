import NavLinks from "../data/NavLinks";
import { useState } from "react";

const Navigation = () => {
    const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

    return (
        <>
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
                    {NavLinks.map((navlink) => {
                        return (
                            <li key={navlink.title}>
                                <a
                                    href={navlink.href}
                                    className="hover:bg-purple-700 hover:rounded text-gray-700 hover:text-white rounded block px-3 py-2"
                                >
                                    {navlink.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Navigation;
