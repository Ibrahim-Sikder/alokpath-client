"use client"

import type { TNews } from "@/types"
import { newsFields } from "@/util/fields"
import { useEffect, useState, useCallback, useRef } from "react"

interface UseSpecificNewsDataProps {
  category?: string
  newsTag?: string
  limit?: string
  searchTerm?: string
  currentNews?: string
  newsLocation?: string
  division?: string | null
  district?: string | null
  upazila?: string | null
  mode?: 'all' | 'paginated'
}

export const useSpecificNewsData = ({
  category,
  newsTag,
  limit,
  searchTerm,
  currentNews,
  newsLocation,
  division,
  district,
  upazila,
  mode = 'all',
}: UseSpecificNewsDataProps) => {
  const [newsData, setNewsData] = useState<TNews[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const initialLoadRef = useRef(true)

  // Set default limits based on mode
  const effectiveLimit = mode === 'paginated' 
    ? (limit || "10") 
    : (limit || "all") 

  const fetchNewsData = useCallback(async (pageNum: number = 1, isLoadMore: boolean = false) => {
    if (isLoadMore) {
      setIsLoadingMore(true)
    } else {
      setLoading(true)
    }
    setError(null)

    try {
      const url = new URL(`${process.env.NEXT_PUBLIC_BASE_API_URL}/news`)
      const params = new URLSearchParams({ 
        fields: newsFields,
      })

      // Different logic based on mode
      if (mode === 'paginated') {
        params.append("page", pageNum.toString())
        params.append("limit", effectiveLimit)
      } else {
        // 'all' mode - get all data at once
        if (effectiveLimit) {
          params.append("limit", effectiveLimit)
        }
      }

      if (category) params.append("category", category)
      if (newsTag) params.append("newsTag", newsTag)
      if (searchTerm) params.append("searchTerm", searchTerm)
      if (currentNews) params.append("currentNews", currentNews)
      if (newsLocation) params.append("newsLocation", newsLocation)
      if (division) params.append("division", division)
      if (district) params.append("district", district)
      if (upazila) params.append("upazila", upazila)

      url.search = params.toString()

      const response = await fetch(url.toString(), { 
        cache: "no-store",
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()

      if (!data?.success || !data?.data?.news) {
        throw new Error("No news data found!")
      }

      const newsArray = data.data.news || []
      
      // Set hasMore only for paginated mode
      if (mode === 'paginated') {
        if (data.data.meta) {
          const { page: currentPage, totalPage } = data.data.meta
          setHasMore(currentPage < totalPage)
        } else {
          const limitNum = parseInt(effectiveLimit) || 10
          setHasMore(newsArray.length >= limitNum)
        }
      } else {
        setHasMore(false)
      }

      if (isLoadMore) {
        setNewsData(prev => [...prev, ...newsArray])
      } else {
        setNewsData(newsArray)
      }
      
      return newsArray.length
    } catch (err: any) {
      setError(err.message || "Failed to load news data!")
      return 0
    } finally {
      if (isLoadMore) {
        setIsLoadingMore(false)
      } else {
        setLoading(false)
      }
    }
  }, [category, newsTag, searchTerm, currentNews, newsLocation, division, district, upazila, effectiveLimit, mode])

  const loadMore = useCallback(async () => {
    if (mode === 'paginated' && hasMore && !isLoadingMore) {
      const nextPage = page + 1
      const loadedCount = await fetchNewsData(nextPage, true)
      if (loadedCount > 0) {
        setPage(nextPage)
      }
    }
  }, [page, hasMore, isLoadingMore, fetchNewsData, mode])

  const resetPagination = useCallback(() => {
    setPage(1)
    setHasMore(true)
    setNewsData([])
  }, [])

  useEffect(() => {
    if (initialLoadRef.current) {
      initialLoadRef.current = false
      fetchNewsData(1, false)
    }
  }, [])

  useEffect(() => {
    if (!initialLoadRef.current) {
      resetPagination()
      fetchNewsData(1, false)
    }
  }, [category, newsTag, searchTerm, newsLocation, division, district, upazila])

  // Return different values based on mode
  if (mode === 'paginated') {
    return { 
      newsData, 
      loading, 
      error, 
      loadMore, 
      hasMore, 
      isLoadingMore,
      refresh: () => {
        resetPagination()
        return fetchNewsData(1, false)
      }
    }
  } else {
    return { 
      newsData, 
      loading, 
      error,
      refresh: () => fetchNewsData(1, false)
    }
  }
}