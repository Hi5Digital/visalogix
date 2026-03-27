import { Helmet } from "react-helmet-async";

const JsonLd = () => (
  <Helmet>
    <title>Visalogix — Global Mobility Simplified</title>
    <meta name="description" content="Expert Visa, Courier, and Travel solutions for a borderless world. Police Clearance, UK Immigration, Document Legalisation, ETIAS & more." />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Visalogix",
        description: "Global Mobility, Visa Facilitation, and Corporate Relocation",
        url: "https://visalogix.com",
        sameAs: [],
        contactPoint: { "@type": "ContactPoint", contactType: "customer service" },
      })}
    </script>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Visalogix",
        description: "Expert Visa and Immigration Services",
        address: { "@type": "PostalAddress", addressCountry: "ZA" },
      })}
    </script>
  </Helmet>
);

export default JsonLd;
