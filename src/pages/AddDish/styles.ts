import styled from "styled-components";
import { Input } from './../../components/Input/index';

export const Container = styled.div`
width: 100%;
height: 100vh;


.section{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 4rem 3rem ;
    margin: auto;

    animation-name: downUp;
    animation-duration: 2s;
}
.imgButton{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 4.2rem;
    padding-bottom: 2.4rem;

    button{
        border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.Light_Light_100};
    font-size: 2.4rem;
    align-items: center;
    display: flex;
    gap: 1rem;

        svg{
            width: 2.4rem;
            height: 2.4rem;
        }
    }
}

h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    color:  ${({ theme }) => theme.COLORS.Light_Light_100};
    padding-bottom: 3.2rem;
}

.data{

display: grid;
gap: 3.2rem;
width: 100%;
 grid-template-rows: 8rem 8rem 20.4rem;
 grid-row: 
'a'
'b'
'c'
;

.line1{
    display: grid;
    grid-template-columns: 20% 60% 15%;
    grid-area: 'a';

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.Light_Light_400};

    gap: 3.2rem;

    input{
            display: flex;
            height: 4.8rem;
            width: 100%;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            border-radius: .8rem;
            background-color: ${({ theme }) => theme.COLORS.Dark_Dark_800};
            cursor: pointer;
            border: none;
            padding: 1.6rem .5rem 1.6rem 1.6rem;
            color: ${({ theme }) => theme.COLORS.Light_Light_400};
    }

           

    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.Light_Light_400};
        padding-bottom: 1.6rem;
    }

    .IMG{
        label{
            display: flex;
            height: 4.8rem;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            border-radius: .8rem;
            background-color: ${({ theme }) => theme.COLORS.Dark_Dark_800};
            cursor: pointer;
            padding: .4rem 1.0rem;
            input{
            display: none;
            }
        }
    }
    .name{
     
    }
    .category{
    
    }
    }

    .line2{
        
    flex-direction: row;
    align-items: center;
    grid-area: 'b';

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.Light_Light_400};
    
    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.Light_Light_400};
        padding-bottom: 1.6rem;
    }
.ingre.pri{
    display: flex;
    gap: 3.2rem;
    display: grid;
    grid-template-columns: 77% 20%;
    
    .T{
        width: 100%;
    }
    .tags{
        overflow-y: auto;   
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .5rem .8rem;
    gap: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.Dark_Dark_800};
    border-radius: .8rem;
    }
}

.price{
    width: 100%;
input{
    background: none;
    width: 100%;
    gap: 0.8rem;
    cursor: pointer;
    border: none;        
    color: ${({ theme }) => theme.COLORS.Light_Light_400};
    padding: 1.6rem 1.4rem;
    display: flex;
    height: 4.8rem;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.Dark_Dark_800};
    border-radius: .8rem;
    }
    }
}

.line3{

    grid-row: 'c';
    width: 100%;
    
    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.Light_Light_400};
        padding-bottom: 1.6rem;
}
}
.buttonToSave{
    display: flex;
    justify-content: flex-end;
    button{
       
    padding: 1.2rem 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.Tints_Tomato_400};
    border: none;
    width: 17.2rem;
    height: 4.8rem;
    border-radius: .5rem;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.Light_Light_100};
    }
  
}
}


@media (max-width: 900px) {
    .data .line1{
        grid-template-columns: 25% 47% 15%;
    }

    .data .line2 .ingre.pri{
        grid-template-columns: 73% 18%;
    }

    .data .line3 {
    width: 97%;
}

@media (max-width:580px) {
    .data{
    display: flex;
    gap: 3.2rem;
    width: 100%;
    flex-direction: column;
    align-items: center;
    .line1{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.line2{
    width: 100%;
    .ingre.pri{
        width: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
}
.line3{
    display: flex;
    flex-direction: column;
    width: 100%;
}
}

}
}

@keyframes downUp {
    0%{
        transform: translateY(-50px);
        opacity: 0;
    }
    100%{
        transform: translateY(0px);
        opacity: 1;
    }
}

` 