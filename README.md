<div align="center">
  <img src="https://user-images.githubusercontent.com/7221671/228865434-48fb40fe-58f8-49b1-8a7b-0627b1846165.png" width="150" />
</div>

<h2 align="center"> Chat responsivo - Desafio 4 - #bora codar Rocketseat</h2>

<div align="center"> 
  <img src="https://user-images.githubusercontent.com/7221671/231334344-d0a9034e-0ad3-4159-af60-27b92846685c.png" width="1920" />
</div>

<h1>Bora Codar - Chat Responsivo</h1>

<p align="center">Desenvolvi essa aplicação utilizando como base o modelo sugerido no evento da Rockeseat #boraCodar. Foi utilizadas as tecnologias como NEXT, Tailwind.</p>

<h2>Referência</h2>

- [Template Bora Codar](https://www.figma.com/community/file/1200070743637495660/%23boraCodar---Desafio-4)
- [GitHub BoraCoadar](https://github.com/maykbrito/boracodar)

<h2>Licença</h2>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

<h2>Documentação de cores</h2>

| Cor      | Hexadecimal                                                      |
| -------- | ---------------------------------------------------------------- |
| Violet 900 | ![#1A1924](https://via.placeholder.com/10/1A1924?text=+) #1A1924 |
| Violet 800 | ![#282843](https://via.placeholder.com/10/282843?text=+) #282843 |
| Violet 500 | ![#633BBC](https://via.placeholder.com/10/633BBC?text=+) #633BBC |
| greem 500 | ![#07847E](https://via.placeholder.com/10/07847E?text=+) #07847E |
| greem 300 | ![#00B37E](https://via.placeholder.com/10/00B37E?text=+) #00B37E |


<h2>Instalação</h2>

Instale Card Produto com npm

_Para instalar as dependencias_

```bash
  npm intall
```

_Para rodar o projeto_

```bash
  npm run dev
```

<h2>Tecnologias utilizadas</h2>

_Instalação do Tailwind para Next_

```bash
  npm install -D tailwindcss postcss autoprefixer
```

```bash
  npx tailwindcss init -p
```

_Adicionar ao arquivo tailwind.config.js_

```bash

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      violet: {
        900: '#1A1924',
        800: '#282843',
        500: '#633BBC'
      },

      gray: {
        100: '#e1e1e6'
      },

      white: '#ffffff',

      greem: {
        500: '#07847E',
        300: '#00B37E'
      },

      transparent: 'transparent'
    },

    extend: {}
  },
  plugins: []
}



```

_Adicione ao seu CSS global_

```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
