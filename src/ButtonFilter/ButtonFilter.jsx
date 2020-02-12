import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
  width: 50%;
  height: 50px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: 1px solid #dfe5ec;
  background-color: ${props => (props.active ? '#2196F3' : '#FFFFFF')};
  color: ${props => (props.active ? '#FFFFFF' : '#4A4A4A')};
`;

const ButtonFilter = () => {
  return (
    <div>
      <Button active>Самый дешевый</Button>
      <Button>Самый быстрый</Button>
    </div>
  );
};

export default ButtonFilter;
