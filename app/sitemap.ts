import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://screndo.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://screndo.com/platform', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://screndo.com/why-screndo', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://screndo.com/vision', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://screndo.com/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://screndo.com/gdpr', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://screndo.com/legal', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]
}
