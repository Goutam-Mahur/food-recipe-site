import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import RecipeItem from "../../components/recipe-item";
import Shimmer from "../../components/Shimmer";
const Home = () => {
  const { recipes, loading } = useContext(GlobalContext);

  if (loading) return <Shimmer />;
  return (
    <>
      <div className="flex flex-wrap justify-center container mx-auto py-8 gap-10">
        {recipes && recipes.length > 0 ? (
          recipes.map((item, index) => <RecipeItem item={item} key={index} />)
        ) : (
          <div className="flex items-center justify-center h-screen">
            <p className="text-xl lg:text-4xl text-black font-extrabold">
              Nothing to show, Please search something else
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
