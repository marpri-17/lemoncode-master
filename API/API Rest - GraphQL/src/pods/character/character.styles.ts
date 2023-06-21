import { styled } from '@material-ui/core';
import { css } from 'emotion';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
