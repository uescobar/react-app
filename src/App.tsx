import { useState } from "react";
import ProductDashboard from "./components/ProductDashboard";
import ProductList from "./components/ProductList";
import Button from "./components/Button";

function App() {
  const [products, setProducts] = useState([
    {
      id: Math.random().toString(),
      name: "iPhone",
    },
  ]);

  const comienzo = () => {
    let product = { id: Math.random().toString(), name: "Surfboard" };
    setProducts([product, ...products]);
  };

  const final = () => {
    let product = { id: Math.random().toString(), name: "Guitarra Eléctrica" };
    setProducts([...products, product]);
  };

  const eliminar = () => {
    setProducts(products.slice(0, -1));
  };

  const limpiar = () => {
    setProducts([]);
  };

  return (
    <div>
      <Button onClick={comienzo}>Comienzo</Button>
      <Button onClick={final}>Final</Button>
      <Button onClick={eliminar}>Eliminar</Button>
      <Button onClick={limpiar}>Limpiar</Button>
      <ProductList products={products} />
    </div>
  );
}

export default App;
