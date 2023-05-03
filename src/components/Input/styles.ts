import styled from "styled-components";
import { Input } from './index';

export const Container = styled.div`
width:100%;
height: 4.8rem;
border-radius: 5px;
background-color: ${({theme})=> theme.COLORS.Dark_Dark_900};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 14px;



svg{
    height: 2rem;
    width: 2rem;
    color: ${({theme})=> theme.COLORS.Light_Light_400};
}

Input{
    width: 90%;
    background-color: transparent;
    border: none;
    color: ${({theme})=> theme.COLORS.Light_Light_100};
    margin-left: 2rem;
}
;` 