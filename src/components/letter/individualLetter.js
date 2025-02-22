import React from 'react';
import styled from 'styled-components';

// Styles
const Content = styled.div`
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  width: 3.438rem;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.563rem;
  font-weight: 700;
  color: #fff;
  border-radius: 10px;
  border: ${props => props.border};
  background: ${props => props.background};
  box-shadow: ${props => props.boxShadow};

  @media (max-width: 375px) {
    width: 3rem;
    height: 2.5rem;
  }
`;

const IndividualLetter = ({background, boxShadow, border, letter}) => {
  return (
    <Content
      background={background}
      boxShadow={boxShadow}
      border={border}
    >
      {letter}
    </Content>
  );
}

export default IndividualLetter;