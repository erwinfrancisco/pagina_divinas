import './App.css';
import Menu from "./components/menu";
import Home from "./components/home";
import Promociones from "./components/promociones";
import Contacto from "./components/contacto";
import Ubicacion from "./components/ubicacion";
import Pie from "./components/pie-pagina";




function App() {

  const currentURL = window.location.pathname
  function renderContent(){
    {switch(currentURL) {
      case "/":
        return <Home/>
        
      case "/promociones":
        return <Promociones/>
      case "/contacto":
        return <Contacto/>
      case "/ubicacion":
        return <Ubicacion/>
      default:
        break;
    }
  }
  }
  return (

    <div className="App">
      <Menu/>
      {renderContent()}
      <Pie/>
    </div>
    
  );
}

export default App;
