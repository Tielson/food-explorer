import styled from "styled-components";
interface bottomProps {
    pgD: boolean
}

export const Container = styled.div<bottomProps>`
footer{
    z-index: 100;
    width: 100%;
    background-color:${({ theme }) => theme.COLORS.Dark_Dark_600} ;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: .5rem 0 rem;
    color: ${({ theme }) => theme.COLORS.Light_Light_200};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    position: fixed;
    bottom: 0; 


    @media (max-width:500px) {
        img{
            width: 13rem;
        }
        p{
            font-size: 1rem;
        }
    }
}
`