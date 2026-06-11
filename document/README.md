# 🏔️ Circuito-Mineiro — Site de Turismo em Minas Gerais

🔗 **Site:** [melodious-kringle-a5b6b6.netlify.app](https://melodious-kringle-a5b6b6.netlify.app/)  
📁 **Repositório:** [github.com/LuccaMC/Circuito-Mineiro](https://github.com/LuccaMC/Circuito-Mineiro)  
🏫 **Instituição:** Fundação Mineira de Educação e Cultura (FUMEC)  
📚 **Curso:** Ciência da Computação — 1º Período  
📖 **Disciplina:** Desenvolvimento Web  
👥 **Equipe:** Lucca Mattos · Maurício Lima · Daniel Silva · Júlio Cesar  

---

## Sumário

1. [Visão Geral](#1-visão-geral)
2. [Objetivos](#2-objetivos)
3. [Público-Alvo](#3-público-alvo)
4. [Tecnologias Utilizadas](#4-tecnologias-utilizadas)
5. [Estrutura do Projeto](#5-estrutura-do-projeto)
6. [Organização das Páginas](#6-organização-das-páginas)
7. [Cidades e Pontos Turísticos](#7-cidades-e-pontos-turísticos)
8. [Como Acessar o Projeto](#8-como-acessar-o-projeto)
9. [Equipe](#9-equipe)

---

## 1. Visão Geral

O Circuito-Mineiro é um projeto acadêmico de desenvolvimento web criado por estudantes do 1º período do curso de Ciência da Computação da FUMEC. O projeto consiste em um site informativo e interativo com o propósito de valorizar e divulgar os principais pontos turísticos do estado de Minas Gerais, oferecendo ao usuário uma navegação intuitiva e visualmente atrativa.

O site apresenta seis cidades mineiras, cada uma com seus atrativos culturais, naturais e históricos, fornecendo descrições, imagens e informações relevantes para quem deseja conhecer ou planejar uma visita ao estado.

> 🌐 Acesse o projeto publicado em: [melodious-kringle-a5b6b6.netlify.app](https://melodious-kringle-a5b6b6.netlify.app/)

---

## 2. Objetivos

- Desenvolver um site funcional utilizando HTML, CSS e JavaScript;
- Aplicar na prática os conceitos de desenvolvimento web front-end;
- Criar uma experiência de usuário fluida, com navegação por âncoras e estrutura hierárquica de páginas;
- Promover o turismo em Minas Gerais por meio de uma plataforma digital acessível e informativa;
- Estimular o trabalho colaborativo e a divisão de responsabilidades em equipe no desenvolvimento de software.

---

## 3. Público-Alvo

O site é voltado para turistas, moradores de Minas Gerais e qualquer pessoa residente no Brasil que tenha interesse em conhecer as riquezas culturais, históricas e naturais do estado. A plataforma foi pensada para ser acessível a usuários de diferentes perfis, sem exigir conhecimento técnico para a navegação.

---

## 4. Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| HTML | Estrutura e marcação do conteúdo das páginas |
| CSS | Estilização, layout e animações |
| JavaScript | Interatividade e comportamento dinâmico |
| Git e GitHub | Controle de versão e hospedagem do repositório |
| Netlify | Plataforma de deploy e hospedagem do site |

> Nenhuma biblioteca ou framework externo foi utilizado, respeitando o escopo acadêmico da disciplina.

---

## 5. Estrutura do Projeto

```
Circuito-Mineiro/
|
|-- index.html                  (página home)
|
|-- pages/
|   |-- consultoria.html        (página marketing)
|   |-- belo_horizonte.html
|   |-- diamantina.html
|   |-- governador_valadares.html
|   |-- nova_lima.html
|   |-- ouro_preto.html
|   |-- uberlandia.html
|   |-- sobre_nos.html          (página sobre nós)
|   `-- sugestao.html           (página dedicada ao formulario de sugestão)
|
|-- css/
|   |-- style.css
|   |-- style_cidades.css
|   |-- style_lading_page.css
|   |-- style_sobre.css
|   `-- style_sugestao.css
|
|-- js/
|   |-- calculo.js
|   `-- modal.js
|
|-- image/
|   `-- (fotos diversas)
|
`-- document/
    `-- (readme e licensa)
```

## 6. Organização das Páginas

**🔹 Página Home** (`index.html`)  
Página central de navegação do site. Contém o mapa clicável de Minas Gerais com marcadores nas cidades disponíveis e flash-cards que direcionam o usuário para a página da cidade escolhida. O header possui âncoras para Deixe sua sugestão e About Us.

**🔹 Páginas das Cidades** — 6 páginas (`pages/cidade.html`)  
Cada página apresenta imagem de destaque da cidade, breve descrição e 3 pontos turísticos com imagem e texto alternando entre esquerda e direita a cada item. O footer contém formulário de sugestão de pontos turísticos.

**🔹 Página Sobre Nós** (`pages/sobre_nos.html`)  
Acessada pela âncora "About Us" na página home. Apresenta a equipe de desenvolvimento com cartões individuais contendo foto, função no projeto e breve descrição de cada membro.

**🔹 Página de Sugestões** (`pages/sugestao.html`)  
Formulário dedicado para o usuário enviar sugestões de cidades ou pontos turísticos ao time.

**🔹 Landing Page** (`pages/consultoria.html`)  
Página  em que o usuário é apresentado ao marketing da consultoria. Apresenta uma visão geral do Circuito-Mineiro e convida o usuário a comprar uma consultoria especializada para planejar sua viagem.

---

## 7. Cidades e Pontos Turísticos

| Cidade | Pontos Turísticos |
|---|---|
| 📍 Belo Horizonte | Lagoa da Pampulha · Praça da Liberdade · Palácio das Artes |
| 📍 Ouro Preto | Museu da Inconfidência · Igreja de São Francisco de Assis · Mina do Chico Rei |
| 📍 Uberlândia | Parque do Sabiá · Parque Municipal Victório Siquierolli · Museu Municipal de Uberlândia |
| 📍 Nova Lima | Lagoa dos Ingleses · Serra da Calçada · Mina da Passagem |
| 📍 Governador Valadares | Pico da Ibituruna · Parque Natural Municipal de Governador Valadares · Ilha dos Araújos |
| 📍 Diamantina | Casa de Juscelino · Catedral Metropolitana de Santo Antônio · Vila do Biribiri |

---

## 8. Como Acessar o Projeto

O site já está publicado e pode ser acessado diretamente em:  
🌐 [melodious-kringle-a5b6b6.netlify.app](https://melodious-kringle-a5b6b6.netlify.app/)

O projeto está documentado no GitHub e pode ser acessado diretamente em:  
🌐 [https://github.com/LuccaMC/Circuito-Mineiro](https://github.com/LuccaMC/Circuito-Mineiro)

---

## 9. Equipe

Projeto desenvolvido por estudantes do 1º período de Ciência da Computação da FUMEC — Fundação Mineira de Educação e Cultura, Belo Horizonte, MG.

| Integrante | Função | Descrição |
|---|---|---|
| 👤 Lucca Mattos | Tech Lead | Responsável por coordenar a equipe, organizar o desenvolvimento do projeto e garantir que todas as partes trabalhem em conjunto para que o resultado final funcione de forma integrada e eficiente. |
| 👤 Maurício Lima | Front-end  | Principal responsável pela estruturação das páginas com HTML e pela estilização com CSS, transformando ideias em interfaces claras, organizadas e funcionais. |
| 👤 Daniel Silva | Front-end | Responsável pela construção da base do código e pela implementação da responsividade, criando uma estrutura sólida que facilita a manutenção, expansão e integração dos recursos do projeto. |
| 👤 Júlio Cesar | Copywriter & Designer | Responsável pela criação dos textos, identidade visual e materiais gráficos do projeto, desenvolvendo conteúdos e imagens que fortalecem a comunicação com o público. |

---

*FUMEC · Ciência da Computação · 1º Período · 2025*
