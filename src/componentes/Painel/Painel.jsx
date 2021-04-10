import {useContext} from "react";
import {ContextoGlobal} from "../../contexts/ContextoGlobal";
import './Painel.css'


function Painel() {
    const contexto = useContext(ContextoGlobal);

    return(
        <div className="painel">
            
        </div>
    );

}
export default Painel;