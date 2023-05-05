import styled from "styled-components";
interface DtProps {
  dt: boolean
}

export const Container = styled.div<DtProps>`
width: 100%;
height: 10.4rem;
padding: 0 3rem;
  

display: flex;
flex-direction: row;
align-items: center;
gap: 32px;

justify-content: ${({ dt }) => dt === true ? "space-between" : " space-between;"};

background-color: ${({ theme }) => theme.COLORS.Dark_Dark_600};

button{
    background-color: transparent;
    border: none;
}

.menu{
  display: none;
}
.inp{
  display: ${({ dt }) => dt === true ? "none" : "flex"};
  width: 100%;
}

.signOut{
    background-color: transparent;
    border: none;
}
.NS{
  display: flex;
    gap: 3rem;
}
.p{
  display: none;
}










.hide{
  display: none;
}


@media (max-width: 1350px) {
padding: 0 3rem;
gap: 1rem;
}

@media (max-width: 940px) {
padding: 0 2rem;
gap: 1rem;
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

        button{
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 24px;
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
    
    height: 114px;
    padding: 28px 50px;
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
      padding-bottom: 6rem;
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