"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { TNews } from "@/types"
import { sortByDate } from "@/util/sort"
import { useSpecificNewsData } from "@/hooks/useSpecificNewsData"
import Loading from "../Share/_components/Loading"

const Job = () => {
  const basePath = 'job';
  
  // Add enablePagination: true and limit: "5"
  const { 
    newsData, 
    loading, 
    error, 
    loadMore, 
    hasMore, 
    isLoadingMore 
  } = useSpecificNewsData({
    newsTag: basePath,
    limit: "5",
     mode: "paginated" 
  })
  
  if (loading && newsData.length === 0) {
    return <Loading/>
  }
  
  if (error) {
    return <h3>Oops! data not found.</h3>
  }

  const sortNewsData = sortByDate(newsData, 'postDate')
  const firstImage = sortNewsData[0]?.images[0]

  return (
    <div className="border-t-2">
      <div>
        <h1 className="text-4xl font-bold py-2 flex items-center">
          চাকরি
          <span>
            <ChevronRight size={50} color="red" />
          </span>
        </h1>
      </div>
      <div className="space-y-4">
        {firstImage && (
          <div className="mb-4">
            <Image
              src={firstImage || "/placeholder.svg"}
              alt={sortNewsData[0]?.newsTitle || "Job News"}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        
        {sortNewsData.map((news: TNews) => (
          <div key={news._id}>
            <h1 className="text-xl font-semibold py-2 border-b-2 hover:text-blue-500">
              <Link href={`${basePath}/${news._id}`}>{news?.newsTitle}</Link>
            </h1>
          </div>
        ))}
        
        {/* Load More Button */}
        <div className="pt-4 text-center">
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
                'আরও খবর দেখুন'
              )}
            </button>
          ) : newsData.length > 0 ? (
            <p className="text-gray-500 text-sm">
              
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Job