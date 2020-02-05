import styled from 'styled-components';

const CardsListWrapper = styled.div`
  display: grid;
  padding: 0 ${props => props.theme.spacing(2)}px;
  min-height: 50px;
`;

export default CardsListWrapper;
