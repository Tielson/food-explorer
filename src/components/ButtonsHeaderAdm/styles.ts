import styled from "styled-components";
type IsAdmProps = {
    isAdmin: boolean;
}

export const Container = styled.button<IsAdmProps>`
height: 5rem;
width: 15rem;;
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
    background:  ${({ theme }) => theme.COLORS.Tints_Tomato_100};
}

@media (max-width: 940px) {
    justify-content: unset;
    .bu{
        background: none;
    }
}
`;