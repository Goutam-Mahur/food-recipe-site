import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  const handleAddToFavourites = (currItem) => {
    let cpyFavourite = [...favourites];
    const index = cpyFavourite.findIndex((item) => item.id === currItem.id);

    if (index === -1) {
      cpyFavourite.push(currItem);
    } else {
      cpyFavourite.splice(index, 1);
    }
    setFavourites(cpyFavourite);
    localStorage.setItem("favourites", JSON.stringify(cpyFavourite));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );

      const data = await response.json();

      if (data?.data?.recipes) {
        setLoading(false);
        setRecipes(data.data.recipes);
        setSearch("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearch("");
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        handleSubmit,
        loading,
        recipes,
        recipeDetails,
        setRecipeDetails,
        favourites,
        setFavourites,
        handleAddToFavourites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
