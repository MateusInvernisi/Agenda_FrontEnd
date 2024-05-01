import { useState, useContext } from "react";
import { loginUserAPI } from '../../../servicos/loginservicos';
import LoginContext from './LoginContext';
import Form from '../login/Form';
import {cadastraUsuarioAPI } from "../../../servicos/usuarioServicos";


const Login = () => {
    const { setIsLoggedIn } = useContext(LoginContext);
    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [objeto, setObjeto] = useState({ email: "", senha: "" });
    const [cadastro, setCadastro] = useState({ id: null, nome: "", email: "", senha: "" });

    const novoCadastro = () => {
        setAlerta({status : "", message : ""});
        setCadastro({
            id : 0, 
            nome : "",
            email : "",
            senha : ""
        });
    }

    const acaoLogin = async e => {
        e.preventDefault();
        try {
            const sucesso = await loginUserAPI(objeto);
            if (sucesso) {
                setIsLoggedIn(true);
                setAlerta({ status: "success", message: "Login bem-sucedido!" });
            } else {
                setAlerta({ status: "error", message: "Usuário não cadastrado!" });
            }
        } catch (error) {
            setAlerta({ status: "error", message: error.message });
        }
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = "POST";
        try {
            let retornoAPI = await cadastraUsuarioAPI(cadastro, metodo);
            console.log("Retorno da API:", retornoAPI); // Log do retorno da API
            setAlerta({status : retornoAPI.status, message : retornoAPI.message});
            if (retornoAPI.status === 'success') {
                setCadastro(retornoAPI.objeto); // Atualize o estado cadastro com os dados do objeto retornado pela API
            }
        } catch (err) {
            console.log(err);
            setAlerta({ status: "error", message: "Erro ao cadastrar usuário" });
        }}

    const handleCadastroChange = (e) => {
        const { name, value } = e.target;
        setCadastro({ ...cadastro, [name]: value });
    };

    const handleEmailChange = (e) => {
        setObjeto({ ...objeto, email: e.target.value });
    };

    const handleSenhaChange = (e) => {
        setObjeto({ ...objeto, senha: e.target.value });
    };

    return (
        <LoginContext.Provider value={{ alerta, objeto, cadastro, novoCadastro, acaoLogin, acaoCadastrar, handleEmailChange, handleSenhaChange, handleCadastroChange, }}>
            <div>
                <Form />
            </div>
        </LoginContext.Provider>
    );
};

export default Login;
