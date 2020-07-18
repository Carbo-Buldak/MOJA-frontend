import styled from 'styled-components';

export const ModalContentWrapper = styled.div`
  position: fixed;
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1.25rem;
  background-color: #fff;
  z-index: 1000;
  box-shadow: 0px 0.1875rem 0.1875rem rgba(0, 0, 0, 16%);
  justify-content: center;
`;
