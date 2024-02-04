import Navigation from "./component/Navigation";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import { Toaster } from "./components/ui/toaster";
import HomePageProduct from "./component/HomePageProduct";
import AppContext from "./context/AppContext";
import { useEffect, useState } from "react";

function App() {
  const [contextValues, setContextValues] = useState({
    userDetails: {},
    cart: [],
  });
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setContextValues({
        ...contextValues,
        userDetails: {
          isLoggedIn: true,
        },
      });
    }
  }, []);
  return (
    <AppContext.Provider value={{ contextValues, setContextValues }}>
      <>
        <Router>
          <Navigation key={localStorage.getItem("isLoggedIn")} />
          <div style={{ marginTop: "72px" }}></div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/productlistpage" element={<ProductListPage />} />
            <Route path="/productpage/:productId" element={<ProductPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <Toaster />
        </Router>
      </>
    </AppContext.Provider>
  );
}

export default App;
