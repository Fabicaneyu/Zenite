/* eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useEffect } from 'react';

import { Container, CaixaHorizontal, CorpoPagina, FormContainer, Titulo, Subtitulo, Caixa } from './styles';

import BotaoForm from './../../../components/BotaoForm';
import StatusPage from './../../../components/StatusPage';
import InputComRotulo from './../../../components/InputComRotulo';

export default function DadosAcesso({ mudarPagina, tipoPagina, adicionarDados, dados, validarSenha }) {

  const [email, setEmail] = useState("");
  const [valorSenha, setValorSenha] = useState("");
  const [valorConfirmarSenha, setValorConfirmarSenha] = useState("");

  const verificarSenha = () => {
    if (valorSenha.length >= 8) {
      validarSenha(valorSenha === valorConfirmarSenha);
    }
  }

  useEffect(() => {
    if (Object.keys(dados).length !== 0 && tipoPagina === "Edição") {
      setEmail(dados.conta.email);
    }
  }, []);

  useEffect(()=> {
    if(tipoPagina === "Edição"){
      adicionarDados({
        conta: {
          idConta: dados.conta.idConta,
          senha: valorSenha,
          email,
          nivel: {
            "id": 3
          }
        }
      });
    }else{
      adicionarDados({
        conta: {
          senha: valorSenha,
          email,
          nivel: {
            "id": 3
          }
        }
      });
    }
    verificarSenha();
  }, [valorSenha, valorConfirmarSenha, email]);

  return (
    <Container>
      <CorpoPagina>
        <CaixaHorizontal center={true}>
          <StatusPage
            ativo={false}
            texto="Dados Pessoais"
            temProximoPasso={true}
          />

          <StatusPage
            ativo={false}
            texto="Endereço"
            temProximoPasso={true}
          />

          <StatusPage
            ativo={true}
            texto="Dados de Acesso"
            temProximoPasso={false}
          />
        </CaixaHorizontal>

        <FormContainer>
          <BotaoForm
            texto="Voltar"
            ladoDireito={false}
            mudarPagina={mudarPagina}
          />

          <Caixa>
            <Subtitulo>{tipoPagina} DO MOTORISTA</Subtitulo>
            <Titulo>Dados de Acesso</Titulo>

            <InputComRotulo
              texto="Email"
              maxLength="60"
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <InputComRotulo
              texto="Senha"
              maxLength="255"
              name="senha"
              type="password"
              value={valorSenha}
              onChange={(e) => setValorSenha(e.target.value)}
              required
              textoAlerta="Sua senha deve conter no mínimo 8 letras."
            />

            <InputComRotulo
              texto="Confirmar Senha"
              maxLength="255"
              name="confirmarSenha"
              type="password"
              value={valorConfirmarSenha}
              onChange={(e) => {
                setValorConfirmarSenha(e.target.value);
                verificarSenha();
              }}
              required
            />
          </Caixa>

          <BotaoForm
            texto="Finalizar"
            concluir={true}
            mudarPagina={mudarPagina}
          />
        </FormContainer>
      </CorpoPagina>
    </Container>
  );
}
