import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  height: 5rem;
  padding: 0 21.25rem;
  box-shadow: 0 0.1875rem 0.625rem #c7c7c7;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 7.125rem;
  height: 2.5rem;
  cursor: pointer;
  margin-right: 9.375rem;
`;

export const goLoginButton = styled.button`
  border: 0;
  outline: 0;
  font-size: 1.25rem;
`;

export const HeaderImmutableContent = styled.div`
  display: flex;
  flex-direction: row;
`;
