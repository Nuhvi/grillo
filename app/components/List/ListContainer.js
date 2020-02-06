import { Card } from '@material-ui/core';
import styled from 'styled-components';

const ListContainer = styled(Card)`
  position: relative;
  min-width: ${props => props.theme.spacing(42)}px;
  padding: ${props => props.theme.spacing(2)}px;
`;

export default ListContainer;
