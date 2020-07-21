import styled from 'styled-components';

export const VideoCategoryWrapper = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: 2.5rem;
  border-radius: 50px 50px 50px 50px;
  background-color: #bababa;
  margin-bottom: 0.625rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CategoryName = styled.h1`
  font-size: 1rem;
  color: #fff;
`;
