export const getEventosAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/evento`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const getEventosPorCodigoAPI = async id => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/evento/${id}`,
        {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const deleteEventosAPI = async id => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/evento/${id}`,
        {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            }
        });
    const data = await response.json();
    return data;
}

export const cadastraEventosAPI = async (objeto, metodo) => {
    const response = await fetch(
        `${process.env.REACT_APP_ENDERECO_API}/evento`,
        {
            method : metodo,
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(objeto)
        });
    const data = await response.json();
    return data;
}