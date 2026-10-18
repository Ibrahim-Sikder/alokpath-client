/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
import { TNews } from "@/types";
import Image from "next/image";
import truncateText from "@/util/truncate";
import parse from "html-react-parser";
import { sortByDate } from "@/util/sort";
type NewsProps = {
  newsData: TNews[];
};

const LeadNewsTwo = ({ newsData }: NewsProps) => {
  const newsLocation2 = newsData.filter(
    (news) => news.newsLocation === "Lead-2",
  );

  const sortedLead2News = sortByDate(newsLocation2, "postDate");

  return (
    <div className="hidden lg:flex flex-col gap-5 border-s border-gray-500 ps-3">
      {sortedLead2News?.slice(0, 6)?.map((news, index) => {
        return (
          <Link
            key={news._id}
            href={`/${news?.category?.slug ?? "national"}/${news._id}`}
            className="h-[100px] flex gap-2 border-b  border-gray-200 pb-0"
          >
            <div className="">
              <h2 className="text-[15px] font-semibold text-justify">
                {news.newsTitle ? parse(truncateText(news.newsTitle, 100)) : ""}
              </h2>
              <p className="mt-2">
                {parse(truncateText(news.shortDescription, 80))}
              </p>
            </div>

            <div className="">
              <div className="w-[150px] relative aspect-[3/2] transform transition-transform duration-500 hover:scale-105">
                {news.images && news.images.length > 0 && (
                  <Image
                    src={news?.images[0] || "/placeholder.svg"}
                    alt={news?.newsTitle}
                    placeholder="blur"
                    blurDataURL="/placeholder.svg"
                    height={200}
                    width={200}
                    className="h-[100px] w-[200px]"
                  />
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default LeadNewsTwo;
