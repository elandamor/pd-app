import { css } from 'styled-components';

const styles = css`
  display: flex;
  flex-direction: column;

  header {
    align-items: center;
    border-bottom: thin solid ${(props) => props.theme.palette.cardBorderColor};
    border-radius: 4px 4px 0 0;
    display: flex;
    justify-content: center;
    min-height: 64px;
    width: 100%;
  }

  section {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0;

    label {
      align-items: center;
      display: flex;
      position: relative;
      width: 100%;

      span {
        color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 0.025em;
        padding-left: 8px;
        position: absolute;
        text-align: right;
        text-transform: uppercase;
      }
    }

    input {
      -webkit-appearance: none;
      border: none;
      border-bottom: thin solid ${(props) => props.theme.palette.cardBorderColor};
      font-size: 15px;
      outline: none;
      padding: 16px 8px 17px;
      text-align: left;
      text-overflow: ellipsis;
      width: 100%;

      & :-webkit-autofill {
        background-color: ${(props) => props.theme.palette.bodyBackg};
      }

      &:focus {
        border-bottom-color: ${(props) => props.theme.palette.cardBorderColor};
      }

      &#email {
        padding-left: 56px;
      }

      &#password {
        padding-left: 90px;
      }
    }

    /* Change Autocomplete styles in Chrome*/
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      border-bottom: thin solid ${(props) => props.theme.palette.cardBorderColor};
      -webkit-box-shadow: none;
      transition: background-color 5000s ease-in-out 0s;

      &:focus {
        border-bottom-color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
      }
    }
  }

  footer {
    border-top: thin solid ${(props) => props.theme.palette.cardBorderColor};
    position: relative;
    width: 100%;

    button {
      background-color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
      border-radius: 0 0 4px 4px;
      color: ${(props) => props.theme.isDark ? '#000' : '#fff'};
      height: 48px;
      width: 100%;
    }
  }
`;

export default styles;
