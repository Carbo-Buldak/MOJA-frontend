import styled from 'styled-components';

export const ModalHeaderWrapper = styled.div`
  display: flex;
  width: 40.63rem;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 2.875rem;
`;

export const ModalHeaderTitle = styled.div`
  display: flex;
  margin-left: 2.5rem;
  margin-top: 2.438rem;
  align-items: center;
`;

export const ModalName = styled.p`
  font-size: 2.438rem;
  font-weight: 800;
`;

export const ModalIcon = styled.img`
  width: 1.625rem;
  height: 1.625rem;
  margin-left: 0.375rem;
`;

export const ModalCloseButton = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 1.375rem;
  margin-top: 1.375rem;
  cursor: pointer;
`;
