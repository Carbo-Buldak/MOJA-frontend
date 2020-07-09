import styled from 'styled-components';

export const VideoItemWrapper = styled.div`
  position: relative;
  z-index: 0;
  width: 17.5rem;
  height: 17.5rem;
  margin-bottom: 2.5rem;
  border-radius: 1.25rem;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 16%);
`;

export const VideoHover = styled.div`
  position: absolute;
  display: flex;
  width: 17.5rem;
  height: 17.5rem;
  margin-bottom: 2.5rem;
  border-radius: 1.25rem;
  z-index: 1;
  opacity: 0.5;
  background-color: #000000;
  justify-content: center;
  align-items: center;
`;

export const VideoHoverIcon = styled.img`
  width: 3.25rem;
  height: 3.25rem;
  opacity: 1;
`;

export const VideoThumbnail = styled.img`
  width: inherit;
  height: 13.75rem;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
`;

export const VideoInfo = styled.div`
  display: flex;
  width: inherit;
  height: 3.75rem;
  color: #303030;

  align-items: center;
  justify-content: center;
`;

export const VideoInfoWrapper = styled.div`
  display: flex;
  width: 15.63rem;
  height: 2.5rem;
  flex-direction: column;
`;

export const VideoName = styled.p`
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const VideoViewCount = styled.p`
  font-size: 0.625rem;
  font-weight: 200;
`;
