import React from "react";

const ShimmerDetails = () => {
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="w-full h-60 lg:h-full block rounded-lg bg-slate-300 animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="h-5 bg-slate-300 rounded-xl animate-pulse"></div>
        <div className="h-5 bg-slate-300 rounded-xl animate-pulse"></div>
        <div className="h-5 bg-slate-300 rounded-xl animate-pulse"></div>
        <div className="h-5 bg-slate-300 rounded-xl animate-pulse"></div>
        <div className="h-5 bg-slate-300 rounded-xl animate-pulse"></div>
        <div className="h-5 w-3/4 bg-slate-300 rounded-xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default ShimmerDetails;
