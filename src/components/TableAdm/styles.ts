import styled from "styled-components";

export const Container = styled.div<{ cor?: any }>`
.hide{
  display: none;
}

.sM{
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;

  background-color: ${({ cor }) => cor === 'Entregue' ? 'green' : cor === 'Preparando' ? 'yellow' : cor === 'Pendente' ? 'red' : 'gray'};
}

@media (max-width:950px) {
.mobile{
display: flex;
flex-direction: column;
border: 1px solid #192227;
border-radius: 8px;
padding: 24px;
align-items: center;
gap: 1rem;



input{
  width: 100%;
    height: 32px;
    background: rgb(13, 29, 37);
    border: none;
    color: white;
    padding-left: 1rem;
    border-radius: 0.8rem;
}

div{
width: 100%;
}
.statusM{
  display: flex;
  align-items: center;
}

}

}


`;

export const Arrow = styled.tr<{ cor?: any }>`
width: 100%;
height: 60px;
vertical-align: middle;


td{

input{
  width: 150px;
    height: 32px;
    background: rgb(13, 29, 37);
    border: none;
    color: white;
    padding-left: 1rem;
}

}
.status{
  width: 250px;
}

.code{
  width: 150px;
}
.detailing{
  width: 600px;
}
.updated_at{
  width: 145px;
}
.s{
  display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background: ${({ cor }) => cor === 'Entregue' ? 'green' : cor === 'Preparando' ? 'yellow' : cor === 'Pendente' ? 'red' : 'gray'};
}


@media (max-width:1360px) {
  .detailing{
  width: 400px;
}
.code{
  width: 100px;
}
.status{
  width: 200px;
  input{
    width: 120px;
  }
}
}
@media (max-width:1070px) {
  .detailing{
  width: 300px;
}}

@media (max-width:950px) {
display: none;
}
    `;

export const Column = styled.td`
padding: 8px 24px;
border: 1px solid #192227;
text-align: left;
margin: 8px;





`;

