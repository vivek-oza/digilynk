/**
 * SocialMediaSectionV2 — Display LinkedIn and Instagram posts/reels
 * Uses official embed codes from LinkedIn and Instagram
 */
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import { animations, spacing } from "@/lib/designSystem";

// LinkedIn Post Embed Script
const LinkedInEmbedScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/in.js";
    script.type = "text/javascript";
    script.textContent = 'lang: en_US';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://platform.linkedin.com/in.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

// Instagram Embed Script
const InstagramEmbedScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

// Example: Replace these with your actual post URLs
// For LinkedIn: Get embed code from LinkedIn post > More > Embed this post
// For Instagram: Get embed code from Instagram post > ... > Embed

const socialPosts = [
  {
    type: "linkedin",
    // Replace with your LinkedIn post embed code or post URL
    embedCode: `<div class="linkedin-post" data-url="https://www.linkedin.com/posts/your-post-id"></div>`,
    // Or use direct embed iframe:
    // embedCode: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:YOUR_POST_ID" height="YOUR_HEIGHT" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  {
    type: "instagram",
    // Replace with your Instagram post/reel embed code
    embedCode: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_ID/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"></div></blockquote>`,
  },
  // Add more posts as needed
];

export default function SocialMediaSectionV2() {
  const linkedinRef = useRef(null);
  const instagramRef = useRef(null);

  useEffect(() => {
    // Re-initialize Instagram embeds when component mounts or scripts load
    const initInstagram = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    // Try immediately
    initInstagram();

    // Also try after a delay to ensure script is loaded
    const timer = setTimeout(initInstagram, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LinkedInEmbedScript />
      <InstagramEmbedScript />
      <SectionWrapper
        id="social-media"
        aria-label="Social Media Posts"
        className="pt-40 md:pt-48 pb-32 md:pb-40"
      >
        <div className={`${spacing.containerMaxWidth} ${spacing.containerPadding}`}>
          <SectionHeader
            title="Follow Our Journey"
            description="See what we're building and sharing on LinkedIn and Instagram"
          />

          <motion.div
            variants={animations.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12"
          >
            {/* LinkedIn Posts */}
            <motion.div variants={animations.item} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground font-roboto mb-2">
                  LinkedIn Updates
                </h3>
                <p className="text-sm text-muted-foreground font-roboto">
                  Latest insights and company updates
                </p>
              </div>
              
              {/* LinkedIn Post Container */}
              <div className="services-v2-card p-4 md:p-6 overflow-hidden">
                <div 
                  ref={linkedinRef}
                  className="linkedin-embed-container"
                  dangerouslySetInnerHTML={{
                    __html: socialPosts.find(p => p.type === "linkedin")?.embedCode || 
                    `<div class="text-center text-muted-foreground p-8">
                      <p>Add your LinkedIn post embed code here</p>
                      <p class="text-xs mt-2">Get embed code from LinkedIn post → More → Embed this post</p>
                    </div>`
                  }}
                />
              </div>
            </motion.div>

            {/* Instagram Posts/Reels */}
            <motion.div variants={animations.item} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground font-roboto mb-2">
                  Instagram Feed
                </h3>
                <p className="text-sm text-muted-foreground font-roboto">
                  Behind the scenes and creative work
                </p>
              </div>
              
              {/* Instagram Post Container */}
              <div className="services-v2-card p-4 md:p-6 overflow-hidden">
                <div 
                  ref={instagramRef}
                  className="instagram-embed-container"
                  dangerouslySetInnerHTML={{
                    __html: socialPosts.find(p => p.type === "instagram")?.embedCode || 
                    `<div class="text-center text-muted-foreground p-8">
                      <p>Add your Instagram post/reel embed code here</p>
                      <p class="text-xs mt-2">Get embed code from Instagram post → ... → Embed</p>
                    </div>`
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Instructions for adding posts */}
          <motion.div
            variants={animations.item}
            className="mt-12 p-6 rounded-xl bg-muted/30 border border-border/50"
          >
            <h4 className="text-sm font-semibold text-foreground mb-3 font-roboto">
              How to add your posts:
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-roboto">
              <li>
                <strong>LinkedIn:</strong> Go to your LinkedIn post → Click "More" (⋯) → Select "Embed this post" → Copy the embed code → Replace the embedCode in the socialPosts array
              </li>
              <li>
                <strong>Instagram:</strong> Go to your Instagram post/reel → Click "..." → Select "Embed" → Copy the embed code → Replace the embedCode in the socialPosts array
              </li>
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
