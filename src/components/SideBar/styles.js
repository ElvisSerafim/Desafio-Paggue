import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "black"};
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 250px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 250px;
    }
  }

  @keyframes closeSideBar {
    from {
      opacity: 1;
      width: 250px;
    }
    to {
      opacity: 0;
      width: 0;
    }
  }

`;



export const Content = styled.div`
  margin-top: 100px;
`;