import "bootstrap/dist/css/bootstrap.min.css";
import { ProductsProvider } from "./ProductsContext";
//BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Navbar from "./Components/Navbar";
//views/routes
import Home from "./views/public/Home";
import Carrito from "./views/public/Carrito";
import Producto from "./views/public/Producto";
import Login from "./views/public/Login";
import AgregarProducto from "./views/private/admin/Addproduct";
import Registrar from "./views/public/Registrar";
import Usuario from "./views/private/user/User";
function App() {
  return (
    //my app
    <BrowserRouter>
      <div className="App">
        <ProductsProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/producto/:id" element={<Producto />} />
            <Route
              path="/admin/agregar_producto"
              element={<AgregarProducto />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Registrar/>} />
            <Route path="/usuario/*" exact element={<Usuario />} />
          </Routes>
        </ProductsProvider>
      </div>
    </BrowserRouter>
  );
}
export default App;
