import {useContext, useEffect, useState} from "react";
import {ContextoGlobal} from "../../contexts/ContextoGlobal";
import './PainelControle.css';
import PainelLogado from '../PainelLogado/PainelLogado';
import PainelLogin from '../PainelLogin/PainelLogin';
import PainelCadastro from "../PainelCadastro/PainrelCadastro";


function PainelCotrole() {
    const contexto = useContext(ContextoGlobal);
    //const [postitu,setPostitu] = useState([]);


    return (
        <>
            <PainelLogin/>
            <PainelCadastro/>
            <PainelLogado/>
        </>
    );

}
export default PainelCotrole;