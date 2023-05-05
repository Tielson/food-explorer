import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;


  
  .section{
    padding: 2.4rem 12rem 0rem;
    display: grid;
    grid-template-rows:50px 1fr ;
    grid-template-columns: auto 1fr;
  
    gap: 4.7rem;
    flex-wrap: nowrap;
    margin: auto;

    animation-name: pageH;
    animation-duration: 2s;

    
.imgButton{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 4.2rem;
    grid-row: 1 / 2;

    button{
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.Light_Light_100};
    font-size: 2.4rem;
    align-items: center;
    display: flex;
    gap: 1rem;

        svg{
            width: 2.4rem;
            height: 2.4rem;
        }
    }
}
.text {
    margin-bottom: 6rem;
}

.im{
    grid-row: 2 / 2;
    width: 390px;
}
}

.text{
    grid-row: 2 / 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    font-family: 'Poppins';
    font-style: normal;
    color: ${({ theme }) => theme.COLORS.Light_Light_300};

    h1{
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;
    padding-bottom: 2.4rem;
    }
    p{
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    padding-bottom: 2.4rem;
    }
.quantity{
display: flex;
padding-top: 4.8rem;
gap: 3.8rem;
font-size:2.4rem;
align-items: center;
    .quantityB{
        border: none;
        background: none;
        color: #ffff;
          
    }
}
}

@media (max-width: 1030px) {
    .section .im{
        width: 270px;
    }
}

@media (max-width: 890px) {
    .section{
        display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 0.7rem;
    margin: auto;
    flex-direction: column;
        padding: 2.4rem 2rem 0rem;

        .imgButton{
            width: 100%;
            gap: 1.2rem;

            img{
                margin: auto;
            }
        }

        .text{
            display: flex;
    flex-flow: column wrap;
    align-items: center;
    font-family: Poppins;
    font-style: normal;
    color: rgb(196, 196, 204);
    flex-direction: column;
    align-content: center;


    h1{
        padding: 0;
    }
    p{
        text-align: center;
        font-size: 15px;
    }
        }
    }
    
}
@media (max-width: 600px) {

.section .im {
width: 264px;
}
.text .quantity{
gap: 1.8rem ;
font-size: 1.8rem;
}

.section .text {
   h1{ font-size: 27.0412px;
    padding: 11px 0;}
    p{
        font-size: 16.2247px;
    }
}

.section .imgButton button svg {
    width: 1.5rem;
    height: 2.4rem;
}
.section .imgButton button {
    font-size: 2rem;
}
}
@keyframes pageH {
  0%{
      opacity: 0;
      transform: translateX(40px);
    }
   100%{
      opacity: 1;
      transform: translateX(0px);
    }
}
  `