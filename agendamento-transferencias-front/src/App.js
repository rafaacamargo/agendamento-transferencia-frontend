import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Agendamentos from './Agendamentos';

function App() {

  const agendamento = {
    contaOrigem: "",
    contaDestino: "",
    valorTransferencia: "",
    dataTransfertencia: ""
  }
  const [agendamentos, setAgendamentos] = useState([]);
  const [objAgendamento, setObjAgendamento] = useState(agendamento);

  useEffect(() => {
    fetch("http://localhost:8080/agendamentosTransferencias/consultaAgendamentos",{
      method: "GET",
      headers: {
        "Content-type":"application/json"
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => setAgendamentos(retorno_convertido))
    
  }, [])

  const onDigitar = (e) => {
    setObjAgendamento({...objAgendamento, [e.target.name]:e.target.value});
  }

  const agendar = () => {
    fetch("http://localhost:8080/agendamentosTransferencias/agendarTransferencia", {
      method: "POST",
      body: JSON.stringify(objAgendamento),
      headers: {
        "Content-type":"application/json",
        "Accept": "application/json"
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      alert(retorno_convertido.mensagem)
    })
  }

  return (
    <div>
      <Form eventoTeclado={onDigitar} agendar={agendar}/>
      <Agendamentos lista={agendamentos} />
    </div>
  );
}

export default App;
