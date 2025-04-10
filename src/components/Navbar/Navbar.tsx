import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Navigation bar
export function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <header className="bg-white shadow-lg z-20 relative">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h2 className="text-black font-bold text-xl">Flavor Exchange</h2>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex text-black space-x-8">
            <Link
              to="/home"
              className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/favourites"
              className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
            >
              Favourites
            </Link>
            <Link
              to="/myrecipes"
              className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
            >
              My Recipes
            </Link>
          </ul>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button
            className="text-black hover:text-blue-600 cursor-pointer transition-colors duration-200"
            onClick={handleLogOut}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
          <button
            onClick={handleLogOut}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-black">
            <Link
              to="/home"
              className="hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/favourites"
              className="hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Favourites
            </Link>
            <Link
              to="/myrecipes"
              className="hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              My Recipes
            </Link>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleLogOut();
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-red-600 transition-colors duration-200"
            >
              Logout
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
}
