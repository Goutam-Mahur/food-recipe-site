import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import RecipeItem from "../../components/recipe-item";

const Favourites = () => {
  const { favourites } = useContext(GlobalContext);

  return (
    <>
      <div className="flex flex-wrap justify-center container mx-auto py-8 gap-10">
        {favourites && favourites.length > 0 ? (
          favourites.map((item, index) => (
            <RecipeItem item={item} key={index} />
          ))
        ) : (
          <p className="text-xl lg:text-4xl text-black font-extrabold text-center">
            Nothing added
          </p>
        )}
      </div>
    </>
  );
};

export default Favourites;
