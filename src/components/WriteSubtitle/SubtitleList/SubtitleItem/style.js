import styled from 'styled-components';

export const SubtitleItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  height: 2.438rem;
`;

export const SubtitleInfoWrapper = styled.div`
  display: flex;
  border: 1px solid #707070;
  padding: 0 1rem;
  align-items: center;
`;

export const SubtitleTime = styled(SubtitleInfoWrapper)`
  width: 6rem;
  justify-content: center;
`;
export const SubtitleText = styled(SubtitleInfoWrapper)`
  width: 48.5rem;
`;
