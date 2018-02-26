import styled from 'styled-components';

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

const Review = styled.li`
  ${'' /* background-color: ${(props) => props.theme.palette.cardBackground}; */}
  border-bottom: thin solid #ededed;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-bottom: 4px;
  padding: 0;

  &:last-child {
    border: none;
  }

  .c-review__header {
    .c-link {
      align-items: center;
      display: flex;
      flex: 1;
    }
  }

    .c-info {
      display: flex;
      flex: 1;
      flex-direction: column;
      margin: 0 auto;
      overflow: hidden;
      text-decoration: none;

      .a {
        &-name,
        &-username,
        &-date {
          font-size: 11px;
          color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
          letter-spacing: 0.01rem;
          line-height: 1.35;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        &-name {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.01rem;
          margin-bottom: 0;
        }

        &-username {
          font-size: 11px;
        }

        &-separator {
          color: #242424;
          display: inline;
          margin-left: 4px;
          margin-right: 4px;
        }

        &-date {
          color: ${(props) => props.theme.isDark ? '#D3D4D8' : '#555'};
          font-weight: 400;
        }
      }
    }

  .c-review__body {
    color: ${(props) => props.theme.isDark ? '#ffffff' : '#242424'};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.35;
    margin: -4px 0 12px;
    padding: 0 12px 0;

    [href] {
      color: ${(props) => props.theme.isDark ? '#78bcff' : '#004f9c'};
    }
  }
`;

export default Wrapper;

export {
  Review,
};
