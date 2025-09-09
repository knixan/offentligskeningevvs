import React from "react";

export const metadata = {
  title: "Skeninge VVS AB | VVS-tjänster i Skeninge och Östergötland",
  description:
    "Skeninge VVS AB erbjuder professionella VVS-tjänster i Skeninge och hela Östergötland. Kontakta oss för installation, service och reparation.",
  keywords: [
    "VVS",
    "Skeninge",
    "Skänninge",
    "rörmokare",
    "installation",
    "service",
    "reparation",
    "Östergötland",
    "Mjölby",
    "Mantorp",
    "Vadstena",
    "VVS-tjänster",
    "värmepumpar",
  ],
  openGraph: {
    title: "Skeninge VVS AB | VVS-tjänster i Skeninge och Östergötland",
    description:
      "Skeninge VVS AB erbjuder professionella VVS-tjänster i Skeninge och hela Östergötland.",
    url: "https://skeningevvs.se",
    siteName: "Skeninge VVS AB",
    images: [
      {
        url: "/mockup-skeningevvs.jpg",
        width: 1200,
        height: 630,
        alt: "Skeninge VVS AB mockup",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
};
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Skeninge VVS AB",
    url: "https://skeningevvs.se",
    logo: "https://skeningevvs.se/mockup-skeningevvs.jpg",
    image: "https://skeningevvs.se/mockup-skeningevvs.jpg",
    description:
      "Skeninge VVS AB erbjuder professionella VVS-tjänster i Skeninge och hela Östergötland. Kontakta oss för installation, service och reparation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Din gata 1",
      addressLocality: "Skeninge",
      postalCode: "12345",
      addressCountry: "SE",
    },
    telephone: "+4612345678",
  };
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 dark:bg-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
