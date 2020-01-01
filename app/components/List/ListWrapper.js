import { Card } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  min-width: ${props => props.theme.spacing(40)}px;
  margin: 0 ${props => props.theme.spacing(2)}px;
`;

export default StyledCard;
