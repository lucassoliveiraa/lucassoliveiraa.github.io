# Portfólio Lucas Silva de Oliveira

Portfólio criado para a disciplina de Desenvolvimento Web do curso de Sistemas de Informação do Instituto Federal de Educação, Ciência e Tecnologia Baiano.


### Estrutura da Página

Inicialmente, foi desenvolvido um protótipo que está disponível abaixo:

![prototipo](assets/photos/prototipo_figma.png)

A página é divido em dois espaços, sendo mais a esquerda um menu tendo os links para as seções da mesma e o contéudo e seções da pagina no restante do espaço. Em sua construção foi utilizado o conceito de mobile first, ou seja, primeiro pensamos no mobile e depois vamos ajustando a proporções para tablet e computadores/televisões, garantindo assim a responsividade do mesmo.

Primeiramente definimos as propriedades globais e variáveis que estão na raiz do nosso projeto.

Código Primário:

```css
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

* {
    font-family: "Josefin Sans", sans-serif;
    box-sizing: border-box;
}

:root {
    --cor-background: #FFFFFF;
    --cor-primaria: #67BB67;
    --cor-destaque: #3A606E;
    --cor-destaque1: #5E4C5A;
    --fonte-tamanho-h1: 2.4em;
    --fonte-tamanho-h2: 2em;
    --fonte-tamanho-h3: 1.6em;
    --fonte-tamanho-h4: 1.3em;
    --fonte-tamanho-p: 1em;
    --fonte-tamanho-pg: 1.1em;
    --fonte-tamanho-g: 1.2em;
}

body, html {
    margin: 0;
    padding: 0;
    width: 100dvw;
    height: 100dvh;
    background-color: var(--cor-background);
    color: black;
}
h1 {
    color: var(--cor-destaque);
    font-size: var(--fonte-tamanho-h1);
}
h2 {
    font-size: var(--fonte-tamanho-h2);
    color: var(--cor-primaria);
}

h3 {
    font-size: var(--fonte-tamanho-h3);
    color: var(--cor-primaria);
}

h4 {
    font-size: var(--fonte-tamanho-h4);
    color: var(--cor-destaque);
}

p {
    font-size: var(--fonte-tamanho-p);
    text-align: justify;
}

span {
    font-weight: 300;
}
/*Header*/ 
header {
    background-color: var(--cor-primaria);
}

```


Depois definimos o container que abrigara o menu de navegação e o contéudo da página. Sendo que como utilizamos a abordagem mobile first, quando a dimensão for proporiconal a de um smartphone não haverá menu.

Código:

```css

.container {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.menu {
    display: none;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-left: 10%;
    box-sizing: border-box;
    align-items: center;
    margin-right: 10%;
    padding: 1rem;
    
}
```

Com menu ficará assim:

```css
.menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: var(--cor-primaria);
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: space-evenly;
    box-sizing: border-box;
    padding: 2rem 0;
}
    
.sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    position: relative;
    height: 100%;
}

```
A página é divida com as seguintes seções 


`home`

`sobre`

`experiencia`

`formacao`

`contato`

`footer`




