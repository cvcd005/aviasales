import React from 'react';
import styled from 'styled-components';
import { Col } from 'antd';

import ButtonFilter from '../ButtonFilter';
import TicketsList from '../TicketsList';

const Container = styled(Col)``;

const Content = props => {
  const { list } = props;
  return (
    <Container xs={22} sm={15}>
      <ButtonFilter />
      <TicketsList list={list} />
    </Container>
  );
};

export default Content;
