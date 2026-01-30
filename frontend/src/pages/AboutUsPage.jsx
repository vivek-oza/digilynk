import React from "react";
import SEO from "../components/SEO";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import PageHero from "../components/shared/PageHero";

// Exported so we can reuse these links in other sections if needed
export const aboutSocialLinks = [
  {
    name: "LinkedIn",
    description: "Connect with us professionally and stay updated.",
    href: "https://www.linkedin.com/in/avi-oza-448720354/",
    src: "/Icons8/linkedin.png",
  },
  {
    name: "X",
    description: "Follow us on X (Twitter) for updates and news.",
    href: "https://x.com/AviDigilynk",
    src: "/Icons8/x.png",
  },
  {
    name: "Facebook",
    description: "Like our page and join our community.",
    href: "https://www.digilynk.in/",
    src: "/Icons8/facebook.png",
  },
  {
    name: "Instagram",
    description: "Follow us for visual updates and behind-the-scenes.",
    href: "https://www.instagram.com/digilynk/",
    src: "https://cdn-icons-png.flaticon.com/512/15713/15713420.png",
  },
  {
    name: "Reddit",
    description: "Join the conversation and share your thoughts.",
    href: "https://www.reddit.com/user/LongjumpingKnee4834/",
    src: "/Icons8/reddit.png",
  },
  {
    name: "WhatsApp",
    description: "Chat with us directly for quick support.",
    href: "https://wa.me/7990903975",
    src: "/Icons8/whatsapp.png",
  },
  {
    name: "Mail",
    description: "Send us an email for inquiries and projects.",
    href: "mailto:avi.digilynk@gmail.com",
    src: "/Icons8/gmail.png",
  },
];

const aboutContent = [
  {
    badge: "About Digilynk",
    title: "We build websites that actually support your business, not just your brand colors.",
    image: "/digilynk_about.png",
    description: (
      <>
        <p>
          Digilynk started with a simple observation: many businesses invest in websites, but few get solutions
          that truly support their goals. We saw websites that looked impressive but were hard to manage, slow to
          load, or disconnected from real user needs.
        </p>
        <p>
          Digilynk was created to bridge that gap — to deliver web solutions that are not only visually clean, but
          also practical, scalable, and easy to use for real teams and real businesses.
        </p>
      </>
    ),
  },
  {
    badge: "Our beginning",
    title: "Born from real-world gaps between design, development, and day-to-day use.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    description: (
      <>
        <p>
          From the start, we met teams who had &quot;finished&quot; websites that were difficult to update, fragile
          to change, or disconnected from how their business actually worked. That&apos;s where Digilynk began — by
          asking how we could make the web feel more reliable and less intimidating for non-technical teams.
        </p>
        <p>
          Today, that same mindset drives us. Every project is approached with a focus on day-to-day usability,
          not just launch-day aesthetics.
        </p>
      </>
    ),
  },
  {
    badge: "Our approach",
    title: "Listening first. Then designing, building, and testing with intention.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    description: (
      <>
        <p>
          We believe good web development starts with listening. Before writing a single line of code, we focus on
          understanding the business, the users, and the purpose behind the website.
        </p>
        <p>
          Our approach is calm, structured, and transparent. We design with clarity, develop with precision, and
          build systems that remain stable and adaptable as requirements evolve. Every decision we make is guided
          by usability, performance, and long-term value.
        </p>
      </>
    ),
  },
  {
    badge: "What we stand for",
    title: "Simple language, honest work, and websites you’re not afraid to touch.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    description: (
      <>
        <p>
          At Digilynk, we value simplicity over complexity and clarity over noise. We avoid unnecessary technical
          jargon and focus on solutions that clients can understand, maintain, and trust.
        </p>
        <p>
          We see ourselves not just as developers, but as long-term partners who care about the success of the
          platforms we build. Quality, reliability, and honest communication define how we work and how we
          collaborate.
        </p>
      </>
    ),
  },
  {
    badge: "Growing with our clients",
    title: "When you grow, your website and systems should quietly grow with you.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    description: (
      <>
        <p>
          Digilynk works with startups, growing businesses, and professionals across multiple industries. As our
          clients evolve, we evolve with them — refining systems, scaling platforms, and supporting new ideas.
        </p>
        <p>
          Our goal is not just to deliver a project, but to help build a strong and dependable digital foundation
          that continues to support growth over time.
        </p>
      </>
    ),
  },
  {
    badge: "Looking ahead",
    title: "Staying curious about the web, so your website doesn’t fall behind it.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600&ixlib=rb-4.0.3",
    description: (
      <>
        <p>
          We are committed to continuous improvement — in technology, process, and understanding user behavior. As
          the digital landscape changes, Digilynk remains focused on creating web solutions that are
          future‑ready, secure, and meaningful.
        </p>
        <p>
          We look forward to building thoughtful digital experiences that make a real difference for the people who
          use them and the teams who rely on them.
        </p>
      </>
    ),
  },
];

export default function AboutUs() {
  return (
    <>
      <SEO
        title="About Digilynk | Web Development & QA Studio"
        description="Learn who Digilynk is, how we build modern websites, and how our combined development and QA approach helps you launch with confidence."
        path="/about"
        image="/digilynk_about.png"
      />

      <PageHero
        words={[
          {
            text: "We are Digilynk. We design and develop\nbest websites for your business.",
            className: "text-white",
          },
        ]}
      />

      {/* Company description section */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-2xl font-semibold text-foreground md:text-3xl font-roboto">
            About Digilynk
          </h2>
          <p className="mb-4 text-base leading-relaxed text-muted-foreground md:text-lg font-roboto">
            Digilynk is a full-service digital solutions company founded in 2022 and based in Ahmedabad, Gujarat, delivering high-quality web development, software testing, and digital services to businesses worldwide. With over 4+ years of industry experience, we follow an AI-integrated development and testing process that ensures faster delivery, higher accuracy, and scalable results.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg font-roboto">
            Our team of 10 skilled professionals—including developers, QA engineers, UI/UX designers, content writers, digital marketers, and graphic designers—works collaboratively to build visually strong, technically robust, and user-focused solutions. We are known for delivering best-in-class UI designs that balance aesthetics with usability. Having successfully delivered 40+ projects across multiple domains, we focus on reliability, transparency, and measurable business outcomes, helping our clients build digital products they can confidently grow and scale.
          </p>
        </div>
      </section>

      {/* Find Us section */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl font-roboto mb-2">
              Find Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-roboto mb-10">
              Connect with Digilynk on your preferred platform. We’re here to help with your next project.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center w-full">
            <AnimatedTooltip
              items={aboutSocialLinks.map((item, index) => ({
                id: index + 1,
                name: item.name,
                designation: item.description,
                image: item.src,
                href: item.href,
              }))}
            />
          </div>
        </div>
      </section>

    </>
  );
}

