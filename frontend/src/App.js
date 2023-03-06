import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './component/nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireAuth } from 'react-auth-kit'
import Home from './views/home';
import Product from './views/product';
import Cart from './views/cart';
import PNF from './views/pageNotFound';
import Admin from './views/admin';
import Reg from './views/reg';
import Login from './views/login';
import './style/app.css'
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/admin" element={<RequireAuth loginPath='/login'><Admin /></RequireAuth>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reg" element={<Reg />} />
                    <Route path="*" element={<PNF />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;


