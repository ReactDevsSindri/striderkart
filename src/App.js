import Navigation from "./component/Navigation";
import Body from "./component/Body";
import Homepage from "./pages/Homepage";
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/productpage/:productId/:color/:storage",
      element: <ProductListPage />,
    },
  ]);
  return (
    <>
      <Navigation />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
