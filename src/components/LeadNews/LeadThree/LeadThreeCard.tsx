import React from "react";

import LeadNewsThree from "./LeadNewsThree";
import { useLeadNewsThree } from "@/hooks/useLeadNewsThree";

const LeadThreeCard = () => {
  const { lead3Data, lead3Loading } = useLeadNewsThree();

  if (lead3Loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="group flex lg:flex-col flex-row gap-1 md:gap-2 animate-pulse"
          >
            <div className="w-full overflow-hidden">
              <div className="h-36 w-full bg-gray-200 rounded-md"></div>
            </div>
            <div className="w-full ps-2 lg:pt-2">
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-1 w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (lead3Data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No Lead-3 news available at the moment
      </div>
    );
  }

  return <LeadNewsThree newsData={lead3Data} />;
};

export default LeadThreeCard;