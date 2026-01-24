// Este es el primer archivo a modificar
import { useState } from "react";
import Alert from "./components/Alert";

/**
 * En JavaScript existen los valores truthy y falsy
 * truthy: cualquier valor que no sea falsy
 * falsy: 0, "", null, undefined, NaN, false
 *
 * Pero en react esto no es así, en react solo se consideran falsy los siguientes valores:
 * false, null, undefined
 * **/

// Todas la aplicaciones en React necesitan una función, por convención se llama App
function App() {
  const [status, setStatus] = useState(true);

  const toggleStatus = () => setStatus(!status);
  return (
    <Alert status={status} onClick={toggleStatus}>
      Alerta!
    </Alert>
  );
}

// se tiene que exportar esa función
export default App;
