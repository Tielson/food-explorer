import styled from "styled-components";

export const Container = styled.div`
display: flex;
gap: 1.2rem;
flex-wrap: wrap;
div{display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 8px;
gap: 8px;
border-radius: 5px;

background-color: ${({ theme }) => theme.COLORS.Dark_Dark_1000};


font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
color:  ${({ theme }) => theme.COLORS.Light_Light_100};

}

@media (max-width:600px) {
    font-size: 14px;
}


`