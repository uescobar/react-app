import { useState } from "react";
import ProductDashboard from "./components/ProductDashboard";
import ProductList from "./components/ProductList";
import Button from "./components/Button";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone",
    },
  ]);

  const handleClick = () => {
    const newProduct = { id: 2, name: "Android" };
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <ProductDashboard amount={products.length} />
      <Button onClick={handleClick}>Enviar</Button>
      <ProductList products={products} />
    </div>
  );
}

export default App;
