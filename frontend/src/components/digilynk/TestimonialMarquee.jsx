import React from "react";
import { Marquee } from "../magicui/marquee";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav",
    handle: "@aarav",
    text:
      "Digilynk's QA team caught edge cases we missed. Our release was smooth and on time.",
  },
  {
    name: "Isha",
    handle: "@isha",
    text:
      "Superb attention to detail and clear reporting. Performance improved noticeably.",
  },
  {
    name: "Rohan",
    handle: "@rohan",
    text:
      "Their automation saved us hours every sprint. Great partner for scaling.",
  },
  {
    name: "Meera",
    handle: "@meera",
    text:
      "Security and API testing were top-notch. We trust their recommendations.",
  },
  {
    name: "Kabir",
    handle: "@kabir",
    text:
      "Excellent UX audits. Our flows are cleaner and conversions are up.",
  },
  {
    name: "Sara",
    handle: "@sara",
    text:
      "Thorough mobile testing across devices. Zero critical bugs post launch.",
  },
];

function AvatarDot({ i }) {
  // Nice subtle gradient dot for avatar placeholder
  const gradients = [
    "from-fuchsia-500 via-pink-500 to-orange-400",
    "from-indigo-500 via-blue-500 to-cyan-400",
    "from-emerald-500 via-green-500 to-lime-400",
    "from-amber-500 via-orange-500 to-rose-500",
    "from-sky-500 via-cyan-500 to-teal-400",
    "from-purple-500 via-violet-500 to-indigo-400",
  ];
  const g = gradients[i % gradients.length];
  return (
    <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${g}`} />
  );
}

function TestimonialCard({ t, i }) {
  return (
    <div className="min-w-[320px] max-w-[360px] rounded-2xl bg-zinc-900/80 border border-zinc-800 p-5 sm:p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <AvatarDot i={i} />
        <div className="leading-tight">
          <p className="text-sm sm:text-base text-white font-medium">{t.name}</p>
          <p className="text-xs sm:text-sm text-zinc-400">{t.handle}</p>
        </div>
        <Quote className="ml-auto h-4 w-4 text-zinc-500" />
      </div>
      <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">{t.text}</p>
    </div>
  );
}

export default function TestimonialMarquee() {
  // Split into two rows for opposite directions
  const mid = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, mid);
  const row2 = testimonials.slice(mid);

  return (
    <section className="relative bg-black py-20 md:py-28 overflow-hidden">
      {/* Background dots to match theme */}
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

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h3 className="text-2xl md:text-4xl font-medium text-white font-roboto">
            What our clients say
          </h3>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto font-roboto">
            Real feedback from teams that ship with confidence using Digilynk QA
          </p>
        </div>

        <div className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          {/* Row 1 */}
          <Marquee pauseOnHover className="[--gap:1.5rem] [--duration:35s]">
            {row1.concat(row1).map((t, idx) => (
              <TestimonialCard key={idx} t={t} i={idx} />
            ))}
          </Marquee>

          {/* Row 2 - reverse direction */}
          <Marquee
            pauseOnHover
            reverse
            className="mt-6 [--gap:1.5rem] [--duration:38s]"
          >
            {row2.concat(row2).map((t, idx) => (
              <TestimonialCard key={`r2-${idx}`} t={t} i={idx + 10} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
