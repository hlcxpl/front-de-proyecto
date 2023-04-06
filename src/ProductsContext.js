import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  //UseState statements
  const [products, setProductos] = useState([]);
  const [cart, setcart] = useState([]);
  const [items, setitems] = useState(0);
  const [total, settotal] = useState(0);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [shouldNavigate2, setShouldNavigate2] = useState(false);
  const [user, setuser] = useState({});

  // const [orders, setPedidos] = useState([]);
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  const [productoNuevo, setproductoNuevo] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
    precio_oferta: "",
    img_url: "",
  });
  // const [user, setUser] = useState([]);
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    direccion_de_envio_por_default: "",
    comuna: "",
    telefono: "",
  });
  //async function to call the api and get the array data
  const apiProductos = async () => {
    const endpoint = `https://${process.env.REACT_APP_API_URL}/productos`;
    const resp = await fetch(endpoint);
    const data = await resp.json();
    setProductos(data);
  };

  const handleSumitRegistrar = async (event) => {
    event.preventDefault();
    try {
      await fetch(`https://${process.env.REACT_APP_API_URL}/registrar`, {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
    setShouldNavigate(true);
  };

  const handleSumitAgregarProducto = async (event) => {
    event.preventDefault();
    await fetch(`https://${process.env.REACT_APP_API_URL}/admin/agregar_producto`, {
      method: "POST",
      body: JSON.stringify(productoNuevo),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleSumitLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.text();
      console.log(data);
      if (data) {
        localStorage.setItem("token", data);
        console.log(data);
        await apiUser();
        const user = localStorage.getItem("user");
        console.log(user);
        setShouldNavigate(user?.length > 0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const apiPedidos = async () => {
  //   const endpoint = "http://localhost:3000/user/pedidos";
  //   const resp = await fetch(endpoint);
  //   const data = await resp.json();
  //   setPedidos(data);
  // };

  const apiUser = async () => {
    const endpoint = `https://${process.env.REACT_APP_API_URL}/usuario`;
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(localStorage);
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    console.log(headers);
    const resp = await fetch(endpoint, { headers });
    const data = await resp.json();
    localStorage.removeItem("token");
    console.log(data);
    setuser({ ...data });
    console.log(user);

    if (user && Object.keys(user).length > 0) {
      setShouldNavigate2(true);
    }
  };
  const handleSumitUserUpdate = async () => {
    const url = `https://${process.env.REACT_APP_API_URL}/usuario/editar_info/:id`;
    const options = {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(url, options)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  // use effect to call the api
  useEffect(() => {
    apiProductos();
    // apiPedidos();
  }, []);

  // Add to Cart function,
  const addCart = ({ id, precio, nombre, img_url }) => {
    // looking the index of the item by id
    const index = cart.findIndex((producto) => producto.id === id);
    //adding Detais from pizza to cart and set count to 1
    const productoDetails = { id, precio, nombre, img_url, count: 1 };

    if (index >= 0) {
      cart[index].count++;
      setcart([...cart]);
    } else {
      setcart([...cart, productoDetails]);
    }
  };
  //function increment item by index to increment count everytime while button has been clicked
  const increment = (i) => {
    cart[i].count++;
    setcart([...cart]);
  };

  //function decremnt item by index to decrement count only if count is > 1  everytime while button has been clicked, if count if 1 remove item from cart
  const decrement = (i) => {
    const { count } = cart[i];
    if (count === 1) {
      cart.splice(i, 1);
    } else {
      cart[i].count--;
    }
    setcart([...cart]);
  };

  // all state and function needed to be called in other components or views

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        items,
        total,
        productoNuevo,
        credentials,
        shouldNavigate,
        shouldNavigate2,
        user,
        usuario,
        handleSumitRegistrar,
        handleSumitAgregarProducto,
        handleSumitLogin,
        handleSumitUserUpdate,
        setuser,
        setShouldNavigate,
        setShouldNavigate2,
        setcredentials,
        setUsuario,
        setitems,
        setProductos,
        setcart,
        addCart,
        increment,
        decrement,
        settotal,
        setproductoNuevo,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider };
export default ProductsContext;
