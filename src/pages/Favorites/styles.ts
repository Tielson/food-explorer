import styled from "styled-components";

export const Container = styled.div`
    .box{
        color: ${({ theme }) => theme.COLORS.Light_Light_300};
        padding: 3.4rem 8.4rem;
        margin: auto;
        h1{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 32px;
            line-height: 140%;
            
        }
    }

.section{
    width: 100%;
    overflow: hidden;
    gap: 4.8rem;
    margin: auto;
    .ss{
        gap: 4.8rem;
    display: flex;
    margin-top: 4rem;
    flex-wrap: wrap;
    }
  
    button{
        background: none;
        border: none;
        width: 30rem;
    display: flex;
    }
    .dish-fav{
        display: flex;
        align-items: center;
        gap: 1.3rem;

        h1{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 160%;
            color: ${({ theme }) => theme.COLORS.Light_Light_300};
        }

        button{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 160%;
            border: none;
            background: none;
            color: ${({ theme }) => theme.COLORS.Tints_Tomato_400};
        }

        img{
            width: 7.2rem;
        }
        .rem{
            display: flex;
            align-items: flex-start;
            flex-direction: column;
        }
    }
}

@media (max-width: 700px) {
    .box {
    padding: 3.4rem 1rem;
    }
}

`