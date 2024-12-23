import { Fragment } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogos";
import FeaturesSection from "./components/FeaturesSection";
import PriceCards from "./components/PriceCards";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Fragment>
            <Header />
            <Hero />
            <CompanyLogos />
            <FeaturesSection />
            <PriceCards />
            <Footer />
        </Fragment>
    );
};

export default App;
