import styled from 'styled-components';
// Components
import Card from '../../components/Card';

const Wrapper = styled(Card)`
  background-color: #ffffff;
  border: thin solid #ededed;
  border-radius: 4px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, .05);
  margin-bottom: 8px;
  position: relative;

  .c-product {
    &__header,
    &__footer {
      height: 48px;
    }

    &__main {
      min-height: 160px;
    }
  }
`;

export default Wrapper;
