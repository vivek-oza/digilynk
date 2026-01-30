import React from "react";
import Marquee from "react-fast-marquee";

// Dynamically import all logos from assets/images/company_logos
const logoModules = import.meta.glob(
  "../../assets/images/company_logos/*.{png,jpg,jpeg,svg,webp}",
  { eager: true }
);

// Build list of logo image URLs (no company names)
const logoUrls = Object.keys(logoModules)
  .map((path) => {
    const module = logoModules[path];
    return module && module.default ? module.default : module;
  })
  .filter(Boolean);

export default function CompanyMarquee() {
  if (!logoUrls || logoUrls.length === 0) return null;

  return (
    <section className="relative bg-background py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h3 className="text-2xl md:text-4xl font-medium text-foreground font-roboto">
            Brands we've worked with
          </h3>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto font-roboto text-base md:text-lg">
            Partners and clients that trust our engineering and design
          </p>
        </div>

        <div className="[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <Marquee
            gradient={false}
            pauseOnHover
            speed={50}
            autoFill
            className="[&>div]:flex [&>div]:items-center"
          >
            <div className="flex items-center gap-16 sm:gap-20 md:gap-24 lg:gap-28 pr-16 sm:pr-20 md:pr-24 lg:pr-28">
              {logoUrls.map((src, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center shrink-0 px-1 py-1 h-16 md:h-24 lg:h-36 rounded-xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm"
                >
                  <img
                    src={src}
                    alt=""
                    className="max-h-full w-auto object-contain rounded-md opacity-70 hover:opacity-100 filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
