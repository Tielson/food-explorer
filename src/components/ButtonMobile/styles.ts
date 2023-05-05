import styled from "styled-components";
type IsAdmProps = {
    isAdmin: boolean;
}

export const Container = styled.button<IsAdmProps>`
height: 5rem;
width: 5rem;
background:  ${({ theme }) => theme.COLORS.Tints_Tomato_100};

    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 1.4rem;
line-height: 2.4rem;
color: ${({ theme }) => theme.COLORS.Light_Light_100};

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
/* padding:  ${({ isAdmin }) => isAdmin ? "1.2rem 3.2rem" : "1.2rem 6rem"} ; */
gap: .8rem;
border-radius: .5rem;
border: none;

.bu{
    height: 5rem;
    width: 19rem;
    border-radius: 0.5rem;
    display: flex;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;
    position: relative;
    
    p{
        position: absolute;
        background:  ${({ theme }) => theme.COLORS.Tints_Tomato_100};
        right: 0.3rem;
    top: 0.3rem;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;


flex-direction: row;
gap: 8px;

width: 20px;
height: 20px;
    }
}

@media (max-width: 940px) {
    justify-content: unset;
    .bu{
        background: none;
    }
}
`;