import styled from "styled-components";

export const Container = styled.button`
width: 100%;
height: 4.8rem;
background-color:  ${({theme})=> theme.COLORS.Tints_Tomato_100};

    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 1.4rem;
line-height: 2.4rem;
color: ${({theme})=> theme.COLORS.Light_Light_100};

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1.2rem 3.2rem;
gap: .8rem;
border-radius: .5rem;
border: none;

`;