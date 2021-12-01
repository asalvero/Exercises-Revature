// import Routes from "./Routes";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    //   <div className="App">
    //     {/* <HomePage />
    //     <ProductPage />
    //     <RegisterPage />
    //     <LoginPage /> */}
    //     <Route />
    //   </div>
    // );
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
