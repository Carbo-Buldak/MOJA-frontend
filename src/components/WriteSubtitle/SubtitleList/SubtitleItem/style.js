import styled from 'styled-components';

export const SubtitleItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  height: 2.438rem;
`;

export const SubtitleInfoWrapper = styled.div`
  width: 100%;
  border: 1px solid #707070;
  padding: 0 1rem;
  text-align: center;
  line-height: 2.438rem;
`;

export const SubtitleTime = styled(SubtitleInfoWrapper)`
  width: 6rem;
`;
export const SubtitleText = styled(SubtitleInfoWrapper)`
  width: 48.5rem;
  text-align: left;
  overflow: auto;
`;

export const DeleteSubtitleButton = styled.img`
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;  
  align-items: center;
  justify-content: center;
`;
