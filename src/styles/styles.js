import styled from "styled-components";

export const ContainerHeader = styled.div`
    height: 80px;
    padding: 30px;
    background-color: #1EF098;
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Container = styled.div`
    height:100vh;
`;

export const ContainerForm = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height:87%;
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerColumn = styled.div`
    padding: ${props => props.userLogged ? "50px" : 0};
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
`;

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    width: 100%;
`;

export const ContainerRowCategory = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    padding-top: 50px;
    width: 100%;
`;




export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextInput = styled.p`
    font-weight: 600;
`;

export const DivLinkRegister = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Title = styled.p`
    font-weight: 600;
    color: #1EF098;
    font-size: 40px;
    padding-bottom: 35px;
    padding-top: 10px;
`;

export const ContainerRegisterFields = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
`;

export const ContainerButtonRegister = styled.div`
   padding-top: ${props => props.padding ? props.padding : "40px"};;
   display: flex;
   flex: 1;
   flex-direction: row;
   align-items: flex-end;
   justify-content: flex-end;
   width: 80%;
`;

export const ContainerList = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;
export const ContainerButton = styled.div`
   padding-top: ${props => props.padding ? props.padding : "40px"};;
   display: flex;
   flex: 1;
   flex-direction: row;
   align-items: flex-end;
   justify-content: flex-end;
   width: 100%;
`;

export const Icon = styled.img.attrs(props => ({
    
  }))`
   border-radius: 10px;
   cursor: pointer;
`;



