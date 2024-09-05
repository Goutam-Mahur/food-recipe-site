import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center container mx-auto py-8 gap-10">
      {Array(9)
        .fill()
        .map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col p-3 w-80 hover:scale-105 overflow-hidden border-2 rounded-2xl shadow-xl  gap-10 bg-white/75"
            >
              <div className="h-40 bg-slate-300 rounded-xl animate-pulse"></div>
              <div className="h-5 bg-slate-300 rounded-xl animate-pulse"></div>
              <div className="h-5 w-3/4 bg-slate-300 rounded-xl animate-pulse"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
