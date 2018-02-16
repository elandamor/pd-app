import styled from 'styled-components';

const Wrapper = styled.div`
  aside {
    ${'' /* display: flex;
    flex-direction: column;
    justify-content: stretch; */}
    position: relative;

    header {
      align-items: center;
      background-color: #ffffff;
      border-bottom: thin solid #e8e8e8;
      display: flex;
      height: 48px;
      position: sticky;
      top: 0;
      z-index: 1;

      .c-search {
        flex: 1;
        padding-left: 8px;

        &__inner {
          background-color: #e8e8e8;
          border-radius: 4px;
          height: 32px;
        }
      }
    }

    section {
      flex: 1;
      z-index: 0;
    }
  }
`;

export default Wrapper;
