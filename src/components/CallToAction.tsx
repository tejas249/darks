export const CallToAction = () => {
  return (
    <div className="relative bg-black text-white py-24 overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,49,220,0.4),transparent_70%)]"></div>

      <div className="container relative z-10 text-center">
        
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tight">
          Get Instant Access
        </h2>

        <p className="text-xl text-white/70 mt-5 max-w-xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your 
          progress and motivate your efforts.
        </p>

     
        <form className="mt-10 flex flex-col sm:flex-row sm:justify-center gap-3 max-w-lg mx-auto px-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-12 bg-white/10 backdrop-blur-md rounded-lg px-5 font-medium
                       placeholder:text-white/40 text-white border border-white/10
                       focus:outline-none focus:ring-2 focus:ring-purple-500/80 w-full"
          />

          <button
            className="h-12 w-auto px-6 rounded-lg bg-white text-black font-semibold 
                       transition-all hover:bg-white/90 hover:scale-[1.02]"
          >
            Get Access
          </button>
        </form>

        <p className="text-sm text-white/40 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};
