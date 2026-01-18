// Este es el primer archivo a modificar
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
// Todas la aplicaciones en React necesitan una función, por convención se llama App
function App() {
  const list = ["Goku", "Tanjiro", "Eren"];
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      <List data={list} />
    </Card>
  );
}

// se tiene que exportar esa función
export default App;
