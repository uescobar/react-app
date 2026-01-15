// Este es el primer archivo a modificar

// Todas la aplicaciones en React necesitan una función, por convención se llama App
function App(){
  // retornamos contenido que se le va a mostrar a los usuarios
  // se escribe en código jsx que se transforma en React.createElement y va a tener unas cuantas opciones
  // mostrar esta funcion en babeljs.io

  //return <p>Hola {Mundo}</p>; // variable
  //return <p>Hola {'Mundo'}</p>; // string
  //return <p>Hola {Mundo()}</p>;// ejecutar una funcion
  
  const nombre = "Chanchito feliz";
  
  return <p>Hola {nombre}</p>; // cadena

}

// se tiene que exportar esa función
export default App;