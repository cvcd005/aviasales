import React from 'react';
import styled from 'styled-components';
import { Col } from 'antd';
import PropTypes from 'prop-types';

import Shape from '../img/Shape.png'; // Tell Webpack this JS file uses this image

class TransferFilter extends React.Component {
  onClick = evt => {
    evt.preventDefault();
    const id = evt.target.getAttribute('for');
    const { changeTransferFlag } = this.props;
    changeTransferFlag(id);
  };

  render() {
    const { transferFlag } = this.props;
    return (
      <Container xs={22} sm={8}>
        <Title>Количество пересадок </Title>
        <Label htmlFor="all" active={transferFlag.all} onClick={this.onClick}>
          <CheckBox id="all" />
          Все
        </Label>
        <Label htmlFor="0" active={transferFlag[0]} onClick={this.onClick}>
          <CheckBox id="0" />
          Без пересадок
        </Label>
        <Label htmlFor="1" active={transferFlag[1]} onClick={this.onClick}>
          <CheckBox id="1" />1 пересадка
        </Label>
        <Label htmlFor="2" active={transferFlag[2]} onClick={this.onClick}>
          <CheckBox id="2" />2 пересадки
        </Label>
        <Label htmlFor="3" active={transferFlag[3]} onClick={this.onClick}>
          <CheckBox id="3" />3 пересадки
        </Label>
      </Container>
    );
  }
}

TransferFilter.propTypes = {
  changeTransferFlag: PropTypes.func.isRequired,
  transferFlag: PropTypes.shape({
    all: PropTypes.string,
    '0': PropTypes.bool,
    '1': PropTypes.bool,
    '2': PropTypes.bool,
    '3': PropTypes.bool,
  }).isRequired,
};

export default TransferFilter;

const Container = styled(Col)`
  height: 252px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0 20px 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 577px) {
    & {
      margin-bottom: 0;
    }
  }
`;
const Title = styled.h2`
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
const CheckBox = styled.input.attrs(props => ({ type: 'checkbox', id: props.id }))`
  display: none;
`;

const Label = styled.label.attrs(props => ({ htmlFor: props.htmlFor }))`
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => (props.active ? '#2196F3' : '#9ABBCE')};
    border-radius: 2px;
    background: ${props => (props.active ? `url(${Shape}) center no-repeat` : 'none')};
  }
`;
