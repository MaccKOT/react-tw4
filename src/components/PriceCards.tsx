import Card from "./Card";
import CardPrices from "../data/CardPrices";

const PriceCards = () => {
    return (
        <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 lg:py-24">
                <div className="lg:grid lg:grid-cols-3 xl:gap-10">
                    {CardPrices.map((card) => (
                        <Card
                            cardName={card.cardName}
                            promo={card.promo}
                            price={card.price}
                            features={card.features}
                            url={card.url}
                            key={card.cardName}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PriceCards;
