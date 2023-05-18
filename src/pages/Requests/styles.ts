import styled from "styled-components";

export const Container = styled.div`

.box{
padding: 3.4rem 12.3rem ;
display: flex;
animation-name: downUp;
animation-duration: 3s;
}

.filled {
    border: 2px solid #23ec3d87 !important;
  }
  
.hide{
display: none !important;
}

.av{display:none}
.dishs{
    gap: 2rem;
    display: flex;
    flex-direction: column;
}

.org{
    
    display: flex;
    gap: 1rem;
}
.section{
    h1{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.Light_Light_300};
    }
    display: flex;
    width: 100%;
    overflow: hidden;
    gap: 4.8rem;
    flex-direction: column;

    h2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.Light_Light_400};
        margin-bottom: .8rem;
    }
  
    button{
        background: none;
        border: none;
    }
    .dish-fav{
        display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

        h1{
            display: flex;
            gap: 1rem;
        align-items: center;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 160%;
            color: ${({ theme }) => theme.COLORS.Light_Light_300};
            span{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 160%;
            }
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
.div{
    display: flex;
    flex-direction: column;
    button{
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.COLORS.Light_Light_300};

        border-width: 1px 1px 0px 1px;
        border-style: solid;
        border-color: #76797B;

        display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    }
    .div2{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        div{
            width: 100%;
        }
        
    }

    .pix{
            height: 81px;
            border-radius: 8px 0px 0px 0px;
            background: ${({ theme }) => theme.COLORS.Dark_Dark_500};
            
    }
    .cred{
        height: 81px;
        border-radius: 0px 8px 0px 0px;
        background: ${({ theme }) => theme.COLORS.Dark_Dark_500};
        width: 100%;
    }

    .payment{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #76797B;
        border-radius: 0px 0px 8px 8px;
        padding: 5.7rem 13rem;
    }

    .payment.cred{
        flex-direction: column;
        align-items: flex-start;
        padding: 4.7rem 9rem;
        height: 100%;

        display: flex;
        gap: 3.7rem;

        

        button{
            background: rgb(117, 3, 16) !important;
            border: none;
        }
div{
    width: 100%;
    input{
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 12px 14px;
    gap: 14px;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    background: none;
    color: ${({ theme }) => theme.COLORS.Light_Light_100};
    width: 100%;
        }

}

.VS{
    display: flex;
    flex-direction: row;
    }
div{
gap:1.7rem;
}
}

    .hide{
        display: none;
    }

    .active{
        background: ${({ theme }) => theme.COLORS.Dark_Dark_800};
    }
}


@media (max-width:1300px) {

  
    .payment{

        padding: 5.7rem 5rem !important;
    }

}
@media (max-width: 970px) {
    .av{
    display: initial;;
        height: 5rem;
    width: 216px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    border-radius: 0.5rem;
    background:  ${({ theme }) => theme.COLORS.Tints_Tomato_100} !important;
    color: ${({ theme }) => theme.COLORS.Light_Light_100};


    }
    .payment{
        padding: 5.7rem 5rem !important;
    }

    .mobile{
       display: none;
    }

}
@media (max-width: 870px) {
    .rem{
        h1{    font-size: 15px !important;}
    }
}

@media (max-width: 870px) {
.box{
    padding: 3.4rem 5.3rem;
}
}
@media (max-width: 870px) {
.box{
    padding: 3.4rem 4rem;
}
}
@media (max-width: 400px) {
    .payment{
         img{
        width: 204px;
    } 
    padding: 2rem .5rem !important;
}}

@media (max-width: 600px){
    .rem h1 {
    font-size: 14px !important;
}
     .box {
    padding: 3.4rem 1rem;
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