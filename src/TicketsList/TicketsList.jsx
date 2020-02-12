import React from 'react';
import Ticket from './Ticket';

/* const obj = {
  price: 15035,
  carrier: 'EK',
  segments: [
    {
      origin: 'MOW',
      destination: 'HKT',
      date: '2020-02-14T22:26:00.000Z',
      stops: ['KUL', 'SIN', 'IST'],
      duration: 686,
    },
    {
      origin: 'MOW',
      destination: 'HKT',
      date: '2020-03-06T08:01:00.000Z',
      stops: ['HKG', 'BKK', 'DXB'],
      duration: 1808,
    },
  ],
}; */

const TicketsList = props => {
  const { list } = props;
  return (
    <div>
      {list.map(el => (
        <Ticket obj={el} />
      ))}
    </div>
  );
};

export default TicketsList;
