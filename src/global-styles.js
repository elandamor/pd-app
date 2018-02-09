import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    /* outline: thin dashed red; */
  }

  *::-webkit-scrollbar {
    width: 0px !important;
    height: 2px !important
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2)
  }

  *::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.08)
  }

  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'liga', 'kern' 1;
    -webkit-font-smoothing: antialiased;
    background-color: #fafafa;
    font-kerning: normal;
    font-weight: 400;
    height: 100%;
    letter-spacing: 0.01rem;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    width: 100%;
  }

  html {
    overflow-x: hidden;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }

  #c-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    z-index: 5;

    &.-active {
      opacity: 1;
      pointer-events: auto;
    }
  }

  [href] {
    color: inherit;
    text-decoration: none;
  }

  [disabled] {
    opacity: .5;
    pointer-events: none;
  }

  [readonly] {
    opacity: .5;
  }
`;
