import { Link, useNavigate } from "react-router";

export function Navbar() {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    navigate("/");
  };

  return (
    <>
      <header className="bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <h2 className="text-black font-bold text-xl">Flavor Exchange</h2>

          <nav className="flex-1 flex justify-center">
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

          <div className="flex items-center">
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
          </div>
          <div className="flex items-center pl-4">
            <button
              onClick={handleLogOut}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
