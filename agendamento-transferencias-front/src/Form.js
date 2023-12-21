function Form({eventoTeclado, agendar}) {
    return(
        <form>
            <h1 style={{textAlign: "center"}}>Realizar Agendamento de Transferência</h1>
            <label>Conta Origem: </label>
            <input type="text" onChange={eventoTeclado} name="contaOrigem" placeholder="Conta Origem" className="form-control"></input>
            <br/>
            <label>Conta Destino: </label>
            <input type="text" onChange={eventoTeclado} name="contaDestino" placeholder="Conta Destino" className="form-control"></input>
            <br/>
            <label>Valor da Transfgerência: </label>
            <input type="text" onChange={eventoTeclado} name="valorTransferencia" placeholder="Valor da Transferência" className="form-control"></input>
            <br/>
            <label>Data da Transferência: </label>
            <input type="text" onChange={eventoTeclado} name="dataTransferencia" placeholder="Data da Transferência" className="form-control"></input>
            <br/>
            <button className="btn btn-primary" onClick={agendar}>Confirmar Agendamento</button>
        </form>
    )
}

export default Form;