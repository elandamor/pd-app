import { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const styles = css`
  margin: 0;
  padding: 0;
`;

export const avatar = css`
  background-color: ${(props) => props.theme.palette.cardBorderColor};
  border-radius: 500rem;
  height: 40px;
  margin: 12px;
  overflow: hidden;
  width: 40px;

  .lazy-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    border-radius: 500rem;
    height: 32px;
    visibility: hidden;
    width: 32px;
  }

  .lazy-image-loaded {
    animation-duration: 3s;
    animation-name: ${fadeIn};
    visibility: visible;
  }
`;

export default styles;
