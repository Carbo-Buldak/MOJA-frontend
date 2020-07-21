import styled from 'styled-components';

export const VideoCategoryItemWrapper = styled.li`
  display: flex;
  width: inherit;
  height: 2.438rem;
  background-color: #bababa;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #767676;
  }
`;

export const VideoCategoryItemName = styled.p`
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
`;
