import React from "react";
import Marquee from "react-fast-marquee";

// Dynamically import all logos from assets/images/company_logos
// Vite will convert image imports to URLs. With eager: true, we can read them at runtime.
const logoModules = import.meta.glob(
  "../../assets/images/company_logos/*.{png,jpg,jpeg,svg,webp}",
  { eager: true }
);

const logos = Object.entries(logoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]) => (mod && mod.default ? mod.default : mod));

function filenameToAlt(url) {
  try {
    const name = url.split("/").pop() || "logo";
    return name
      .replace(/\.[^.]+$/, "")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  } catch {
    return "Company logo";
  }
}

export default function CompanyMarquee() {
  if (!logos || logos.length === 0) return null;

  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden border-y border-zinc-800">
      {/* Subtle background dots like testimonials */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 md:mb-14">
          <h3 className="text-2xl md:text-4xl font-medium text-white font-roboto">
            Brands we’ve worked with
          </h3>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto font-roboto">
            Partners and clients that trust our engineering and design
          </p>
        </div>

        <div className="[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <Marquee
            gradient={false}
            pauseOnHover
            speed={50}
            autoFill
            className="[&>div]:flex [&>div]:items-start"
          >
            <div className="flex items-start gap-24 sm:gap-28 md:gap-32 lg:gap-36 pr-24 sm:pr-28 md:pr-32 lg:pr-36">
              {logos.map((src, idx) => (
                <div key={idx} className="flex items-start shrink-0">
                  <img
                    src={src}
                    alt={filenameToAlt(src)}
                    className="self-start max-h-16 md:max-h-20 lg:max-h-24 object-contain filter grayscale hover:grayscale-0 transition duration-300 ease-out opacity-80 hover:opacity-100 select-none"
                    loading="lazy"
                    draggable={false}
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
