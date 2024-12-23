const Hero = () => {
    return (
        <section>
            <div className="max-w-screen-xl flex align-center justify-between mx-auto pt-20 px-4 pb-8">
                <div className="place-self-center">
                    <h1 className="text-4xl font-extrabold mb-4 xl:text-6xl">
                        Building digital <br /> products & brands.
                    </h1>
                    <p className="text-gray-500 font-light md:text-lg lg:text-xl">
                        This free and open-source landing page template was
                        built using the utility classes from TailwindCSS and
                        based on the components from the Flowbite Library and
                        the Blocks System.
                    </p>
                </div>
                <div>
                    <img src="./hero.png" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
