import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Digilynk - Website development agency",
  description = "Digilynk builds modern, high-performance websites, apps and digital experiences that help businesses grow.",
  path = "/",
  image = "/digilynk_about.png",
  noindex = false,
}) {
  const SITE_URL = "https://www.digilynk.in";
  const url = new URL(path, SITE_URL).toString();
  const imageUrl = image?.startsWith("http") ? image : new URL(image, SITE_URL).toString();
  const logoUrl = new URL("/digilynk_logo.jpg", SITE_URL).toString();
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digilynk",
    url: SITE_URL,
    logo: logoUrl,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content="Digilynk" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data: Organization */}
      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
    </Helmet>
  );
}

