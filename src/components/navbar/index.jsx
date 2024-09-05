import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

export default function Navbar() {
  const { search, setSearch, handleSubmit } = useContext(GlobalContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col justify-center gap-2 relative">
      <nav className="flex justify-between items-center pt-8 pb-4 container mx-auto">
        <h2 className="text-2xl font-semibold">
          <NavLink to={"/"}>FoodRecipe</NavLink>
        </h2>
        <button
          className="md:hidden flex items-center p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
        <form onSubmit={handleSubmit} className="hidden md:block">
          <input
            type="text"
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Enter Food Name..."
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          />
        </form>
        <ul className="hidden md:flex gap-5">
          <li>
            <NavLink
              to={"/"}
              className="text-black hover:text-gray-700 duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favourites"}
              className="text-black hover:text-gray-700 duration-300"
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-[calc(0.5rem)] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center gap-5 p-4">
          <li>
            <NavLink
              to={"/"}
              className="text-black hover:text-gray-700 duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favourites"}
              className="text-black hover:text-gray-700 duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center md:hidden"
      >
        <input
          type="text"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Enter food name..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none w-[50%] h-full shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
    </div>
  );
}
