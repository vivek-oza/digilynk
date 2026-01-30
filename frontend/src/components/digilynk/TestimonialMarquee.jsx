import React from "react";
import { Marquee } from "../magicui/marquee";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ankita",
    handle: "Founder, local retail brand",
    text:
      "We needed a clean website that didn’t slow us down. Digilynk designed and built it faster than we expected, and they still handle updates without breaking anything.",
  },
  {
    name: "Rohan",
    handle: "Marketing lead, SaaS startup",
    text:
      "Their team understood our brand quickly and turned it into a sharp, modern landing page. The site loads fast, is easy to edit, and supports all our campaigns.",
  },
  {
    name: "Priya",
    handle: "Independent consultant",
    text:
      "I came in with only an idea of what I wanted. Digilynk helped shape the content, layout, and structure. The result feels professional without feeling overdone.",
  },
  {
    name: "Kabir",
    handle: "Co‑founder, services agency",
    text:
      "We were worried a new site would be expensive and hard to maintain. They gave us a very reasonable quote, set things up properly, and documented everything clearly.",
  },
  {
    name: "Meera",
    handle: "Designer, small studio",
    text:
      "They’re one of the few dev teams I’ve worked with who respect design details. Spacing, typography, and interactions were implemented almost exactly as planned.",
  },
  {
    name: "Arjun",
    handle: "Entrepreneur",
    text:
      "Anytime we need a small change or new section, the team responds quickly. Having a reliable, long‑term dev partner has made growing our online presence much easier.",
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
    <div className="min-w-[320px] max-w-[360px] rounded-xl bg-muted/50 border border-border p-5 md:p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <AvatarDot i={i} />
        <div className="leading-tight">
          <p className="text-sm md:text-base text-foreground font-medium font-roboto">{t.name}</p>
          <p className="text-xs md:text-sm text-muted-foreground font-roboto">{t.handle}</p>
        </div>
        <Quote className="ml-auto h-4 w-4 text-muted-foreground" />
      </div>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-roboto">{t.text}</p>
    </div>
  );
}

export default function TestimonialMarquee() {
  // Split into two rows for opposite directions
  const mid = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, mid);
  const row2 = testimonials.slice(mid);

  return (
    <section className="relative bg-background py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* Background dots to match theme */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h3 className="text-2xl md:text-4xl font-medium text-foreground font-roboto">
            What our clients say
          </h3>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto font-roboto text-base md:text-lg">
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
