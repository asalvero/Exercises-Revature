import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={HomePage} />
                <Route path="/products" element={ProductPage} />
                <Route path="/register" element={RegisterPage} />
                <Route path="/login" element={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;