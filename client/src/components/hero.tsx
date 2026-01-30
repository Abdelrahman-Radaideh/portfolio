import { motion } from "framer-motion";
import { getIconForTechnology } from "../helpers/icon-mapper";


export const Hero = ({ userInfo, skillsData }: any) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">


      <div className="container mx-auto px-4 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[var(--accent)] font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm flex items-center justify-center lg:justify-start gap-2">
              <span className="w-6 h-[1px] bg-[var(--accent)] hidden md:block"></span>
              {userInfo.job_title}
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="text-gradient">Hi, I'm</span> <br />
              <span className="text-gradient">
                {userInfo.name}
              </span>
            </h1>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              {userInfo.hero_description}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button
                className="btn-primary group"
                onClick={() => {
                  document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hire Me Now
              </button>
              <button
                className="px-8 py-3 rounded-full font-semibold text-[var(--text-primary)] border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[var(--accent)] transition-all duration-300"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Work
              </button>
            </div>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
          className="flex-1 relative max-w-md lg:max-w-lg"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] mx-auto group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--accent)] to-[var(--secondary)] opacity-20 blur-3xl animate-pulse-slow group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative w-full h-full p-2 border border-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <img
                className="w-full h-full object-cover rounded-full shadow-2xl transition-all duration-700 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105"
                src={userInfo.picture_url}
                alt={userInfo.name}
                draggable="false"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="w-full mt-24 mb-10 relative">
        <div className="w-full overflow-hidden py-10 bg-white/[0.02] backdrop-blur-sm border-y border-white/5 relative z-10">
          <div className="relative w-full flex overflow-x-hidden">
            <div className="animate-marquee hover-pause whitespace-nowrap flex items-center gap-20 px-10">
              {/* Multiplying the list for seamless loop */}
              {[...skillsData.main, ...skillsData.main, ...skillsData.main].map((tech, index) => (
                <div key={index} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-500 hover:scale-110">
                  <span className="text-4xl text-[var(--text-primary)]">{getIconForTechnology(tech.name)}</span>
                  <span className="text-sm font-bold tracking-widest text-[var(--text-secondary)] uppercase">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-secondary)]"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--accent)] to-transparent"></div>
      </motion.div>
    </section>
  );
};

