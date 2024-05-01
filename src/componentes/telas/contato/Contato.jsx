function Contato() {
    return (
        <div className="tela_fundo">

            <div className="contato-html" >
                <div style={{marginBottom: 40, marginTop:20}}><p style={{fontWeight: 'bold'}}>CONTATOS: </p></div>           
                    <div style={{ padding: 10 }}>
                        <i class="bi bi-envelope-at"> mateusinvernisi@gmail.com </i><br />
                    </div>

                    <div style={{ padding: 10 }}>
                        <i class="bi bi-telephone-inbound"> (54) 1234 - 1234</i> <br />
                    </div>

                    <div style={{ padding: 10 }}>
                        <i class="bi bi-whatsapp"> +55 (54) 9 9210-4117</i> <br />
                    </div>

                    <div style={{ padding: 10 }}>
                        <i class="bi bi-buildings"> Paissandú n11</i> <br />
                    </div>

                </div>
            </div>
    )
}

export default Contato;