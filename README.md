
# Front-end Challenge - Netimóveis



## Introdução



Desafio técnico da Netimovéis, onde precisei desenvolver um portal de anúncios de imóveis seguindo o layout passado no Figma



### Tecnologias utilizadas

-  **JavaScript**

-  **TypeScript**

-  **React**

-  **Next.js**

-  **Tailwind**



### Iniciando o projeto



1. Clone o repositório

2. No seu terminal, inicie o servidor de desenvolvimento utilizando um dos seguintes comandos

	* npm run dev

	* yarn run dev

3. Abra o localhost no seu navegador [http://localhost:3000](http://localhost:3000)




## Observações

Fiz o projeto utilizando o Next.js e Tailwind conforme fui instruído, a estrutura inicial do projeto foi feita com o create-next-app, coloquei a pasta de "assets" dentro pasta "src", e criei a pasta components/layout para separar as seções do projeto em componentes, para facilitar a organização.

Normalmente eu desenvolveria mobile-first (primeiro o mobile e depois o desktop), porém percebi que o Figma detalhava muito mais o layout do desktop, enquanto no mobile alguns elementos não foram especificados, isso acabou deixando o processo mais trabalhoso já que a responsividade no Tailwind é toda pensada para o mobile-first.

Tentei ao máximo deixar o layout responsivo usando apenas o Tailwind (mesmo a estrutura do layout mudando bastante em alguns casos), salvo algumas exceções em que não tive opção a não ser usar renderização condicional, o que não seria necessariamente um problema, mas eu queria manter, por exemplo, o que foi escrito nos inputs quando o tamanho da tela mudasse.

Minha intenção com o campo de busca era utilizar a API do Google Maps para fazer uma busca dinâmica dos endereços, porém para implementar isso eu precisaria de uma API Key e deixá-la no repositório não me pareceu uma boa ideia, cogitei subir esse projeto online e deixar a key em um .env, mas descartei a possibilidade. Decidi então criar um JSON com alguns endereços pré-definidos e fazer uma busca apenas neles, filtrando o JSON ao digitar no input e mapeando os resultados.

Para os slides usei o react-slick, porém a integração dele com o Tailwind é limitada, então tive de definir algumas regras no global.css. Pensei em deixar todos os links funcionais, direcionando, dentro do possível, para páginas equivalentes da [Netimóveis](https://www.netimoveis.com), mas acabei deixando a ideia de lado.

#



>This is a challenge by [Coodesh](https://www.coodesh.com/)