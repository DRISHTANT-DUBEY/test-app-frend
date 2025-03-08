import { MetadataRoute } from "next"

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: "https://spirigo.com/sitemap.xml",
  }
}