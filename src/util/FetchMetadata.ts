import type { Metadata } from "next"

export async function fetchMetadata(id: string): Promise<Metadata> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/news/${id}`)

    if (!res.ok) {
      console.error("Error fetching news:", res.status)
      return {
        title: "News Not Found | Dailytimes 24",
        description: "Sorry, the requested news article was not found.",
      }
    }

    const news = await res.json()

    if (!news?.data) {
      return {
        title: "News Not Found | Dailytimes 24",
        description: "Sorry, the requested news article was not found.",
      }
    }

    const { metaTitle, metaDescription, metaKeywords, images } = news.data
    const pageUrl = `https://dailytimes24.com/economy/${id}`

    return {
      title: metaTitle ? `${metaTitle} | Dailytimes 24` : "Dailytimes 24 - Latest News",
      description: metaDescription || "Read the latest news, updates, and insights on Dailytimes 24.",
      keywords: metaKeywords || "Dailytimes News, Breaking News, Latest News, International News",
      openGraph: {
        title: metaTitle || "Dailytimes 24",
        description: metaDescription || "Latest news and updates on Dailytimes 24.",
        url: pageUrl,
        type: "article",
        images: [
          {
            url: images[0] || "https://dailytimes24.com/default-og-image.jpg",
            width: 1200,
            height: 630,
            alt: metaTitle || "Dailytimes 24",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: metaTitle || "Dailytimes 24",
        description: metaDescription || "Breaking news, latest updates, and more.",
        images: [images[0] || "https://dailytimes24.com/default-og-image.jpg"],
      },
      alternates: {
        canonical: pageUrl,
      },
    }
  } catch (error) {
    console.error("Error fetching news metadata:", error)
    return {
      title: "Error | Dailytimes 24",
      description: "There was an issue loading this page. Please try again later.",
    }
  }
}

