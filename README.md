# <img width="151" alt="Prancheta 10@2x" src="https://user-images.githubusercontent.com/39804819/76900071-6ef26e00-6877-11ea-9645-a2673dee14b8.png">

[![YARN](https://img.shields.io/badge/Yarn-1.21.1-blue)](https://classic.yarnpkg.com/en/docs/install#windows-stable)    [![JAVA](https://img.shields.io/badge/Java-1.8-red)](https://www.java.com/pt_BR/download/)

**Projeto acadêmico para o 3º semestre do curso de Análise e Desenvolvimento de Sistemas na Faculdade Bandtec**

O sistema Zênite é um automatizador e gerenciador do processo de fiscalização de transporte urbano realizado pela empresa Órion.

---

## Índice

* Contexto
* Metas - Requisitos
* Diagrama de Arquitetura
* ProtoPersona
* UserStories
* StoryBoard
* Banco de Dados
* Equipe

---

## Contexto

Segundo a SPTrans, que gerencia o transporte por ônibus na capital, são feitas 200 mil viagens diárias na cidade. Dessas viagens 2 milhões de viagens não foram cumpridas segundo o órgão fiscalizador TCM(Tribunal de Contas do Município), isso corresponde a 38,6 milhões de km que deixaram de ser operados pelas empresas, somente em dias úteis no período auditado. Essa problemática chamou atenção pois impacta diretamente a população que depende do bom funcionamento deste serviço é crucial para o cotidiano dos moradores da cidade e redondezas.

Partindo então deste contexto planejamos nosso sistema de gerenciamento de transporte urbano. Nosso plano é auxiliar no processo de fiscalizar a chegada e saída dos ônibus, onde os principais atores são o fiscal e o motorista; e tambêm auxiliar na tomada de decisão dos gestores das linhas com os dados que serão informatizados.

---

## Metas - Requisitos


- [ ] Site Institucional
- [ ] Aplicação
  - [ ] Tela de Login
  - [ ] Tela de Esqueci Minha Senha
  - [ ] CRUD Linha
  - [ ] CRUD Ônibus
  - [ ] CRUD Fiscal
  - [ ] CRUD Motorista
  - [ ] Dashboard
    - [ ] Gráficos com ChartJS
      - [ ] Gráfico com início e fim de viagem
      - [ ] Gráfico mostrando tempo percorrido na viagem
      - [ ] Gráfico com média de tempo de viagem por linha
      - [ ] Gráfico com horário do dia em qua as linhas mais demoram em suas viagens
      - [ ] Gráfico mostrando quantidade de ônibus circulando por linha em um determinado perído
      - [ ] Gráfico com outliers
    - [ ] Filtros no dashboard
    - [ ] Gerar relatórios a partir dos dados da dashboard
    - [ ] Gerar relatórios com dados escolhidos pelo usuário
  - [ ] Perfil
  - [ ] Ícone de HelDesk
  - [ ] Logoff
- [ ] IOT
  - [ ] Módulo RFID (RC522) para transportas dados das viagens.
  - [ ] Case para o equipamento do arduíno
- [x] Banco de dados hospedados na nuvem AZURE

  
---

## Diagrama de Arquitetura

![imagem do diagrama de arquitetura](https://github.com/BandTec/Zenite/blob/master/Documentacao/Sprint1/Diagramas/Desenho_Solucao.png)

---

## ProtoPersona

<div style="display: flex; flex-direction: row;">
<img src="https://github.com/BandTec/Zenite/blob/master/Documentacao/Sprint1/ProtoPersonas/ProtoPersonaFiscal.png" width="30%">


<img src="https://github.com/BandTec/Zenite/blob/master/Documentacao/Sprint1/ProtoPersonas/ProtoPersonaGerente.png" width="30%">
</div>

---

## UserStories

**Fiscal**
> Eu fiscalizo várias linhas e faço anotações nos relatórios de papel dos motoristas como horário de saída e chegada, assim controlo todos os ônibus

> Preciso tomar decisões baseadas no tempo de espera, números de viagens e quantidade de veículos, todas essas informações são que mudam diáriamente porém eu tenho que ser cuidadoso e rápido.

**Gerente**
> Preciso ser informado quando há atrasos recorrentes em um trajeto especifico, para relatar a necessidade de aumento da frota

> Necessito determinar padrões de serviço prestado e  mostrar resultados para meus superiores

**Motorista**
> Eu como motorista tenho um horário a cumprir para chegar e sair, mas é difícil em horário de pico, chego atrasado e nunca sei quanto tempo vou demorar para sair


> Preencho um relatório toda viagem, com horário e número da catraca e o fiscal faz anotações nele também 

---

## StoryBoard

<img src="https://github.com/BandTec/Zenite/blob/master/Documentacao/Sprint2/storyboard/storyboard-fiscal.jpg" width="60%">

---

## Banco de Dados

<img src="https://github.com/BandTec/Zenite/blob/master/Documentacao/Sprint1/Banco%20de%20dados/MER.png" width="60%">

---

### Equipe

| **@alexbuarque** | **@esteves-esta** | **@jPedroSoares** | **@Laissilvaa** | **@Rayssawoods** | **@vitorsilv** |

