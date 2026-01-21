// Este es el primer archivo a modificar
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

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
  const [data, setData] = useState(["Tanjiro", "Goku", "Chanchito Feliz"]);

  /* const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(!isLoading);
  };

  const list: string[] = ["Tanjiro", "Goku", "Chanchito Feliz"];
  const handleSelect = (elemento: string) => {
    console.log("Elemento seleccionado en App:", elemento);
  };

  // la variable contenido se encargara de ver que se renderiza y que no
  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    <p>Sin elementos para mostrar</p>
  ); */

  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData(data.slice(0, -1));
  return (
    <Card>
      {/* {"" && "string vacio"}
      {undefined && "indefinido"}
      {null && "nulo"}
      {false && "falso"}
      {0 && "cero"}
      {NaN && "NaN"}

      {list.length !== 0 && "mi lista tiene elementos"} 

      {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        <p>No hay cotenido</p>
      )}
      
      */}
      {/* <CardBody title="Hola Mundo" text="Este es el texto" />
      {contenido}
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola Mundo
      </Button> */}
      <Button isLoading={true} onClick={addMinion}>
        Agregar
      </Button>
      <Button isLoading={false} onClick={delMinion}>
        Eliminar
      </Button>

      <List data={data} />
    </Card>
  );
}

// se tiene que exportar esa función
export default App;
