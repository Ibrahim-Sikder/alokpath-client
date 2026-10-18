"use client";

import { useEffect, useState, useRef } from "react";
import type { TNews } from "@/types";

const prefetchPromise = (async () => {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_BASE_API_URL}/news`);
    const params = new URLSearchParams({
      fields: "newsTitle,description,images,postDate,newsLocation,category",
      limit: "80",
    });
    url.search = params.toString();

    const response = await fetch(url.toString(), {
      // Use cache for faster subsequent loads
      cache: "no-store",
      // next: { revalidate: 60 } // Revalidate every 60 seconds
    });

    if (!response.ok) throw new Error("Failed to fetch");
    return await response.json();
  } catch (error) {
    console.error("Prefetch failed:", error);
    return null;
  }
})();

export const useHomePageNews = () => {
  const [lead1Data, setLead1Data] = useState<TNews[]>([]);
  const [lead2Data, setLead2Data] = useState<TNews[]>([]);
  // const [lead3Data, setLead3Data] = useState<TNews[]>([])

  const [lead1Loading, setLead1Loading] = useState(true);
  const [lead2Loading, setLead2Loading] = useState(true);
  // const [lead3Loading, setLead3Loading] = useState(true)

  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const loadData = async () => {
      // Start with prefetched data immediately
      const prefetchedData = await prefetchPromise;

      if (prefetchedData?.data?.news) {
        const allNews: TNews[] = prefetchedData.data.news;

        // IMMEDIATELY show Lead-1 (0ms delay)
        const lead1 = allNews
          .filter((news) => news.newsLocation === "Lead-1")
          .sort(
            (a, b) =>
              new Date(b.postDate).getTime() - new Date(a.postDate).getTime(),
          );

        setLead1Data(lead1);
        setLead1Loading(false);

        // Use RAF (Request Animation Frame) for smooth updates
        requestAnimationFrame(() => {
          const lead2 = allNews
            .filter((news) => news.newsLocation === "Lead-2")
            .sort(
              (a, b) =>
                new Date(b.postDate).getTime() - new Date(a.postDate).getTime(),
            );

          setLead2Data(lead2);
          setLead2Loading(false);

          // requestAnimationFrame(() => {
          //   const lead3 = allNews
          //     .filter(news => news.newsLocation === "Lead-3")
          //     .sort((a, b) => new Date(b.postDate).getTime() - new Date(a.postDate).getTime())

          //   setLead3Data(lead3)
          //   setLead3Loading(false)
          // })
        });
      }
    };

    loadData();
  }, []);

  return { lead1Data, lead2Data, lead1Loading, lead2Loading };
};
