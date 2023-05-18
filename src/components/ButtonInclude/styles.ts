import styled from "styled-components";
type TitleProps = {
    title?: string;
}
export const Container = styled.button<TitleProps>`
width: 100%;
white-space: pre;


font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 1.4rem;
line-height: 2.4rem;
color: ${({ theme }) => theme.COLORS.Light_Light_100};

background:  ${({ theme, title }) => title === 'Incluir' ? theme.COLORS.Tints_Tomato_100 : 'green'};

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1.2rem 3.2rem;
gap: .8rem;
border-radius: .5rem;
border: none;


.bu{
    display: flex;
    width: 100%;
    gap: 0.8rem;
    align-items: center;
}

@media (max-width:600px) {
    padding: 1.2rem 1.2rem;

}
@media (max-width:400px) {
    font-size: 1.2rem;
}
`;