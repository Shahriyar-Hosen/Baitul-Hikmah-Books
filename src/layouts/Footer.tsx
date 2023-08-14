import SocialIcons from "../components/ui/Footer/SocialIcons";
import Support from "../components/ui/Footer/Support";
import Logo from "../components/ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#ece9508a] text-black py-4">
      <div className="container mx-auto my-8 flex flex-col items-center md:flex-row md:justify-between">
        <div className="">
          <Logo />
          <div>
            <p className="text-xl">
              Baitul Hikmah eBook Library - Providing the best collection of
              books to readers around the world.
            </p>
            <p className="text-sm mt-1">
              Address: 123 Book Street, Cityville, Country
            </p>
          </div>
        </div>
        <SocialIcons />
        <Support />
      </div>

      <hr />
      <div className="text-sm text-center my-4">
        &copy; {new Date().getFullYear()} BookStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
