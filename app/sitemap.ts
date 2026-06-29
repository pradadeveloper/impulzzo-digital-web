export default function sitemap() {
  const now = new Date();

  return [
    {
      url: "https://impulzzo.com",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://impulzzo.com/servicios",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://impulzzo.com/casos-de-exito",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://impulzzo.com/blog",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
