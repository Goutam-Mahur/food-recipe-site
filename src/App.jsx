import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/page";
import Details from "./pages/details/page";
import Favourites from "./pages/favourites/page";
import Navbar from "./components/navbar";
import { GlobalContext } from "./context/GlobalContext";

const App = () => {
  const { setFavourites } = useContext(GlobalContext);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    } else {
      setFavourites([]);
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white text-gray-600 text-lg p-6">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
