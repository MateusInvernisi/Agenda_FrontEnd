import { useState, useEffect } from "react";
import EventoContext from "./EventoContext"
import { getEventosAPI, getEventosPorCodigoAPI, deleteEventosAPI, cadastraEventosAPI  } from "../../../servicos/eventoServicos";
import Tabela from './Tabela'
import Form from "./Form";

const Evento = () => {

    const [alerta, setAlerta] = useState({ status : "", message : ""});
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({ id : "", nome : ""});

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({status : "", message : ""});
        setObjeto({
            id : 0, 
            nome : ""
        });
    }

    const editarObjeto = async id => {
        setObjeto(await getEventosPorCodigoAPI(id));
        setEditar(true);
        setAlerta({status : "", message :""});
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraEventosAPI(objeto, metodo);
            setAlerta({status : retornoAPI.status, message : retornoAPI.message});
            setObjeto(retornoAPI.objeto);
            if (!editar){
                setEditar(true);
            }
        } catch (err) {
            console.log(err);
        }
        recuperaEventos();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({...objeto, [name] : value});
    }

    const recuperaEventos = async () => {
        setListaObjetos(await getEventosAPI());
    }

    const remover = async id => {
        if (window.confirm('Deseja remover este objeto?')){
            let retornoAPI = await deleteEventosAPI(id);
            setAlerta({ status : retornoAPI.status, message : retornoAPI.message});
            recuperaEventos();
        }
    }

    useEffect(()=>{
        recuperaEventos();
    },[]);


    
    return (
        <EventoContext.Provider value={{
            alerta, listaObjetos, remover,
            objeto, acaoCadastrar, handleChange, novoObjeto, editarObjeto
            
        }}>
            <Tabela/>
            <Form/>
        </EventoContext.Provider>
    )
}

export default Evento;
