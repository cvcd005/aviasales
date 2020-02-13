import React from 'react';
import styled from 'styled-components';
import { Row } from 'antd';
import PropTypes from 'prop-types';

import logo from '../img/Logo.png'; // Tell Webpack this JS file uses this image

const Container = styled(Row)`
  margin: 0 auto;
  max-width: 755px;
  min-width: 384px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 577px) {
    & {
      flex-direction: row;
      justify-content: space-between;
      align-items: normal;
    }
  }
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  display: block;
  margin: 50px auto 50px auto;
`;

const ContentWrapper = props => {
  const { children } = props;
  return (
    <Container>
      <Img src={logo} alt="logo aviasales" />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContentWrapper;
