import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root{
    font-size: 62.5%;
}

body{
    -webkit-font-smoothing: antialiased; 
    font-size: 1.6rem;
    outline: none;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: rgba(0, 10, 15, 1);
}

a{
    text-decoration: none;
}

    ul {
        list-style: none;
    }

    button, a {
         cursor: pointer;
         transition: filter 0.2s;
    }
    
    
    button:hover, a:hover {
     filter: brightness(0.9);
    }

    body, input, button, textarea{
     font-size: 1.6rem;
     outline: none;
    }


    .section{
     max-width: 150rem;
     padding-top: 3.2rem;
     flex-wrap: wrap;
    }
    
    .pad-15{
        padding: 1.5rem;
    }
    

    .row{
     display: flex;
     flex-wrap: wrap;
     position: relative;
    }
`