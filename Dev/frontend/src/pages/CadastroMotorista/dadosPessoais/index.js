/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  cpfMask,
  telefoneMask,
  dataMask,
  reformatarData,
  formatarData,
} from "./../../../functions/Mascaras/mask";
import { Container, CaixaHorizontal, CorpoPagina, FormContainer, Titulo, Subtitulo, Caixa } from './styles';

import BotaoForm from './../../../components/BotaoForm';
import StatusPage from './../../../components/StatusPage';
import InputComRotulo from './../../../components/InputComRotulo';

  export default function DadosPessoais({ mudarPagina, tipoPagina, adicionarDados, dados }){

  const [nome, setNome ] = useState("");  
  const [valorCpf, setValorCpf] = useState("");
  const [valorData, setValorData] = useState("");
  const [valorTelefone, setValorTelefone] = useState("");
  const [cnh, setValorCnh] = useState("");


  const mascararCpf = (e) => {
    setValorCpf(cpfMask(e.target.value));
  }

  const mascararData = (e) => {
    setValorData(dataMask(e.target.value));
  }

  const mascararTelefone = (e) => {
    setValorTelefone(telefoneMask(e.target.value));
  }

  useEffect(() => {  
    if (Object.keys(dados).length !== 0 && tipoPagina === "Edição") {
      setNome(dados.nome);
      setValorCpf(dados.cpf);
      setValorData(reformatarData(dados.dataNascimento));
      setValorTelefone(dados.numeroTelefone);
      setValorCnh(dados.cnh);
    }
  }, []);

  useEffect(() => {
    adicionarDados({
      nome,
      cpf: valorCpf,
      dataNascimento: formatarData(valorData),
      numeroTelefone: valorTelefone,
      cnh,
    });
  }, [valorCpf, valorData, valorTelefone, cnh, nome]);

  return (
    <Container>
      
      <CorpoPagina>
        <CaixaHorizontal center={true}>
          <StatusPage
            ativo={true}
            texto="Dados Pessoais"
            temProximoPasso={true}
          />

          <StatusPage 
          ativo={false} 
          texto="Endereço" 
          temProximoPasso={true} 
          />

          <StatusPage
            ativo={false}
            texto="Dados de Acesso"
            temProximoPasso={false}
          />
        </CaixaHorizontal>

        <FormContainer>
          
          <Link to="/motorista">          
            <BotaoForm texto="VOLTAR" mudarPagina={mudarPagina} ladoDireito={false} />
          </Link>

          <Caixa>
            <Subtitulo>{tipoPagina} DO MOTORISTA</Subtitulo>
            <Titulo>DADOS CADASTRAIS</Titulo>

            <InputComRotulo 
             value={nome}
             onChange={e => setNome(e.target.value)} 
             texto="Nome"
             name="nome" 
             maxLength="100" 
             required 
            />

            <InputComRotulo
              texto="CPF"
              maxLength="14"
              name="cpf"
              value={valorCpf}
              onChange={mascararCpf}
              required
            />
            
            <InputComRotulo
              value={cnh}
              onChange={e => setValorCnh(e.target.value)}
              texto="CNH do Motorista"
              maxLength="11"
              required
            />

            <CaixaHorizontal>
              <InputComRotulo
                pequeno={true}
                texto="Data de Nascimento"
                maxLength="10"
                name="datadenascimento"
                value={valorData}
                onChange={mascararData}
                required
              />

              <InputComRotulo
                texto="Telefone"
                pequeno={true}
                maxLength="10"
                name="telefone"
                value={valorTelefone}
                onChange={mascararTelefone}
                required
              />
            </CaixaHorizontal>
          </Caixa>

          <BotaoForm texto="Próximo" mudarPagina={mudarPagina} />
        </FormContainer>
      </CorpoPagina>
    </Container>
  );
}