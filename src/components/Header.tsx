import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="fixed w-full bg-white">
            <nav className="py-2.5">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <Logo />
                    <Navigation />
                </div>
            </nav>
        </header>
    );
};

export default Header;
