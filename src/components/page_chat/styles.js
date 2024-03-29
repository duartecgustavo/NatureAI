import styled from "styled-components";

export const ContainerChat = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #d0d0d0;

  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  position: relative;
`;

export const NavbarChat = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 20%;
  background-color: white;

  position: absolute;
  top: 0;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  h1 {
    color: #7ad606;
  }
`;

export const InputChat = styled.div`
  width: 100%;
  height: 15%;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const InputFild = styled.input`
  width: 80%;
  height: 45px;
  border-radius: 5px;
  border-style: none;
  padding-left: 10px;
  max-width: 100% !important;

  :hover {
    border-color: #76ff94;
    border-style: solid;
  }
`;
export const ButtonChat = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #5e985b;
  border: none;

  :hover {
    background-color: #89bb86;
  }
`;
export const ContainerMessage = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 8px;
  border-top: 1px dotted #d0d0d0;
  &.user {
    justify-content: end;
  }
`;

export const HistoryChat = styled.div`
  width: 100%;
  height: 85%;

  display: flex;
  flex-direction: column;
  justify-content: end;

  background-color: white;
  overflow-y: hidden;
`;

export const MessageBox = styled.div`
  width: auto;
  max-width: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  background-color: #deffb4;

  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
`;
