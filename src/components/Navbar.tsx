import logoImage from "../assets/images/logosaas.png";
import Image from "next/image";
import menuIcon from "../assets/icons/menu.svg";
import getAssetUrl from "../lib/getAssetUrl";

export const Navbar = () => {
  return (
    <header className="p-1 bg-black self-center">
      <div className="p-2 flex items-center justify-between">

        {/* Logo + Glow */}
        <div className="relative w-12 h-12 flex items-center justify-center ml-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] 
            blur-lg rounded-full"></div>

          <Image
            src={logoImage}
            alt="Saas Logo"
            width={48}
            height={48}
            className="relative z-10"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 items-center sm:flex ">
          <a href="#about" className="text-white/60 hover:text-white transition">About</a>
          <a href="#features" className="text-white/60 hover:text-white transition">Features</a>
          <a href="#updates" className="text-white/60 hover:text-white transition">Updates</a>
          <a href="#help" className="text-white/60 hover:text-white transition">Help</a>
          <a href="#customers" className="text-white/60 hover:text-white transition">Customers</a>
          <button className="bg-white py-2 px-4 rounded-lg">Get It Free</button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="sm:hidden border border-gray-600/30 h-10 w-10 flex justify-center items-center rounded-lg">
          <img
            src={getAssetUrl(menuIcon)}
            alt="menu"
            className="h-6 w-6"
            style={{ filter: "invert(1)" }}
          />
        </button>

      </div>
    </header>
  );
};
