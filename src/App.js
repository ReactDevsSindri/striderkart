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
import ProductPage from "./pages/ProductPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path:"/productlistpage",
      element: <ProductListPage/>
    },
    {
      path: "/productpage/:productId",
      element: <ProductPage />,
    },
    { path: "/LoginPage/", element: <Login /> },
  ]);
  return (
    <>
      <Navigation />
      <div style={{height:'72px'}}></div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
