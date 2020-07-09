import styled from 'styled-components';

import {
  MainColor
} from '../../../GlobalStyle'

export const SearchBox = styled.div `
  display: flex;
  width: 31.25rem;
  height: 2.5rem;
  border-radius: 10rem;
  padding: 0 1.25rem;
  border: 0.0625rem solid #707070;
  align-items: center;
  &:focus-within {
    border-color: ${MainColor}
  }
`;

export const SearchInput = styled.input `
  width: 29.63rem;
  height: 2.35rem;
  border: 0;
`;

export const SearchButton = styled.img `
  widht: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;