import React from "react";

const stats = [
  {
    number: "2,345",
    description: "Total Merchants Onboarded",
  },
  {
    number: "23",
    description: "Trillion Total Value of Transactions Processed",
  },
  {
    number: "350",
    description: "Million Total Number of Transactions",
  },
  {
    number: "99.9",
    description: "Average Success Rate",
  },
];

const OurResultSpeaks = () => {
  return (
    <section className="bg-brand-navy py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90rem] mx-auto">
        {/* Heading */}
        <h2 className="text-white text-center font-bold text-3xl sm:text-5xl lg:text-[55px] leading-tight lg:leading-[60px] mb-20 max-w-5xl mx-auto">
          Our results speak for themselves, check out the numbers.
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-white font-bold text-5xl lg:text-[55px] leading-[60px] mb-4">
                {stat.number}
              </div>
              <p className="text-white text-lg leading-[30px] max-w-[250px] font-light mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurResultSpeaks;
