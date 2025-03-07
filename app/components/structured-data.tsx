export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SpiriGo",
    url: "https://spirigo.com",
    logo: "https://spirigo.com/logo.png",
    sameAs: ["https://facebook.com/spirigo", "https://twitter.com/spirigo", "https://instagram.com/spirigo"],
    description:
      "SpiriGo is a platform that connects users with verified priests for religious and spiritual services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Spiritual Lane",
      addressLocality: "Devotee City",
      addressRegion: "DL",
      postalCode: "110001",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9876543210",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Tamil", "Telugu", "Bengali"],
    },
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Priest Booking Service",
    provider: {
      "@type": "Organization",
      name: "SpiriGo",
    },
    serviceType: "Religious Services",
    description: "Book verified priests for religious ceremonies, pujas, last rites, and temple visits.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "499.00",
      priceCurrency: "INR",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />
    </>
  )
}

