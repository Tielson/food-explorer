import styled from "styled-components";

type IsNewProps = {
    isNew: boolean;
}

export const Container = styled.div<IsNewProps>`
display: flex;
align-items: center;
border-radius: .8rem;

background-color: ${({ theme, isNew }) => isNew ? "transparente" : theme.COLORS.Light_Light_600};
color: ${({ theme }) => theme.COLORS.Light_Light_100};

border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.Light_Light_500}` : `1px dashed ${theme.COLORS.Light_Light_600}` };



.button-delete{
  color: ${({ theme }) => theme.COLORS.Light_Light_100}
}
.button-add{
  color: ${({ theme }) => theme.COLORS.Light_Light_100}
}

 >button {
  border: none;
  background: none;
  width: 1vmax;
  width: 30px;
    height: 30px;
    display: flex;
    align-items: center;

 }

 > input{
  height: 36px;
  width: 8vmax;
    padding: 12px 0 12px 8px;
  color: ${({ theme }) => theme.COLORS.Light_Light_200};
  background: transparent;

  border:none;

  &::placeholder{
    color:${({ theme }) => theme.COLORS.Light_Light_500}
    }; 
  }
`