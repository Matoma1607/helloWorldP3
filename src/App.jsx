import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/informacion";

function App() {
  return <section className="container my-5">
    <h1 className="text-center">Hello World!</h1> <hr />
    <Informacion Hello="my friend!" /> <hr />
  </section>;
}

export default App;
