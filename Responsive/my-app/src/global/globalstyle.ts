import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
   *  { 
        padding: 0px; 
        margin: 0px; 
        font-family: 'Roboto', sans-serif;
     
   }

   body { 
        box-sizing: border-box ;
        font-family: 'Roboto', sans-serif;
     

   } 

   :root { 
        --roxo: #b104d4 ;
        --branco: #f0f0f0;
        --preto: #0E0E10 ; 
        --vermelho: #e81313; 
   }

`