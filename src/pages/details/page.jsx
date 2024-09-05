import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import ShimmerDetails from "../../components/ShimmerDetail";
const Details = () => {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, handleAddToFavourites, favourites } =
    useContext(GlobalContext);

  const [detailLoading, setDetailLoading] = useState(false);

  const getDetails = async () => {
    try {
      setDetailLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );

      const data = await response.json();
      if (data?.data) {
        setRecipeDetails(data?.data);
        setDetailLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  if (detailLoading) return <ShimmerDetails />;

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-full flex justify-center items-start lg:items-center overflow-hidden rounded-xl">
          <img
            src={recipeDetails?.recipe?.image_url}
            alt="image of recipe"
            className="w-[90%] h-1/2 m-2 lg:m-0 object-cover block hover:scale-105 hover:rounded-lg duration-300 rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetails?.recipe?.publisher}
        </span>

        <h3 className="font-bold truncate text-2xl text-black">
          {recipeDetails?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavourites(recipeDetails.recipe)}
            className="p-3 px-8 text-base lg:text-lg mt-3 font-medium rounded-lg text-white bg-black tracking-wider shadow-md"
          >
            {favourites &&
            favourites.length > 0 &&
            favourites.findIndex(
              (item) => item.id === recipeDetails?.recipe?.id
            ) !== -1
              ? "Remove from Favourite"
              : "Save as Favourite"}
          </button>

          <div className="text-2xl my-2 underline font-semibold text-black">
            Ingredients :
          </div>

          <ul className="flex flex-col gap-3 p-2">
            {recipeDetails?.recipe?.ingredients.map((Ingredients, index) => (
              <li className="list-disc" key={index}>
                <span className="text-2xl my-3 font-medium text-black">
                  {Ingredients?.quantity === "" ? "1" : Ingredients?.quantity}{" "}
                  {Ingredients.unit}{" "}
                </span>
                <span className="text-2xl my-3 font-medium text-black">
                  {Ingredients.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
