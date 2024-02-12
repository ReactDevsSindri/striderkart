import Navigation from "./component/Navigation";
import Homepage from "./pages/Homepage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import { Toaster } from "./components/ui/toaster";
import AppContext from "./context/AppContext";
import { useEffect, useState } from "react";
import ContactUs from "./component/ContactUs";
import ThemeContext from "./context/ThemeContext";
import AddProductPage from "./pages/AddProductPage";
import CartContext from "./context/CartContext";

function App() {
  const [contextValues, setContextValues] = useState({
    userDetails: {},
    
  });
   const [cartValue,setCartValue] = useState ([])
  const [themeValue, setThemeValue] = useState({ currentMode: "light" });
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
    <div className="dark:text-white">

    <ThemeContext.Provider value={{ themeValue, setThemeValue }}>
      <AppContext.Provider value={{ contextValues, setContextValues }}>
        <CartContext.Provider value={{cartValue, setCartValue}}>

        <>
          <HashRouter>
            <Navigation key={localStorage.getItem("isLoggedIn")} />
            <div style={{ marginTop: "72px" }}></div>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/productlistpage" element={<ProductListPage />} />
              <Route path="/productpage/:productId" element={<ProductPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/addproduct" element={<AddProductPage/>} />
            </Routes>
            <Toaster />
          </HashRouter>
        </>
        </CartContext.Provider>
      </AppContext.Provider>
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
