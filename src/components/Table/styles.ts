import styled from "styled-components";

export const Container = styled.div<{ cor?: any }>`
border-spacing: 0;
width: 100%;
border: 1px solid #192227;
color: ${({ theme }) => theme.COLORS.Light_Light_300};

border-radius: 15px 15px 0 0;
table{
width: 100%;
border-spacing: 0px;
thead{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 160%;


tr td:first-child {
    border-radius:  1rem 0 0  0;
}

tr td:last-child {
    border-radius: 0 1rem 0  0;
}

}
tbody{
color: ${({ theme }) => theme.COLORS.Light_Light_400};
text-transform: capitalize;
tr td:last-child {
    text-transform: initial;
}}}

.mobile{
  display: none;
}
.codeDateM{
  position: relative;
}
.codeDateM::after {
    content: " ";
    background: ${({ cor }) => cor === 'Entregue' ? 'green' : cor === 'Preparando' ? 'yellow' : cor === 'Pendente' ? 'red' : 'gray'};
    width: ${({ cor }) => cor ? '1rem' : 0};
    height: 1rem;
    display: flex;
    border-radius: 50%;

  display: block;
  position: absolute;
  top: 3px;
    left: 52px;
}

@media (max-width: 850px) {
  font-family: 'Poppins';
font-style: normal;


  table{tbody{
display: none;
}thead{
display: none;
}}

  gap: 2rem;
    display: flex;
    flex-direction: column;
    border: none;
    width: auto;


  .mobile{
    display: flex;
flex-direction: column;
border: 1px solid #192227;
border-radius: 8px;
padding: 24px;
gap: 1rem;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
  }
}


`;

export const Arrow = styled.tr<{ cor?: any }>`
     td:first-child {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: relative;
}
 td:first-child::after {
    content: " ";
    background: ${({ cor }) => cor === 'Entregue' ? 'green' : cor === 'Preparando' ? 'yellow' : cor === 'Pendente' ? 'red' : 'gray'};
    width: ${({ cor }) => cor ? '1rem' : 0};
    height: 1rem;
    display: flex;
    border-radius: 50%;

  display: block;
  position: absolute;
  top: 12px;
    left: 9px;
  opacity: 0.5;
}
    `;

export const Column = styled.td`
padding: 8px 24px;
border: 1px solid #192227;
text-align: left;
margin: 8px;



`;

