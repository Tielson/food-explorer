import styled from "styled-components";

export const Container = styled.textarea`
width: 100%;
height: 17.2rem;

background-color: ${({ theme }) => theme.COLORS.Dark_Dark_800};
color: ${({ theme }) => theme.COLORS.Light_Light_100};
 
 border: none;
 resize: none;

 margin-bottom: 8px;
 border-radius: 8px;
 padding: 16px;
  
  &::placeholder{
    color: ${({ theme }) => theme.COLORS.Light_Light_400};
    
  }
`