"use client";
import { useSpecificNewsData } from "@/hooks/useSpecificNewsData";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import "./BreakingNews.css";

const BreakingNews = () => {
  const { newsData, loading, error } = useSpecificNewsData({ limit: "20" });

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="group flex lg:flex-col flex-row gap-1 md:gap-2 animate-pulse"
          >
            <div className="w-full ps-2 lg:pt-2">
              <div className="h-4 bg-gray-200 rounded mb-1 w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (error) {
    return <h3>Oops! data not found.</h3>;
  }

  return (
    <div className="breaking-news-container  dark:bg-gray-600 lg:bg-[#333] shadow-md">
      <h2 className="breaking-news-title text-red-600 ">শিরোনাম</h2>
      <Marquee pauseOnHover={true} speed={50}>
        {newsData?.slice(0, 9).map((news, index) => {
          return (
            <div key={index} className="breaking-news-item ">
              <Link href={`/${news.category?.slug ?? "national"}/${news._id}`}>
                {news.newsTitle}
              </Link>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
