"use client";
import { sortByDate } from "@/util/sort";
import truncateText from "@/util/truncate";
import Link from "next/link";
import parse from "html-react-parser";
import { formatDate } from "@/util/formateDate";
import Loading from "../Share/_components/Loading";
import { useSpecificNewsData } from "@/hooks/useSpecificNewsData";

const LastNews = () => {
  const { newsData, loading, error, loadMore, hasMore, isLoadingMore } =
    useSpecificNewsData({
      newsTag: "latest",
      limit: "10",
      mode: "paginated",
    });

  if (loading && newsData.length === 0) {
    return <Loading />;
  }

  if (error) {
    return <h3 className="p-4 text-red-600">Oops! Data not found.</h3>;
  }

  const sortNewsData = sortByDate(newsData, "postDate");

  return (
    <div
      className="w-full max-h-[200px] lg:max-h-[700px] px-0 overflow-y-auto 
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <ul className="divide-y divide-gray-200">
        {sortNewsData?.map((news) => {
          return (
            <li
              key={news?._id}
              className="py-3 md:py-4 transition-colors duration-200"
            >
              <Link
                href={`/${news?.category?.slug ?? "national"}/${news._id}`}
                className=" "
              >
                <h3
                  className="px-2  text-sm md:text-lg font-semibold 
                    hover:text-blue-600 transition-colors"
                >
                  {news?.newsTitle}
                </h3>
                <div className="px-2  text-xs md:text-[17px]  text-gray-500">
                  {news?.description
                    ? parse(truncateText(news.description, 80))
                    : ""}
                </div>
                <div className="px-2 flex justify-between items-center text-xs md:text-sm">
                  <span>{formatDate(news?.postDate)}</span>
                  <span className="text-blue-500 hover:text-blue-700">
                    আরও পড়ুন
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Load More Button at the bottom */}
      <div className="py-4 text-center">
        {hasMore ? (
          <button
            onClick={loadMore}
            disabled={isLoadingMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors 
                     flex items-center justify-center mx-auto"
          >
            {isLoadingMore ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                লোড হচ্ছে...
              </>
            ) : (
              "আরও খবর দেখুন"
            )}
          </button>
        ) : newsData.length > 0 ? (
          <p className="text-gray-500 text-sm">আর কোনো খবর নেই</p>
        ) : null}
      </div>
    </div>
  );
};

export default LastNews;
