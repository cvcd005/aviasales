import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './Ticket';

const TicketsList = props => {
  const { list } = props;
  const result = list.map(ticket => <Ticket obj={ticket} />);
  return <div>{result}</div>;
};

TicketsList.propTypes = {
  list: PropTypes.shape([]).isRequired,
};

export default TicketsList;
