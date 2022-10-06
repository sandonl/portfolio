import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`;

export const Modal = styled.div`
  color: black;
  position: absolute;
  z-index: 200;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  height: 26rem;
  width: 45rem;
  background: hsl(34.9, 98.6%, 72.9%);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
`;

export const ModalLink = styled.a`
  color: #ffffff;
  font-size: 1.6rem;
  margin-top: 2rem;
  padding: 1rem 1.5rem;
  background: #945dd6;
  border-radius: 5px;
  transition: 0.5s;
  &:hover {
    background: #ad8bd7;
    cursor: pointer;
  }
`;

export const ModalButton = styled.button`
  all: unset;
  color: black;
  font-size: 1.3rem;
  margin-top: 2rem;
  border-radius: 5px;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
  }
`;
