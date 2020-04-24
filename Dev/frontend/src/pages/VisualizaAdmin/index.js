import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, Row, Acoes } from './styles';
import Botao from '../../components/Botao';
import Tabela from "../../components/Tabela2";
import Titulo from '../../components/Titulo';
import Paginacao from '../../components/Paginacao';

export default function ConsultaAdmin() {
  const [corpo, setCorpo] = useState([]);
  
  useEffect(()=> {
    async function dadosCorpos() {
      //Essa linha de baixo pega o token de autenticação do localStorage
      const token = localStorage.getItem('token');
      
      //Essa de baixo, faz a chamada GET pra rota /api/linha, passando o token como cabeçalho e passa pra 
      //uma variavel response
      const response = await api.get("/api/administrador", {
        headers: { Authorization: token },
      });
      
      //aqui pego do response.data que é onde tá os dados da linha e passo pra uma variavel tbm
      let dados = response.data;

      let temp = [];

      dados.forEach( item => {
        temp.push(
          criaDados(
            item.id,
            item.nome,
            item.conta.email
          )
        );
      });
      setCorpo(temp);
    }

    dadosCorpos();
  }, []);
  
  function criaDados(id, nome, email){
    return {id, nome, email}
  }

  return (
    <Container>
      <Row>
        <Titulo textoMenor="consulta de administradores" textoMaior="" />
      </Row>

      <Acoes>
        <Botao
          descricao="Novo Administrador"
          estiloEscuro={true}
          url="/administrador/cadastro"
        />

        <Botao descricao="relatório" url="/administrador" />
      </Acoes>

      <Row>
        <Tabela tipo="administrador" dados={corpo} detalhes={false} />
      </Row>

      <Row>
        <Paginacao />
      </Row>
    </Container>
  );
}