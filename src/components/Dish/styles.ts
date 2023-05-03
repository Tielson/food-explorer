import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0 2.4rem;

background: ${({ theme }) => theme.COLORS.Dark_Dark_200};

border: .1rem solid ${({ theme }) => theme.COLORS.Dark_Dark_300};
border-radius: .8rem;

.nav{
  border: none;
    background: none;
}

img{
    width: 16rem;
    padding-top: 4rem;
}

.favorite-button {
  right: 20px;
    top: 20px;
    position: absolute;
}

.favorite-button input[type='checkbox'] {
  display: none;
}

.favorite-button .heart {
  font-size: 20px;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  transition: color 0.2s ease-in-out;
}

.favorite-button.label-favorite .heart {
  color: red;
}

h2{
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 2.4rem;
line-height: 140%;
padding: 1.5rem 0;

text-align: center;

color:  ${({ theme }) => theme.COLORS.Light_Light_300};

        svg{
            font-size: 2.4rem;
        }
}

h3{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 1.4rem;
line-height: 160%;
padding-bottom: 1.5rem;

width: 25rem;
height: 4.4rem;
overflow-y: hidden;

text-align: center;

color: ${({ theme }) => theme.COLORS.Light_Light_400} ;
}

h4{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 3.2rem;
line-height: 160%;
padding: 1.5rem 0 ;

text-align: center;
color:  ${({ theme }) => theme.COLORS.Tints_Cake_200};
}

.buttons{
    display: flex;
    gap: 1.6rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 2.0rem;
    padding-bottom: 2.4rem;
    .quantity{
        display: flex;
        flex-direction: row;
        gap: 1.4rem;
        color: ${({ theme }) => theme.COLORS.Light_Light_100};
        
        button{
            background: transparent;
            border: none;
            color: ${({ theme }) => theme.COLORS.Light_Light_100};
            font-size: 2rem;
        }
    }
    .incluir{
        display: flex;
        align-items: center;
    }
}

@media (max-width:700px) {
  .nav{
    img{
      width: 12rem;
      padding-top: 3rem;
    }
    h2{
      font-size: 1.6rem;
    }
    h3{
      display: none;
    }
    h4{
      font-size: 2rem;
      padding:0  0px 1.5rem;
    }}
    .quantity{
      justify-content: center;
    }
    .buttons{
      flex-direction: column;
      width: 100%;
      padding-bottom: 1.4rem;
    }
}
` ;