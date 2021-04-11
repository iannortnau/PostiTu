import {ContextoGlobal} from "../../contexts/ContextoGlobal";
import {useContext, useEffect} from "react";
import logo from '../../img/logo-preto.svg';
import '../../styles/w3.css';

function PainelLogin() {
    const contexto = useContext(ContextoGlobal);

    useEffect(() => {
        //document.getElementById('id01').style.display='block';
    },[]);

    function handleLoga() {
        contexto.setState({...contexto.state, logado: 1, nome: 'iann'});
    }
    function handleCadastro() {
        contexto.setState({...contexto.state, logado: 2, nome: 'iann'});
    }

    function handleFechaLogin(){
        document.getElementById('id01').style.display='none';
    }



    return(
        <div id="id01" className="w3-modal">
                <div className="w3-modal-content w3-card-4 w3-animate-zoom" style={{width: '600px'}}>

                    <div className="w3-center"><br/>
                        <img src={logo} style={{width: "30%"}} className="w3-margin-top"/>
                    </div>

                    <form className="w3-container" action="/action_page.php">
                        <div className="w3-section">
                            <label><b>Email</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="@PostiTu.com" name="Email" required/>
                            <label><b>Senha</b></label>
                            <input className="w3-input w3-border" type="text" placeholder="Senha" name="senha" required/>
                            <button className="w3-button w3-block w3-dark-gray w3-section w3-padding" type="submit">Login </button>
                        </div>
                    </form>

                    <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
                        <button onClick={handleFechaLogin} type="button" className="w3-button w3-red">Cancel</button>
                        {/*<span className="w3-right w3-padding w3-hide-small">Forgot <a href="#">password?</a></span>*/}
                    </div>

                </div>
        </div>
    );

}
export default PainelLogin;