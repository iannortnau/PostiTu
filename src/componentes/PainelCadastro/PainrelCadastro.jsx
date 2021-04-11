import {ContextoGlobal} from "../../contexts/ContextoGlobal";
import {useContext, useEffect, useState} from "react";
import logo from '../../img/logo-preto.svg';
import '../../styles/w3.css';
import axios from 'axios';
var md5 = require('md5');



function PainelCadastro() {
    const contexto = useContext(ContextoGlobal);
    const [menssagem,setMenssage] = useState({
        menssagem: '',
        cor: '',
    });

    useEffect(() => {
        //document.getElementById('id01').style.display='block';
    },[]);

    function handleFechaLogin(){
        document.getElementById('id02').style.display='none';
    }

    async function upaImagem(file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'dzuo9lxx');

        return await axios.post("https://api.cloudinary.com/v1_1/postitu/image/upload", formData).then((response)=>{return response.data.public_id;});
    }

    async function handleSubmit(event){
        event.preventDefault();
        if(event.target.senha.value == event.target.senha2.value){
            var senha = md5(event.target.senha.value);
            setMenssage({menssagem: "Cadastrando espere um pouco...", cor: "green"});

            let public_id = await upaImagem(event.target.imagem.files[0]);

            axios.post('http://127.0.0.1:8000/api/usuario', {
                nome: event.target.nome.value,
                email: event.target.email.value,
                senha: senha,
                imagem: public_id
            }).then(function (response) {
                    setMenssage({menssagem: "Cadastrado com sucesso", cor: "green"});
                    setTimeout(()=>{
                        event.target.reset();
                        setMenssage({menssagem: "", cor: ""});
                        handleFechaLogin();
                    },2000)
                })
                .catch(function (error) {
                    console.log(error);
                    setMenssage({menssagem: "Erro email já cadastrado", cor: "red"});
                });
        }else{
            setMenssage({menssagem: "As Senhas não Correspondem", cor: "red"});
        }
    }
    return(
        <div id="id02" className="w3-modal">
            <div className="w3-modal-content w3-card-4 w3-animate-zoom" style={{width: '600px'}}>

                <div className="w3-center"><br/>
                    <img src={logo} style={{width: "30%"}} className="w3-margin-top"/>
                </div>

                <form className="w3-container" onSubmit={handleSubmit}>
                    <div className="w3-section">
                        <h2>Cadastro</h2>
                        <label><b>Nome</b></label>
                        <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="nome" name="nome" required/>
                        <label><b>Email</b></label>
                        <input className="w3-input w3-border w3-margin-bottom" type="email" placeholder="@PostiTu.com" name="email" required/>
                        <label><b>Senha</b></label>
                        <input className="w3-input w3-border w3-margin-bottom" type="password" placeholder="Enter Password" name="senha" required/>
                        <label><b>Confirmar senha</b></label>
                        <input className="w3-input w3-border w3-margin-bottom" type="password" placeholder="Enter Password" name="senha2" required/>
                        <label><b>Foto de Prtfil</b></label>
                        <input className="w3-input w3-border w3-margin-bottom" type="file" placeholder=" " name="imagem" required/>
                        <h3 className={['w3-padding w3-text-'+menssagem.cor]}>{menssagem.menssagem}</h3>
                        <button className="w3-button w3-block w3-dark-gray w3-section w3-padding" type="submit">Criar Conta</button>
                    </div>
                </form>
                <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
                    <button onClick={handleFechaLogin} type="button" className="w3-button w3-red">Cancel</button>
                </div>

            </div>
        </div>
    );

}
export default PainelCadastro;