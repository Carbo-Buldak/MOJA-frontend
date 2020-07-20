import styled from 'styled-components';

export const VideoCategoryList = styled.ul`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  width: ${(props) => props.width};
`;

export const CategoryTopBottomWrapper = styled.div`
  width: inherit;
  height: 1.25rem;
  border-radius: ${(props) =>
    props.isTop ? `50px 50px 0 0` : `0 0 50px 50px`};
  background-color: #bababa;
`;
