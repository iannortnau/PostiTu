import './Home.css';
import NavBar from "../../componentes/NavBar/NavBar";
import Painel from "../../componentes/Painel/Painel";
import ContextoHome from "../../contexts/ContextoGlobal";

function Home() {
  return (
  <ContextoHome>
        <div className="Home">
            <NavBar/>
            <Painel/>
        </div>
  </ContextoHome>
  );
}

export default Home;
