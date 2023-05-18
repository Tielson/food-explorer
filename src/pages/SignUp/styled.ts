import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;

grid-column: 'a','b';

.filled {
    border: 2px solid #23ec3d87 !important;
  }

.left{
grid-column: 'a';
padding: 0 5rem;
display: flex;
align-items: center;
gap: 4rem;
justify-content: center;
}

.box{
height: 100%;
display: flex;
align-items: center;
justify-content: center;
grid-column: 'b';

    .form{
border-radius: 16px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 6.4rem 0;
gap: 3.2rem;
width: 47.6rem;
background-color: ${({ theme }) => theme.COLORS.Dark_Dark_700};

>h1{
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 3.2rem;
line-height: 140%;
color:${({ theme }) => theme.COLORS.Light_Light_100} ;
}

form{
display: flex;
flex-direction: column;

    h2{
padding-bottom: 0.8rem;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 1.6rem;
color: ${({theme})=> theme.COLORS.Light_Light_400};}

    input{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1.2rem 1.4rem;
gap: 1.4rem;

width: 34.8rem;
height: 4.8rem;

border-radius: .5rem;
border: .1rem solid #FFFFFF;
background-color: transparent;
margin-bottom: 3.2rem;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 1.6rem;
color:${({ theme }) => theme.COLORS.Light_Light_100} ;
}}}}

.toCreate{
    button{
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    background-color: transparent;
    border: none;
    color:${({ theme }) => theme.COLORS.Light_Light_100} ;
    }
}

background-color: ${({ theme }) => theme.COLORS.Dark_Dark_400};
@media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    padding-top: 8rem;

    .LfmoH .left {
    padding: 112px 0 0rem;
    display: flex;
}

    .box .form{
        background: none;
    padding: 2.4rem 0px;
}}

@media (max-width: 940px){
    .left {
        gap: 1rem;
    }  
    .box .form form input{
        width: 29.8rem;
}}
`;