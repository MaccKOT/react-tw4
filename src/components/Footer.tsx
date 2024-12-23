import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="max-w-screen-xl p-4 py-6 mx-auto md:p-8 lg:p-10">
                <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                        <Logo />
                    </div>
                    <span className="text-center text-gray-500">
                        © 2021-2024 Landwind™. All Rights Reserved. Built with
                        Flowbite and TailwindCSS
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
