# MonChat

MonChat é um aplicativo de chat descentralizado e em tempo real, construído na blockchain Monad. Ele permite que os usuários conectem suas carteiras Web3, criem um perfil e se comuniquem com outros em uma sala de chat pública. Todas as mensagens são armazenadas on-chain, fornecendo uma plataforma de comunicação transparente e persistente.

## Funcionalidades

* **Mensagens em Tempo Real:** Envie e receba mensagens instantaneamente.
* **Suporte a Multimídia:** Compartilhe mensagens de texto, imagens (via IPFS/Pinata) e GIFs (via API da Tenor).
* **Integração Web3:** Conecte-se de forma segura com sua carteira favorita usando Wagmi e Reown AppKit.
* **Perfis de Usuário:** Registre um nome de usuário único e defina uma foto de perfil.
* **Interações com Mensagens:** Responda, edite e exclua suas mensagens.
* **Presença de Usuário:** Veja quem está online e quando estão digitando, com tecnologia do hook `react-together` da Multisynq.
* **Transferências de Tokens:** Envie tokens MON diretamente para outros usuários no chat.
* **Desafios de Jogos:** Desafie outros usuários online para uma partida de Jogo da Velha ou Tetris.
* **Moderação:** Funções de proprietário e moderador com a capacidade de banir/desbanir usuários e gerenciar listas de moderadores.
* **Dados On-Chain:** Todas as mensagens e perfis de usuário são armazenados publicamente na blockchain de Testnet da Monad.

## Tecnologias Utilizadas

* **Frontend:** React, Vite, Tailwind CSS
* **Interação com Blockchain:** Ethers.js, Wagmi, Viem
* **Conexão de Carteira:** Reown AppKit
* **Estado em Tempo Real:** React Together (usando Multisynq)
* **Armazenamento Descentralizado:** IPFS via Pinata para upload de imagens
* **APIs:** Tenor para GIFs, TimeZoneDB para sincronização de tempo de presença

## Primeiros Passos

Siga estas instruções para obter uma cópia do projeto e executá-la em sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

* Node.js (versão 18 ou superior recomendada)
* Gerenciador de pacotes pnpm

### Instalação

1.  **Clone o repositório:**
    ```sh
    git clone https://github.com/0xGusta/mcen.git
    cd mcen
    ```

2.  **Instale as dependências:**
    ```sh
    pnpm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto copiando o arquivo de exemplo:
    ```sh
    cp .env.example .env
    ```
    Você precisará adicionar suas próprias chaves de API e IDs de projeto ao arquivo `.env`. Consulte a seção [Variáveis de Ambiente](#variáveis-de-ambiente) abaixo para mais detalhes.

4.  **Execute o servidor de desenvolvimento:**
    ```sh
    pnpm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173` (ou outra porta, se a 5173 estiver em uso).

## Variáveis de Ambiente

Para executar este projeto, você precisará adicionar as seguintes variáveis de ambiente ao seu arquivo `.env`. Elas são obtidas de vários serviços necessários para a funcionalidade do aplicativo:

* `VITE_MULTISYNQ_APP_ID`: Seu ID de aplicativo do [Multisynq](https://multisynq.io/) para funcionalidades de presença em tempo real e jogos.
* `VITE_PROJECT_ID`: Seu ID de projeto do [Reown AppKit](https://dashboard.reown.com/) para conectividade de carteira.
* `VITE_PINATA_API_KEY`: Sua chave de API do [Pinata](https://app.pinata.cloud/) para fixar imagens no IPFS.
* `VITE_PINATA_SECRET_KEY`: Sua chave de API secreta do Pinata.
* `VITE_TENOR_API_KEY`: Sua chave de API do [Google Tenor](https://developers.google.com/tenor/guides/quickstart) para integração de GIFs.
* `VITE_TIMEZONEDB_API_KEY`: Sua chave de API do [TimeZoneDB](https://timezonedb.com/api) para timestamps precisos de presença do usuário.

## Sobre o Projeto

Este é um projeto de código aberto desenvolvido por [0xGus](https://x.com/0xGustavo). É um projeto independente e não é oficialmente afiliado à equipe da Monad.

* O contrato inteligente está implantado na Testnet da Monad e pode ser visualizado no [MonVision](https://testnet.monadexplorer.com/address/0xbDeCc6C346D2Cd77BCeB4f404ABF7C3e76D8C24f?tab=Contract)
      
Esteja ciente de que todas as mensagens são públicas e gravadas permanentemente na blockchain. Não compartilhe informações sensíveis.
