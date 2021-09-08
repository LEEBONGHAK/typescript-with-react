import React from 'react';
import styled from 'styled-components';

const Container = styled.span<{isRed: boolean}>`
  font-size: 50px;
  color: ${props => (props.isRed ? props.theme.redColor : "black")};
`;

interface IProps {
  count: number;
}

const Number:React.FunctionComponent<IProps> = ({ count }) => (<Container isRed={count > 10}>{count}</Container>);

export default Number;