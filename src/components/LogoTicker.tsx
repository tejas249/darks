import Image from "next/image";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";

const logos = [
  acmeLogo,
  quantumLogo,
  echoLogo,
  celestialLogo,
  pulseLogo,
  apexLogo,
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-30">
      <div className="container mx-auto px-4">

        <h2 className="text-center text-white/60 text-base sm:text-lg font-medium">
          Trusted by the most innovative teams
        </h2>

        <div className="overflow-hidden mt-10">
          <div className="flex gap-10 sm:gap-14 lg:gap-20 animate-scroll whitespace-nowrap">

            {logos.concat(logos).map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt="Logo"
                className="h-8 sm:h-10 w-auto flex-none opacity-80 hover:opacity-100 transition"
              />
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};
