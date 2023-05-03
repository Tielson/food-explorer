import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 10.4rem;
padding: 0 4rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
gap: 5rem;


background-color: ${({ theme }) => theme.COLORS.Dark_Dark_600};


.p{
  display: none;
}

.hide{
  display: none;
}
.menu{
  display: none;
}
.iw{
  width:100%;
}
button{
    background-color: transparent;
    border: none;
}
.favori{
      white-space: pre;
  button{
    border: none;
    background: none;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 1.6rem;
line-height: 100%;
color:  ${({ theme }) => theme.COLORS.Light_Light_300};
  }
}


@media (max-width: 1350px) {
padding: 0 2rem;
gap: 2rem;
}

@media (max-width: 970px) {
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;


.p{
  display: flex;
}

    .menu{
      display: flex;
      button{

      display: flex;
      font-size: 2.4rem;
      color:  ${({ theme }) => theme.COLORS.Light_Light_100};


      }
      }
      div:nth-child(n+5) {
      display: none;
      }

      .signOut{
      display: none;
      }
      .minw{

        .favori{
          width: 100%;
        }
        .favori::after{
          content: "";
          border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.Dark_Dark_1000};
          flex-direction: column;
          align-items: flex-start;
          display: flex;
          margin-top: 1rem;
    }
    .p{
      width: 100%;
      white-space: pre;
    }
    .p::after{
      content: "";
          border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.Dark_Dark_1000};
          flex-direction: column;
          align-items: flex-start;
          display: flex;
          margin-top: 1rem;
    }

        button{
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 2.4rem;
line-height: 140%;
color: #E1E1E6;
        }
        position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background:${({ theme }) => theme.COLORS.Dark_Dark_400};
    z-index: 1000;
    
    .m{
      background:  ${({ theme }) => theme.COLORS.Dark_Dark_700};
    
    height: 11.4rem;
    padding: 2.8rem 5.0rem;
    display: flex;
    flex-direction: row;
    button{
      display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    }
    }
    
    .s{
      padding: 13px 13px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;



    }
    .i{
      padding-bottom: 1rem;
      width: 100%;
    }
    .b::after{
      content: "";
          border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.Dark_Dark_1000};
          flex-direction: column;
          align-items: flex-start;
          display: flex;
          width: 100%;
          margin-top: 1rem;
    }
    .b{
          display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    }
  }

      }
  `