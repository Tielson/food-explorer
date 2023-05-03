import styled from "styled-components";

export const Container = styled.div`
width: 100%;
color: ${({ theme }) => theme.COLORS.Light_Light_300};

.table{
    padding: 5rem 5rem;
    h1{
        margin-bottom: 5rem;
        font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 32px;
    }
}
.table{
display: flex;
flex-direction: column;
align-items: center;
}
`;


