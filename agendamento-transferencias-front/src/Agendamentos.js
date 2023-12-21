function Agendamentos({lista}) {
    return(
        <div>
            <h1>Extrato de Agendamentos</h1>
        
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Conta Origem</th>
                        <th>Conta Destino</th>
                        <th>Valor da Transferência</th>
                        <th>Taxa</th>
                        <th>Data da Transferência</th>
                        <th>Data do Agendamento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map((obj, indice) => (
                            <tr key={indice}>
                                <td>{obj.idAgendamento}</td>
                                <td>{obj.contaOrigem}</td>
                                <td>{obj.contaDestino}</td>
                                <td>{obj.valorTransferencia}</td>
                                <td>{obj.taxa}</td>
                                <td>{obj.dataTransferencia}</td>
                                <td>{obj.dataAgendamento}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Agendamentos;