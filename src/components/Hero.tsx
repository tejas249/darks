export const Hero = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_60%,#A46EDB_82%)] text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-2 sm:gap-3 border py-1 px-3 sm:px-4 rounded-lg border-white/30 text-sm sm:text-base"
          >
            <span className="bg-linear-to-r from-red-500 to-blue-500 text-transparent bg-clip-text">
              Version 2.0 is Free
            </span>

            <span className="inline-flex items-center gap-1">
              <span>Read More!!</span>
            </span>
          </a>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center mt-8">
          One Task at a Time
        </h1>

        <p className="text-center text-base sm:text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
          Celebrate the joy of accomplishments with an app designed to track
          progress, motivate your efforts and celebrate success.
        </p>

        <div className="flex justify-center items-center mt-8">
          <button className="bg-white text-black py-3 px-5 sm:px-6 rounded-lg font-medium text-sm sm:text-base">
            Get for Free
          </button>
        </div>
      </div>
      <div className="bg-linear-to-t from-slate-900 to-fuchsia-500">

      </div>
    </div>
  );
};
