// Este es el primer archivo a modificar
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
// Todas la aplicaciones en React necesitan una función, por convención se llama App
function App() {
  const handleSelect = (elemento: string) => {
    console.log("Elemento seleccionado en App:", elemento);
  };
  const handleSelect2 = (elemento: string) => {
    console.log("Mostrando el elemento seleccionado:", elemento);
  };
  const list = ["Goku", "Tanjiro", "Eren"];
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      <List data={list} onSelect={handleSelect} />
      <List data={list} onSelect={handleSelect2} />
    </Card>
  );
}

// se tiene que exportar esa función
export default App;
