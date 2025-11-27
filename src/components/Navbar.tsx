import logoImage from "../assets/images/logosaas.png";
import Image from "next/image";
import menuIcon from "../assets/icons/menu.svg";
import getAssetUrl from "../lib/getAssetUrl";

export const Navbar = () => {
  return (
    <div className="p-1 bg-black">
      <div className="p-2 flex items-center justify-between gap-3">

        {/* Logo + Glow */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-lg rounded-full"></div>

          <Image
            src={logoImage}
            alt="Saas Logo"
            width={48}
            height={48}
            className="relative z-10"
          />
        </div>

        {/* Menu Icon */}
        <div className="border border-gray-600/30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
          <img
            src={getAssetUrl(menuIcon)}
            alt="menu"
            className="h-6 w-6"
            style={{ filter: "invert(1)" }}
          />
        </div>
      </div>
    </div>
  );
};
