import Navigation from "./component/Navigation";
import Body from "./component/Body";
import Homepage from "./pages/Homepage";
import {
  BrowserRouter as Router,
  RouterProvider,
  Switch,
  Link,
  createBrowserRouter,
} from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import Login from "./pages/Login";

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
    { path: "/LoginPage/", element: <Login /> },
  ]);
  return (
    <>
      <Navigation />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
