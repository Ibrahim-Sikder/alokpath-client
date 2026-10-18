/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState, useRef } from "react";
import type { TNews } from "@/types";
import { newsFields } from "@/util/fields";

export const useLeadNewsThree = () => {
  const [lead3Data, setLead3Data] = useState<TNews[]>([]);
  const [lead3Loading, setLead3Loading] = useState(true);
   const [error, setError] = useState<string | null>(null);
  // const initialized = useRef(false);

  // useEffect(() => {
  //   if (initialized.current) return;
  //   initialized.current = true;

  //   const loadData = async () => {
  //     try {
  //       const url = new URL(`${process.env.NEXT_PUBLIC_BASE_API_URL}/news`);
  //       url.search = new URLSearchParams({
  //         fields: "newsTitle,description,images,postDate,newsLocation,category",
  //         limit: "100",
  //       }).toString();

  //       const response = await fetch(url.toString(), {
  //         next: { revalidate: 60 },
  //       });

  //       if (!response.ok) throw new Error(`HTTP ${response.status}`);

  //       const data = await response.json();

  //       if (data?.data?.news) {
  //         const lead3 = data.data.news
  //           .filter((news: TNews) => news.newsLocation === "Lead-3")
  //           .sort(
  //             (a: TNews, b: TNews) =>
  //               new Date(b.postDate).getTime() - new Date(a.postDate).getTime()
  //           );

  //         setLead3Data(lead3);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching Lead-3 news:", error);
  //     } finally {
  //       setLead3Loading(false);
  //     }
  //   };

  //   loadData();
  // }, []);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/news?limit=80&fields=${newsFields}`
        );
        const data = await response.json();
        setLead3Data(data.data?.news || []);
      } catch (err) {
        setError("Failed to fetch news data!");
      } finally {
        setLead3Loading(false);
      }
    };

    fetchNewsData();
  }, []);

  return { lead3Data, lead3Loading };
};
