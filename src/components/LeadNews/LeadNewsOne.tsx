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

const LeadNewsOne = ({ newsData }: NewsProps) => {
  const newsLocation1 = newsData.filter(
    (news) => news.newsLocation === "Lead-1",
  );

  const sortedLead1News = sortByDate(newsLocation1, "postDate");
  const leadNews = sortedLead1News?.[0];

  if (!leadNews) return null;

  return (
    <div className="lg:col-span-2">
      <Link
        href={`/${leadNews?.category?.slug ?? "national"}/${leadNews._id}`}
        className="block group"
      >
        {/* ইমেজ কন্টেইনার */}
        <div className=" w-full overflow-hidden rounded-lg">
          {leadNews?.images?.[0] && (
            <Image
              src={leadNews.images[0]}
              alt={leadNews?.newsTitle || "News Image"}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              priority
            />
          )}
        </div>

        <div className="mt-4">
          {/* টাইটেল */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight group-hover:text-blue-600 transition-colors">
            {leadNews.newsTitle}
          </h1>

          {/* ডেসক্রিপশন - HTML স্টাইল রিসেট করা হয়েছে */}
          {leadNews.description && (
            <div className="text- md:-mt-10 text-gray-700">
              <div className="">
                {parse(truncateText(leadNews.description, 500))}
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default LeadNewsOne;
