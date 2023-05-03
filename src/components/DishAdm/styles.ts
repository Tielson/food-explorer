import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
isolation: isolate;
gap: 2rem;
z-index: 1000;
padding: 0 2.4rem;



background: ${({ theme }) => theme.COLORS.Dark_Dark_200};

border: .1rem solid ${({ theme }) => theme.COLORS.Dark_Dark_300};
border-radius: .8rem;

button{
    background: none;
    border: none;
    transition: filter 0.1s;
}

button:hover{
    opacity: 0.8;
    filter: none;
}

img{
    width: 16rem;
    padding-top: 4rem;
}


.heart{
    font-size: 2.6rem;
    color:  ${({ theme }) => theme.COLORS.Light_Light_300};
    right: 2.5rem;
    top: 2.3rem;
   position: absolute;
}

h2{
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 2.4rem;
line-height: 140%;
padding: 1.5rem 0;
width: 25.6rem;


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

height: 4.4rem;
width: 25rem;
overflow-y: hidden;

text-align: center;
padding-bottom: 1.5rem;

color: ${({ theme }) => theme.COLORS.Light_Light_400} ;
}

h4{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 3.2rem;
line-height: 160%;
padding-bottom: 5rem;

text-align: center;
color:  ${({ theme }) => theme.COLORS.Tints_Cake_200};
}

@media (max-width:700px) {

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
    .buttons{
      font-size: 1.8rem;
      padding-bottom: 1.4rem;
      svg{
        height: 0.8em;
      width: 0.7em;
      }
    }

` ;