"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { useSpecificNewsData } from "@/hooks/useSpecificNewsData";
import { sortByDate } from "@/util/sort";
import truncateText from "@/util/truncate";
import parse from "html-react-parser";
import { formatDate } from "@/util/formateDate";
import Loading from "../Share/_components/Loading";

const NewsCard = () => {
  const { newsData, loading, error } = useSpecificNewsData({});

  React.useEffect(() => {}, [newsData, loading]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h3>Oops! data not found.</h3>;
  }

  const sortNewsData = sortByDate(newsData, "postDate");

  const localNewsData = sortNewsData?.filter((news) => {
    return news.localNews === true;
  });

  const displayNews =
    localNewsData?.length > 0 ? localNewsData : sortNewsData?.slice(0, 5);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold border-s-4 border-blue-500 ps-4 my-4">
          {localNewsData?.length > 0 ? "সমগ্র জনপথ" : "সর্বশেষ খবর"}
        </h1>
        <p className="text-blue-600 hover:text-blue-700 flex items-center text-xl">
          <Link href={`/national`}>আরো দেখুন </Link>
          <span>
            {" "}
            <ChevronsRight size={30} />{" "}
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {displayNews?.slice(0, 1).map((news) => (
          <div key={news._id} className="overflow-hidden relative">
            <div className="relative w-full aspect-[3/2]">
              {news.images?.[0] && (
                <Image
                  src={news.images[0]}
                  alt={news.newsTitle || "News Image"}
                  className="transition-transform duration-300 hover:scale-105"
                  objectFit="cover"
                  layout="fill"
                />
              )}
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
                <Link
                  href={`/${news?.category?.slug ?? "national"}/${news._id}`}
                >
                  {news.newsTitle}
                </Link>
              </h2>
              <div className="text-gray-600 mb-3 text-[17px] ">
                {parse(truncateText(news?.shortDescription, 300))}
              </div>
              <div className="flex justify-between text-xs">
                <p>{formatDate(news.postDate)}</p>
                <p className="text-blue-600 text-sm">
                  <Link href={`/national`}>আরো পড়ুন</Link>
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Normal News Section */}
        <div className="grid grid-cols-1 gap-2 lg:border-s dark:border-gray-300 border-black ">
          {displayNews?.slice(1, 5)?.map((news) => (
            <div
              key={news._id}
              className="flex border-b-2 dark:border-gray-300 overflow-hidden flex-row-reverse px-2"
            >
              <div className="w-2/5 relative aspect-[2/1] overflow-hidden">
                {news.images?.[0] && (
                  <Image
                    src={news.images[0]}
                    alt={news.newsTitle || "News Image"}
                    className="w-[130px] md:w-full h-[115px] transition-transform duration-300 hover:scale-105"
                    width={500}
                    height={100}
                  />
                )}
              </div>

              <div className="hidden md:block flex-1 pe-1">
                <h2 className="text-lg font-bold hover:text-blue-600">
                  <Link
                    href={`/${news?.category?.slug ?? "national"}/${news._id}`}
                  >
                    {news.newsTitle}
                  </Link>
                </h2>
                <p className="text-[17px] text-gray-600 touch-pan-right">
                  {truncateText(news.shortDescription, 150)}
                </p>
                <p className="text-blue-600 text-sm">
                  <Link href={`/national`}>আরো পড়ুন</Link>
                </p>
              </div>

              <div className="md:hidden flex-1 pe-1">
                <h2 className="font-semibold hover:text-blue-600">
                  <Link
                    href={`/${news?.category?.slug ?? "national"}/${news._id}`}
                  >
                    {truncateText(news.newsTitle, 55)}
                  </Link>
                </h2>
                <p className="  text-gray-600 touch-pan-right">
                  {truncateText(news.shortDescription, 80)}
                </p>
                <p className="text-blue-600 text-sm">
                  <Link href={`/national`}>আরো পড়ুন</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
