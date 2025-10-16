import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowLeft, Clock, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";
import { blogStorage } from "../lib/blogLocalStorage";
import BlogContent from "../components/BlogContent";

const defaultBlogs = [
  {
    id: 1,
    title: "Top 5 Reasons Every Small Business Needs a Website in 2025",
    image:
      "https://images.unsplash.com/photo-1614854262178-03c96e9c8c28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    readTime: "4 min read",
    content: (
      <div className="space-y-8">
        <p className="text-lg text-gray-300 leading-relaxed">
          In 2025, having a business without a website is like owning a shop
          with no signboard — people won't know you exist. Whether you're a café
          owner, a freelance designer, or a local service provider, your
          customers first look for you online. A website is no longer a luxury;
          it's a necessity for growth, trust, and survival in today's
          digital-first world.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          Let's explore the top 5 reasons why every small business needs a
          website in 2025, along with some current trends shaping the digital
          landscape.
        </p>

        {/* Section 1 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            1. Your Website Builds Credibility and Trust
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            In a world where people Google everything, trust begins online. A
            professional-looking website helps your business appear legitimate,
            even if you're small or newly established. Consumers today expect
            every brand—no matter its size—to have an online presence they can
            explore before making a decision.
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-4 font-roboto">
              Why it matters in 2025:
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  Customers are more skeptical of social-media-only businesses.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  Google Business Profiles and reviews now link directly to
                  websites for authenticity checks.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  Users prefer exploring a clean, informative website before
                  engaging on social media.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
            <p className="text-blue-200">
              <strong className="text-blue-400">Tip:</strong> Use customer
              testimonials, real images, and a clear "About Us" section to make
              your website feel genuine and relatable.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            2. It's the Most Cost-Effective Marketing Tool
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Unlike print ads or paid campaigns, your website works
            24/7—promoting your products and services even while you sleep.
            Think of it as your digital salesperson, providing information,
            capturing leads, and driving sales without ongoing costs.
          </p>

          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-xl p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-3 font-roboto">
              Latest Trend (2025):
            </h3>
            <p className="text-gray-300 mb-4">
              Small businesses are investing in SEO-optimized landing pages and
              AI-driven chatbots to engage visitors instantly. Modern tools
              allow easy integration of contact forms, WhatsApp chats, and
              booking systems—without heavy technical knowledge.
            </p>

            <h4 className="text-lg font-semibold text-white mb-3 mt-6">
              Benefits:
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Reduces reliance on expensive social ads.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Increases long-term organic traffic through SEO.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  Helps track performance via tools like Google Analytics and
                  Search Console.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            3. You Control Your Online Narrative
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Social media platforms are great for engagement—but they control the
            rules. Algorithm changes can limit your visibility overnight. A
            website gives you complete ownership over your content, design, and
            audience reach.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            <strong className="text-white">Why it's important:</strong> Your
            website acts as a digital headquarters. It lets you tell your brand
            story, showcase your services, and highlight what makes you
            unique—all in one place. It also builds long-term SEO value,
            something no social post can match.
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-3 font-roboto">
              2025 Insight:
            </h3>
            <p className="text-gray-300">
              With AI-based personalization, small businesses are using websites
              to deliver customized experiences—like showing local offers or
              remembering returning customers.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            4. Websites Boost Sales and Customer Engagement
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Customers today research before buying. They compare prices, read
            reviews, and look for convenience. Your website can turn that
            curiosity into real conversions.
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-4 font-roboto">
              Practical Benefits:
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Show products, pricing, and offers in one place.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Integrate secure online payment systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Collect customer feedback and leads instantly.</span>
              </li>
            </ul>

            <p className="text-gray-300 mt-6">
              In 2025, trends show more small businesses using AI-based
              recommendations, voice search optimization, and fast-loading
              mobile designs to enhance engagement and sales.
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5">
            <p className="text-blue-200">
              <strong className="text-blue-400">Example:</strong> A local bakery
              with an online ordering page or a fitness coach offering booking
              slots online sees 2–3x more inquiries than those relying only on
              social media.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            5. It Keeps You Competitive in the Digital Era
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Your competitors are online—and your future customers are too. A
            professional website ensures you stay relevant and don't lose
            customers to businesses that have embraced digital tools.
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-4 font-roboto">
              Emerging Trends (2025):
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white">
                    Voice search is booming:
                  </strong>{" "}
                  People ask smart devices to "find nearby services."
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white">
                    Google favors mobile-friendly and secure websites
                  </strong>{" "}
                  (SSL-certified) in rankings.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white">Local SEO is key:</strong>{" "}
                  Businesses optimizing for "near me" searches get higher
                  conversions.
                </span>
              </li>
            </ul>

            <p className="text-gray-300 mt-6">
              Having a well-structured, fast, and SEO-optimized website is no
              longer optional—it's essential for visibility and competitiveness.
            </p>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            Bonus: It Reflects Professionalism and Growth
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Even if you're a solo entrepreneur or startup, a website gives the
            impression of a well-established business. It shows that you care
            about customer experience and your digital identity. Plus, with
            tools like Google My Business, your website can appear in local
            maps, making it easy for customers to find and contact you.
          </p>
        </section>

        {/* Final Thoughts */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            Final Thoughts
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            In 2025, a website is your business foundation—not just a digital
            card. It builds trust, generates leads, and opens the door to
            endless opportunities. Whether you're selling products, offering
            services, or simply building a brand, your website is where it all
            begins.
          </p>

          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-300 mb-6">
              At <strong className="text-white">Digilynk</strong>, we specialize
              in designing and developing custom websites for small
              businesses—responsive, secure, SEO-ready, and tailored to your
              brand.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              If you're ready to take your business online or upgrade your
              existing site, reach out today and let's build your digital
              success story together.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 text-lg font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-2xl rounded-lg"
            >
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    ),
  },
  {
    id: 2,
    title: "How Custom Web Development Can Boost Your Brand Credibility",
    image:
      "https://images.unsplash.com/photo-1614854262178-03c96e9c8c28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    readTime: "6 min read",
    content: (
      <div className="space-y-8">
        <p className="text-lg text-gray-300 leading-relaxed">
          In today's digital-first world, your website is often the first
          impression customers have of your business. A well-built, customized
          website doesn't just look good — it builds trust, credibility, and
          confidence in your brand. While template-based websites may get you
          online quickly, custom web development takes things a step further by
          aligning your website's design, features, and performance with your
          unique brand identity.
        </p>

        {/* Section 1 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            1. Understanding Custom Web Development
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Custom web development means designing and building a website from
            the ground up — specifically tailored to your business goals,
            audience, and brand vision. Unlike pre-built templates, it gives you
            full control over:
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Layout and user interface</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Features and functionality</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Website performance and scalability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Security and backend structure</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            This approach ensures that every part of your website — from design
            to navigation — reflects who you are as a brand and what you stand
            for.
          </p>
        </section>

        {/* Section 2 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            2. Why Brand Credibility Matters
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            In 2025, consumers have countless choices. People don't just buy
            products or services anymore — they buy trust. Your website plays a
            critical role in shaping that perception.
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-4 font-roboto">
              A credible website:
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  Encourages visitors to explore your services confidently.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Reduces bounce rates and increases engagement.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Converts more leads into paying customers.</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            If your website looks outdated or functions poorly, users are more
            likely to question your professionalism. A custom-built website, on
            the other hand, communicates that your business is serious,
            established, and focused on quality.
          </p>
        </section>

        {/* Section 3 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            3. Personalized Design That Reflects Your Brand Identity
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            One of the biggest advantages of custom web development is the
            ability to create a unique visual identity. Every color, font,
            image, and interaction can be carefully chosen to align with your
            brand voice.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              For example:
            </h3>
            <ul className="space-y-3 text-blue-200">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  A healthcare brand might use calm colors and clear visuals to
                  inspire trust.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  A tech startup could opt for a bold, modern design with
                  interactive animations.
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            This level of personalization simply isn't possible with
            cookie-cutter templates. When your website visually aligns with your
            offline branding — such as your logo, social media, and marketing
            material — it reinforces a consistent, professional image that
            visitors remember.
          </p>
        </section>

        {/* Section 4 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            4. Enhanced User Experience (UX) Builds Trust
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Today's users expect smooth, fast, and engaging experiences online.
            User experience (UX) has become one of the strongest signals of
            credibility. A custom website allows developers to optimize every
            interaction — from page transitions to navigation paths.
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-4 font-roboto">
              Key user experience elements include:
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white">Mobile responsiveness:</strong>{" "}
                  A must-have, as over 70% of users browse from mobile devices.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white">Speed optimization:</strong>{" "}
                  Fast-loading websites improve retention and SEO rankings.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white">Accessibility:</strong>{" "}
                  Inclusive design ensures all users, including those with
                  disabilities, can access your content.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  <strong className="text-white">Intuitive navigation:</strong>{" "}
                  Helps users find what they need without frustration.
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            When users feel comfortable navigating your site, they
            subconsciously begin to trust your brand more.
          </p>
        </section>

        {/* Section 5 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            5. SEO-Friendly Architecture for Better Visibility
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Even the most visually stunning website is ineffective if people
            can't find it. Custom web development integrates SEO best practices
            right into the foundation of your website — from clean code to
            structured URLs and optimized performance.
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-6">
            <h3 className="text-xl font-semibold text-white mb-4 font-roboto">
              Developers can build your site with:
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  Schema markup for better search engine understanding
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Meta and image optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Fast-loading pages to reduce bounce rates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Mobile-first design to improve rankings</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            Combined, these factors improve your visibility on Google, making
            your brand appear more professional and reliable in search results —
            a direct credibility boost.
          </p>
        </section>

        {/* Section 6 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            6. Security That Builds User Confidence
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Online security has become a major factor in customer trust. Data
            breaches or unsecured connections can damage a brand's image
            overnight. Custom-built websites allow developers to implement
            strong, business-specific security measures, such as:
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>SSL certification and HTTPS encryption</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Secure admin panels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Regular vulnerability checks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Data protection and privacy compliance</span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            When customers see that your website is secure, they feel more
            confident in engaging, sharing details, or making purchases.
          </p>
        </section>

        {/* Section 7 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            7. Integration and Future Scalability
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            A credible brand grows with time, and your website should too.
            Custom development allows easy integration with tools like CRM
            systems, payment gateways, chatbots, and analytics platforms —
            making your site smarter and more functional.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            As new technologies emerge — like AI-based chat support,
            personalization engines, or voice search optimization — a
            custom-built site can adapt and evolve, keeping your brand relevant
            and modern.
          </p>
        </section>

        {/* Section 8 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            8. Trends Defining Custom Web Development in 2025
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            The digital space continues to evolve, and so do user expectations.
            The following web trends are enhancing credibility for brands
            worldwide:
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 my-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>AI-powered chatbots for faster customer support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Dark mode and minimalistic UI for modern aesthetics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  Micro-animations and motion UI to create interactive
                  experiences
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  Sustainable web design focused on faster load times and energy
                  efficiency
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>
                  Headless CMS for better content control and flexibility
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            Brands that embrace these trends early are seen as forward-thinking
            and trustworthy.
          </p>
        </section>

        {/* Section 9 */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            9. How Digilynk Helps You Build Credible Digital Experiences
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            At Digilynk, we specialize in crafting custom websites that go
            beyond visuals. Our goal is to build digital experiences that
            reflect your business values, enhance customer trust, and deliver
            measurable growth.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            We combine modern design principles, clean development practices,
            and in-depth testing to ensure every site we create is fast, secure,
            and brand-aligned.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Whether you're a startup or an established business, a tailored
            website can be the key to standing out, earning trust, and driving
            conversions.
          </p>
        </section>

        {/* Final Thoughts */}
        <section className="pt-8">
          <h2 className="text-3xl font-bold text-white mb-6 font-roboto">
            Final Thoughts
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Your website is more than an online address — it's a reflection of
            your brand's integrity and professionalism. Investing in custom web
            development is not just a design choice; it's a long-term
            credibility strategy.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            A unique, fast, and secure website tells your audience that you care
            about their experience — and that's what truly sets credible brands
            apart in the digital era.
          </p>

          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 border border-zinc-800 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-300 mb-6">
              At <strong className="text-white">Digilynk</strong>, we help
              businesses build custom websites that enhance credibility and
              drive growth.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Ready to elevate your brand with a custom-built website? Let's
              talk.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 text-lg font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-2xl rounded-lg"
            >
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    ),
  },
];

export default function BlogPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Try to find in localStorage first
    const savedBlog = blogStorage.getBlog(id);
    if (savedBlog) {
      setBlog(savedBlog);
    } else {
      // Fallback to default blogs
      const defaultBlog = defaultBlogs.find(
        (b) => b.id === id || b.id === parseInt(id)
      );
      setBlog(defaultBlog);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="pt-16 min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <button
            onClick={() => navigate("/blog")}
            className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold transition-all duration-300"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${blog.title} | Digilynk Blog`}
        description="Stay updated with latest tech insights from Digilynk"
        path={`/blog/${id}`}
      />
      <div className="pt-16 min-h-screen bg-black">
        {/* Hero Section with Image */}
        <div className="relative h-screen overflow-hidden">
          <img
            src={blog.coverImage || blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Blog Content */}
        <div className="relative -mt-32 z-10">
          <div className="max-w-4xl mx-auto px-4">
            {/* Back Button */}
            <motion.button
              onClick={() => navigate("/blog")}
              className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </motion.button>

            {/* Blog Header */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {blog.featured && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-sm mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  Featured
                </span>
              )}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-roboto">
                {blog.title}
              </h1>

              {blog.description && (
                <p className="text-xl text-gray-300 mb-6 italic">
                  {blog.description}
                </p>
              )}

              {/* Meta Information */}
              <div className="flex items-center gap-4 text-gray-400 flex-wrap">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
                {blog.datePublished && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(blog.datePublished).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Blog Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {blog.content ? (
                <BlogContent content={blog.content} />
              ) : (
                <div className="prose prose-lg prose-invert max-w-none">
                  {blog.description || "No content available"}
                </div>
              )}
            </motion.article>

            {/* Share Section */}
            <motion.div
              className="mt-16 pt-8 border-t border-zinc-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => navigate("/blog")}
                className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-semibold transition-all duration-300"
              >
                ← Back to All Articles
              </button>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="my-16 bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 rounded-2xl p-8 md:p-12 border border-zinc-800 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-roboto">
                Ready to Build Your Website?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-roboto">
                Let's discuss how we can help your business grow with a
                professional, modern website.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 text-lg font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-2xl rounded-lg"
              >
                Talk to us
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
