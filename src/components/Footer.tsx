import Xsocial from "../assets/icons/x.svg";
import instaIcon from "../assets/icons/insta.svg";
import youtubeIcon from "../assets/icons/youtube.svg";
import getAssetUrl from "../lib/getAssetUrl";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 border-t border-white/10">
      <div className="container">

        <div className="flex flex-col items-center justify-center gap-6">

          {/* Text */}
          <div className="text-white/60 text-sm">
            © 2025 <span className="text-white font-medium">Tejas</span> — All Rights Reserved
          </div>

          {/* Social Icons */}
          <ul className="flex items-center gap-5">
            <li>
              <a href="#" className="group">
                <img
                  src={getAssetUrl(Xsocial)}
                  alt="X social"
                  className="h-6 w-6 opacity-80 transition-all group-hover:opacity-100 group-hover:scale-110"
                />
              </a>
            </li>

            <li>
              <a href="#" className="group">
                <img
                  src={getAssetUrl(youtubeIcon)}
                  alt="YouTube"
                  className="h-6 w-6 opacity-80 transition-all group-hover:opacity-100 group-hover:scale-110"
                />
              </a>
            </li>

            <li>
              <a href="#" className="group">
                <img
                  src={getAssetUrl(instaIcon)}
                  alt="Instagram"
                  className="h-6 w-6 opacity-80 transition-all group-hover:opacity-100 group-hover:scale-110"
                />
              </a>
            </li>
          </ul>

        </div>

      </div>
    </footer>
  );
};
