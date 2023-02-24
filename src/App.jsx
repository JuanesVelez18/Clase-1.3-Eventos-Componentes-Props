import Button from "./components/Button";
import "./App.css";

function App() {
  const textButton = "Mi boton vaquero";

  return (
    <>
      <Button text={textButton} saludo="Hola vaquero">
        <div>
          <a href="">Ir a pagina de vaqueros</a>
          <p>Clickea para ver una fantastica pagina de vaqueros</p>
        </div>
      </Button>
    </>
  );
}

export default App;
