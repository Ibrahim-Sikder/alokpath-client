"use client";
import truncateText from "@/util/truncate";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import Loading from "../Share/_components/Loading";
import { sortByDate } from "@/util/sort";
import UseNewsTagsData from "@/hooks/useNewsTagsData";

const TrendingCard = () => {
  const { newsData, loading, error } = UseNewsTagsData("sombar");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  const sortedNews = sortByDate(newsData, "postDate");
  console.log("check sombar data ", newsData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4">
      {sortedNews?.slice(0, 8).map((news) => (
        <div
          key={news._id}
          className=" flex flex-row pt-2 md:pr-1 border-r border-gray-300"
        >
          {news.images?.[0] && (
            <Image
              src={news.images[0]}
              alt={news.newsTitle || "News Image"}
              className="h-[100px] md:h-[130px] w-[140px] md:w-full"
              width={200}
              height={100}
            />
          )}
          <div className="hidden md:block ms-4">
            <h3 className="md:text-lg font-semibold hover:text-blue-500">
              <Link href={`/${news?.category?.slug ?? "national"}/${news._id}`}>
                {news.newsTitle}
              </Link>
            </h3>
            <div className="text-sm mt-2">
              {" "}
              {news?.shortDescription
                ? parse(truncateText(news.shortDescription, 100))
                : ""}
            </div>
          </div>

          <div className="md:hidden ms-3">
            <h3 className="md:text-lg font-semibold hover:text-blue-500">
              <Link href={`/${news?.category?.slug ?? "national"}/${news._id}`}>
                {news?.newsTitle ? parse(truncateText(news.newsTitle, 50)) : ""}
              </Link>
            </h3>
            <div className="text-sm mt-2">
              {" "}
              {news?.description
                ? parse(truncateText(news.description, 50))
                : ""}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCard;
