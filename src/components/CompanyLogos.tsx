import CompanyIcons from "../data/CompanyIcons";

const CompanyLogos = () => {
    return (
        <section>
            <div className="max-w-screen-xl px-4 pb-8 lg:pb-16 mx-auto grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 text-gray-500">
                {CompanyIcons.map((icon) => (
                    <a href={icon.url} key={icon.title}>
                        {icon.svg}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default CompanyLogos;
