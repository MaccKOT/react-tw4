import { CardTypes } from "../data/CardTypes";

const Card = ({ cardName, promo, price, features, url }: CardTypes) => {
    return (
        <div className="p-6 text-center text-gray-900 bg-white border border-gray-100 ronded-lg shadow xl:p-8 mx-auto max-w-lg">
            <h3 className="mb-4 text-2xl font-semibold">
                {cardName}
            </h3>
            <p className="text-gray-500 font-light">
                {promo}
            </p>
            <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-5xl font-extrabold">
                    ${price}
                </span>
                <span className="text-gray-500">/month</span>
            </div>
            <ul className="mb-8 text-left space-y-4">
                {features.map((feature) => {
                    return (
                        <li
                            className="flex items-center space-x-3"
                            key={feature}
                        >
                            <svg
                                className="w-5 h-5 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                >
                                </path>
                            </svg>
                            <span>{feature}</span>
                        </li>
                    );
                })}
            </ul>
            <a
                href={url}
                className="text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center block"
            >
                Get started
            </a>
        </div>
    );
};

export default Card;
