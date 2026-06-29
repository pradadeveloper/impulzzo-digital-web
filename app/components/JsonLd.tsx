export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Impulzzo Digital",
    description: "Agencia digital especializada en IA, e-commerce y automatización",
    url: "https://impulzzo.com",
    telephone: "+573043838770",
    email: "juanfelipepradaing@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    founder: {
      "@type": "Person",
      name: "Juan Felipe Prada",
    },
    serviceArea: {
      "@type": "Country",
      name: "Colombia",
    },
    sameAs: [
      "https://www.linkedin.com/in/juanfelipeprada",
      "https://www.instagram.com/impulzzo",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
