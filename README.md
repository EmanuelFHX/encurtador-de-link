<div align="center">

# 🔗 Linko

### Encurtador de links simples, rápido e moderno

Transforme URLs longas em links curtos, copie com um clique e mantenha um histórico das suas últimas URLs diretamente no navegador.

<br>

[![Demo](https://img.shields.io/badge/🌐_Acessar_Demo-Linko-22C55E?style=for-the-badge)](https://encurtador-de-link-virid.vercel.app/)

<br>

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?logo=vercel&logoColor=white)

</div>

---

## 📖 Sobre o projeto

O **Linko** é um encurtador de links desenvolvido para transformar URLs longas em endereços menores e mais fáceis de compartilhar.

A aplicação gera automaticamente um código para cada URL adicionada e permite utilizar esse código para realizar o redirecionamento para o endereço original.

Além do encurtamento, o Linko possui **histórico de links recentes, cópia para a área de transferência, visualização do último link gerado e alternância entre tema claro e escuro**.

O projeto utiliza armazenamento local no navegador, mantendo seu funcionamento simples e sem necessidade de banco de dados.

---

## 📸 Preview

![Linko](./screenshots/Captura%20de%20tela%202026-08-12%20191749.png)

---

## ✨ Funcionalidades

### 🔗 Encurtamento de URLs

Insira uma URL longa e o Linko gera automaticamente um código curto para representá-la.

```text id="gm3d2q"
https://exemplo.com/uma/url/muito/grande

↓ Linko

http://localhost:3000/a7Bx2
```

### 🎲 Geração automática de código

Cada URL recebe automaticamente um código utilizado para identificar o endereço original e realizar o redirecionamento.

### 📋 Copiar link

O link gerado pode ser enviado diretamente para a área de transferência com apenas um clique, facilitando seu compartilhamento.

### 🔄 Redirecionamento

Ao acessar um endereço curto gerado pelo Linko, o código presente na URL é utilizado para localizar o endereço correspondente e redirecionar o usuário para a página original.

### 🕘 Histórico

Os últimos links encurtados ficam disponíveis em um histórico local.

Isso permite consultar rapidamente URLs utilizadas anteriormente sem precisar encurtá-las novamente.

### 🗑️ Limpeza do histórico

O histórico pode ser apagado diretamente pela interface sempre que necessário.

### 🌓 Tema claro e escuro

A interface oferece suporte aos dois modos de visualização:

* ☀️ Tema claro
* 🌙 Tema escuro

---

## 💾 Persistência local

O Linko utiliza **LocalStorage** para armazenar os links diretamente no navegador.

O fluxo funciona de maneira simples:

```text id="mxyckf"
URL original
     │
     ▼
Gerar código
     │
     ▼
Salvar no LocalStorage
     │
     ├── Código
     └── URL original
     │
     ▼
Gerar link curto
     │
     ▼
Acesso ao código
     │
     ▼
Localizar URL original
     │
     ▼
Redirecionamento
```

Por utilizar armazenamento local, os links pertencem ao navegador em que foram criados e não funcionam como um serviço público de encurtamento compartilhado entre diferentes dispositivos.

---

## 🛠️ Tecnologias

**HTML5, CSS3, JavaScript Vanilla, LocalStorage, Node.js**

### Front-end

* HTML5
* CSS3
* JavaScript Vanilla

### Persistência

* LocalStorage

### Servidor local

* Node.js

---

## 📂 Estrutura do projeto

```text id="pbxk8r"
encurtador-de-link/
│
├── screenshots/
│   └── Captura de tela 2026-08-12 191749.png
│
├── index.html
├── styles.css
├── script.js
├── server.js
└── package.json
```

---

## 🚀 Como executar

### 1. Clone o repositório

```bash id="y9ypxr"
git clone https://github.com/EmanuelFHX/encurtador-de-link.git
```

### 2. Entre na pasta

```bash id="nfj2oq"
cd encurtador-de-link
```

### 3. Inicie o servidor

```bash id="7st8as"
npm start
```

### 4. Acesse a aplicação

Abra no navegador o endereço informado pelo servidor após a inicialização.

---

## 🧠 Como funciona

Quando uma URL é adicionada, o Linko gera um identificador curto e relaciona esse código ao endereço original.

```text id="7ahqgb"
Usuário
   │
   ▼
Insere uma URL
   │
   ▼
Linko
   │
   ├── Valida URL
   ├── Gera código
   ├── Salva endereço
   └── Gera link curto
          │
          ▼
      /codigo
          │
          ▼
   Busca URL original
          │
          ▼
     Redireciona
```

---

## 🎯 Objetivos técnicos

O Linko foi desenvolvido para praticar e consolidar conhecimentos em:

* JavaScript Vanilla
* Manipulação do DOM
* Manipulação de URLs
* Geração de identificadores
* LocalStorage
* Clipboard API
* Redirecionamento de páginas
* Manipulação de rotas
* Node.js
* Design responsivo
* Tema claro e escuro

---

## ⚠️ Escopo do projeto

O Linko foi desenvolvido como uma aplicação **sem banco de dados e sem backend persistente**.

Os links e o histórico são armazenados localmente no navegador através do `LocalStorage`.

Por isso, o projeto reproduz o funcionamento e a experiência de um encurtador de URLs, mas não pretende funcionar como um serviço distribuído como Bitly ou TinyURL.

---

## 🚀 Possíveis melhorias

* Backend persistente
* Banco de dados para armazenamento das URLs
* Links acessíveis entre diferentes dispositivos
* URLs personalizadas
* Expiração de links
* Contador de acessos
* Estatísticas de cliques
* QR Code para links encurtados
* Autenticação de usuários
* Dashboard de gerenciamento

---

## 📈 Status

O **Linko** está funcional dentro do escopo proposto, utilizando armazenamento local para gerenciamento e redirecionamento dos links.

---

## 👨‍💻 Autor

**Emanuel Penna**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Emanuel%20Penna-0A66C2?logo=linkedin\&logoColor=white)](https://www.linkedin.com/in/emanuel-penna)

[![GitHub](https://img.shields.io/badge/GitHub-EmanuelFHX-181717?logo=github\&logoColor=white)](https://github.com/EmanuelFHX)

[![Portfólio](https://img.shields.io/badge/Portfólio-Emanuel%20Penna-6C63FF?logo=vercel\&logoColor=white)](https://portfolio-emanuel-penna.vercel.app/)
