import styled from "styled-components";

export const Container = styled.div`
height: 100%;
width: 100%;
background: ${({ theme }) => theme.COLORS.Dark_Dark_400};

animation-name: pageH;
animation-duration: 2s;

.gradient:hover{
transition: all 400ms;
transform: scale(1.01);
}

.section{
padding: 3rem 12rem;
margin: auto;
.gradient{
position: relative;
background: ${({ theme }) => theme.COLORS.Gradients_100};
height: 17.4rem;
margin-top: 8rem;
border-radius: 0.8rem;

display: flex;
flex-direction: row;
justify-content: flex-end;

.imgMaskGroup{
position: absolute;
left: -32px;
top: -58px;
z-index: 100;
img{width: 38rem;}
}
        
.textGradient{
gap: 1rem;
z-index: 100;
width: 100%;
display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;
flex: 0 0 50%;
color: ${({ theme }) => theme.COLORS.Light_Light_300};

>h1{
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 4.0rem;
line-height: 140%;
}

>h2{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 1.6rem;
line-height: 100%;
}}}}

.swiper {
width: 100%;
height: 100%;
}

.swiper-container{
margin: 4rem 0 5rem;

h1{
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 3.2rem;
line-height: 140%;  
color: ${({ theme }) => theme.COLORS.Light_Light_300};
margin:4.8rem 0 ;
}}




@media (max-width: 1047px) {
.section{
padding: 3rem 3rem;
.gradient{
.textGradient{
h1{
font-size: 2rem;
}}

h2{
font-size: 1rem;
}}}}

@media (max-width: 770px) {
.section{.gradient{
height: 10.4rem;

.imgMaskGroup{
left: -22px;
top: -30px;

img{  
width: 22rem;
}}

.textGradient{
h1{
font-size: 1.5rem;
}}

h2{
font-size: .5rem;
}}}}

@media (max-width:500px) {
.section .gradient{
margin-top: 3rem;
}

.textGradient{
text-align: center;
}}
 
@keyframes pageH {
0%{
opacity: 0;
transform: translateX(40px);
}

100%{
opacity: 1;
transform: translateX(0px);
}}
 `;