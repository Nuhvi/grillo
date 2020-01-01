import styled from 'styled-components';

const ListsCanvas = styled.div`
  display: flex;
  height: 100%;

  user-select: none;
  white-space: nowrap;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: ${props => props.theme.spacing(1)}px;

  margin-left: ${props => props.theme.spacing(2)}px;
`;

export default ListsCanvas;
