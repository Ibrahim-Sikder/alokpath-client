import NewsCard from "./NewsCard";

const LeadSection = () => {
  return (
    <div className="py-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Main News Section */}
        <div className="w-full">
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default LeadSection;
