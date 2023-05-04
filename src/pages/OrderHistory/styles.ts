import styled from "styled-components";

export const Container = styled.div`
width: 100%;
color: ${({ theme }) => theme.COLORS.Light_Light_300};

.table{
    padding: 5rem 5rem;
    h1{
        margin-bottom: 5rem;
    }

    animation-name: downUp;
    animation-duration: 2s;
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

table{
    padding: 0 5rem;
border-spacing: 0px;
thead{
display: block;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
td:first-child {
    border-radius:  1rem 0 0  0;
}

 td:last-child {
    border-radius: 0 1rem 0  0;
}
}

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
}
}

@media (max-width:950px) {
.table{
  margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
  table{
    thead{
      display: none;

    }

    tbody{
  gap: 2rem;
  width: 100%;
    display: flex;
    flex-direction: column;
}
  }

}
@media (max-width: 500px) {
    .table {
    padding: 5rem 0;
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

`;


