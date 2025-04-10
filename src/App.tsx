import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { RootLayout } from "./components/RootLayout";
import { Favourites } from "./pages/Favourites";
import { MyRecipes } from "./pages/MyRecipes";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "",
      element: <RootLayout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/favourites", element: <Favourites /> },
        { path: "/myrecipes", element: <MyRecipes /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
