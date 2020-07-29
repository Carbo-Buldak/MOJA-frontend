import styled from 'styled-components';
import { DefaultButton } from '../../GlobalStyle';

export const WriteSubtitleWrapper = styled.div`
  margin-top: 4.938rem;
  margin-left: 21.25rem;
`;

export const VideoTitle = styled.p`
  width: 56.25rem;
  white-space: normal;
  font-size: 1.375rem;
  font-weight: 600;
  margin: 2.5rem 0;
`;

export const WriteSubtitleInputWrapper = styled.div`
  margin-bottom: 5rem;
`;

export const WriteSubtitleText = styled.label`
  font-size: 1.25rem;
  margin-right: 1.188rem;
`;

export const WriteSubtitleInput = styled.input`
  width: 42.5rem;
  height: 2.5rem;
  padding: 0 1.125rem;
  border 1px solid #707070;
  border-radius: 50px;
  font-size: 1rem;
  margin-right: 0.625rem;
`;

export const WriteSubtitleButton = styled(DefaultButton)``;

export const SaveButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const SaveSubtitleButton = styled.button`
  width: 9.375rem;
  height: 3.125rem;
  font-size: 1.25rem;
  font-weight: 800;
  text-align: center;
  color: #83d2f0;
  border-radius: 10rem;
  background-color: #fff;
  border: 2px solid #83d2f0;
  margin-bottom: 1.25rem;
`;

export const TemporarySaveSubtitleButton = styled(SaveSubtitleButton)`
  background-color: #83d2f0;
  border: none;
  color: #fff;
`;
