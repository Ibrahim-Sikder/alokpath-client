/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Loading from "../Share/_components/Loading";
import React from "react";
import LeadNewsOne from "./LeadNewsOne";
import LeadNewsTwo from "./LeadNewsTwo";
import { useHomePageNews } from "@/hooks/useHomePageNews ";
import LeadThreeCard from "./LeadThree/LeadThreeCard";

const NewsCard = () => {
  const { lead1Data, lead2Data, lead1Loading, lead2Loading } =
    useHomePageNews();

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Lead-1 Section */}
        <div className="lg:col-span-2">
          {lead1Loading ? <Loading /> : <LeadNewsOne newsData={lead1Data} />}
        </div>

        {/* Lead-2 Section */}
        <div className="hidden lg:block">
          {lead2Loading ? (
            <div className="flex flex-col gap-3 border-s border-gray-500 ps-3">
              {/* Skeleton loader for Lead-2 */}
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="h-[110px] flex gap-2 border-b border-gray-200 pb-0 animate-pulse"
                >
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div className="w-[200px]">
                    <div className="h-[100px] w-[200px] bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <LeadNewsTwo newsData={lead2Data} />
          )}
        </div>
      </div>

      <div className="border-t border-gray-500" />

      {/* Lead-3 Section */}

      <LeadThreeCard />
    </div>
  );
};

export default NewsCard;
