import styled from 'styled-components';

export const SubtitleListWrapper = styled.ul `
  width: 55.25rem;
  height: 14.62rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #fff;
    scroll-padding: 50px 0 0 50px;
  }
  &::-webkit-scrollbar-thumb {
    background: #909090;
  }
`;