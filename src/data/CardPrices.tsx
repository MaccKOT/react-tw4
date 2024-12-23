type Card = {
    cardName: string;
    promo: string;
    price: number;
    features: Array<string>;
    url: string;
};

const Prices: Array<Card> = [
    {
        cardName: "Starter",
        promo: "Best option for personal use & for your next project.",
        price: 9,
        features: [
            "No individual configuration",
            "No setup, or hidden fees",
            "Team size: 1 developer",
            "Premium support: none",
            "Free updates: 3 months",
        ],
        url: "#plan1",
    },
    {
        cardName: "Team",
        promo: "Popular option for small team of developers & starups",
        price: 29,
        features: [
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size: 10 developer",
            "Premium support: 6 months",
            "Free updates: 1 year",
        ],
        url: "#plan2",
    },
    {
        cardName: "Enterprise",
        promo:
            "Best option for enterprise. A personalized agreement is concluded.",
        price: 99,
        features: [
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size: 10+ developer",
            "Premium support: 1 year",
            "Free updates: forever",
        ],
        url: "#plan3",
    },
];

export default Prices;
