import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden py-24">

    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6B21A8_0%,#120428_45%,black_80%)] opacity-40"></div>

      <div className="container mx-auto px-6 relative">
    
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
          Intuitive approach
        </h2>


        <p className="text-center text-xl text-white/70 max-w-2xl mx-auto mt-5">
          Celebrate the joy of accomplishment with an app designed to track your progress effortlessly.
        </p>

      
        <div className="flex justify-center mt-16">
          <div className="relative">

            <div className="absolute inset-0 blur-[120px] bg-purple-600/30 rounded-3xl -z-10"></div>

     
            <Image
              src={appScreen}
              alt="The product screenshot"
              className="rounded-3xl shadow-[0px_0px_40px_rgba(128,0,255,0.4)] hover:border border-dotted border-white/60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
