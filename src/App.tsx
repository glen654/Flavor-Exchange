import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { RootLayout } from "./components/RootLayout";
import { Favourites } from "./pages/Favourites";
import { MyRecipes } from "./pages/MyRecipes";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
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
