<h1>Mario Kart.JS</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <strong>Objetivo:</strong>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<strong>Pistas:</strong>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">Os personagens irão correr em uma pista aleatória de 5 rodadas</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item">Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<strong>Condição de vitória:</strong>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label>

---

## 🚀 Informações Técnicas do Projeto

### 📦 Dependências Utilizadas

#### Dependências de Produção
```json
{
  "readline-sync": "^1.4.10"
}
```

**readline-sync** - Biblioteca essencial para este projeto que permite:
- **Entrada de dados síncrona** no terminal durante a execução do jogo
- **Validação de entrada** do usuário (ex: apenas 'S' ou 'N', 'J' ou 'N')
- **Interface interativa** para o jogador responder às perguntas do jogo
- **Controle de fluxo** do programa baseado nas respostas do usuário
- **Compatibilidade cross-platform** (Windows, macOS, Linux)

#### Dependências de Desenvolvimento
```json
{
  "@types/node": "^24.2.0"
}
```

**@types/node** - Pacote de tipos TypeScript para Node.js que oferece:
- **Definições de tipos** para todas as APIs nativas do Node.js
- **IntelliSense e autocomplete** em editores que suportam TypeScript
- **Verificação de tipos** durante o desenvolvimento
- **Documentação inline** das APIs do Node.js
- **Suporte a ES6 Modules** e outras funcionalidades modernas

#### 🔧 Estrutura do Projeto
```
projeto-mario-kart/
├── src/
│   └── index.js          # Arquivo principal do jogo
├── docs/                 # Assets visuais (GIFs dos personagens)
├── package.json          # Configurações e dependências
└── README.md            # Documentação
```

##### 1. **Programação Orientada a Objetos (POO)**
- **Classe `Personagem`**: Modelo para representar os personagens do jogo
- **Encapsulamento**: Atributos e métodos organizados em classes
- **Instanciação**: Criação de objetos para cada personagem

##### 2. **Programação Funcional**
- **Funções Puras**: Funções que não dependem de estado externo
- **Funções Assíncronas**: Uso de `async/await` para operações assíncronas
- **Arrow Functions**: Sintaxe moderna do ES6

##### 3. **Padrão Factory**
- Criação de personagens através de construtor de classe
- Instanciação padronizada de objetos

##### 4. **Padrão Strategy**
- Diferentes estratégias para cada tipo de bloco da pista
- Lógica condicional baseada no tipo de desafio

##### 5. **Modularização**
- Separação de responsabilidades em funções específicas
- Código organizado e reutilizável

### 🚀 Como Executar

#### Pré-requisitos
- Node.js instalado (versão 14 ou superior)
- NPM ou Yarn

#### Instalação
```bash
# Clone o repositório
git clone https://github.com/joaogabrieldev/projeto-mario-kart.git

# Entre no diretório
cd projeto-mario-kart

# Instale as dependências
npm install
```

#### Execução
```bash
# Inicie o jogo
npm run dev
```

### 📁 Estrutura de Arquivos

- **`src/index.js`**: Lógica principal do jogo
- **`docs/`**: Imagens GIF dos personagens
- **`package.json`**: Configurações do projeto
- **`.gitignore`**: Arquivos ignorados pelo Git

### 🎯 Funcionalidades Implementadas

- ✅ Sistema de personagens com atributos
- ✅ Sorteio aleatório de jogadores
- ✅ Sistema de dados (1-6)
- ✅ Mecânicas de corrida (reta, curva, confronto)
- ✅ Sistema de pontuação
- ✅ Interface de terminal interativa
- ✅ Validação de entrada do usuário
- ✅ Prevenção de pontuação negativa
- ✅ Sistema de empate

### 🚧 Possíveis Melhorias Futuras

- [ ] Interface gráfica com HTML/CSS/JavaScript
- [ ] Sistema de ranking e histórico
- [ ] Mais personagens e pistas
- [ ] Sistema de power-ups
- [ ] Modo multiplayer online
- [ ] Testes automatizados
- [ ] Sistema de configurações

### 👨‍💻 Autor

**João Gabriel** - [GitHub](https://github.com/joaogabrieldev) | [Linkedin](https://www.linkedin.com/in/joaogabrielrocha)



