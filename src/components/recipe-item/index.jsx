import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col p-5 w-80 hover:scale-105 overflow-hidden border-2 rounded-2xl shadow-xl hover:shadow-red-300 duration-300 gap-10 bg-white/75">
      <div className="h-40 flex overflow-hidden justify-center items-center rounded-xl">
        <img src={item?.image_url} alt="recipe-item" className="block w-full" />
      </div>

      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>

        <h3 className="font-bold text-black text-2xl truncate">
          {item?.title}
        </h3>
        <Link
          to={`/details/${item?.id}`}
          className="text-sm p-3 px-8 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
        >
          Recipe Detail
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
