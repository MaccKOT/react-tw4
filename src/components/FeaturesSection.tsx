import React from "react";

const FeaturesSection = () => {
    return (
        <section className="bg-gray-50">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 lg:py-24">
                <div className="lg:grid gap-8 lg:grid-cols-2">
                    <div className="flex items-center">
                        <div className="text-gray-500">
                            <h2 className="mb-4 text-3xl font-extrabold text-gray-900">
                                Work with tools you already use
                            </h2>
                            <p className="mb-8 lg:text-xl">
                                Deliver great service experiences fast - without
                                the complexity of traditional ITSM solutions.
                                Accelerate critical development work, eliminate
                                toil, and deploy changes with ease.
                            </p>
                            <ul className="pt-8 border-t border-gray-200 my-7">
                                <li className="flex align-items mb-3">
                                    <svg
                                        className="w-5 h-5 text-purple-500 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        >
                                        </path>
                                    </svg>
                                    <span className="text-gray-900 font-medium">
                                        Continuous integration and deployment
                                    </span>
                                </li>
                                <li className="flex align-items mb-3">
                                    <svg
                                        className="w-5 h-5 text-purple-500 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        >
                                        </path>
                                    </svg>
                                    <span className="text-gray-900 font-medium">
                                        Development workflow
                                    </span>
                                </li>
                                <li className="flex align-items">
                                    <svg
                                        className="w-5 h-5 text-purple-500 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        >
                                        </path>
                                    </svg>
                                    <span className="text-gray-900 font-medium">
                                        Knowledge management
                                    </span>
                                </li>
                            </ul>
                            <p className="lg:text-xl">
                                Deliver great service experiences fast - without
                                the complexity of traditional ITSM solutions.
                            </p>
                        </div>
                    </div>
                    <img src="./feature-1.png" className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
