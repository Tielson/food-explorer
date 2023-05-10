import styled from "styled-components";

export const Container = styled.div`
width: 100%;
color: ${({ theme }) => theme.COLORS.Light_Light_300};

.table{
animation-name: downUp;
animation-duration: 2s;
padding: 5rem 5rem;

h1{
margin-bottom: 5rem;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 32px;
}}

.table{
display: flex;
flex-direction: column;
align-items: center;
}

@keyframes downUp {
0%{
transform: translateY(-50px);
opacity: 0;
}

100%{
transform: translateY(0px);
opacity: 1;
}
}
`;


