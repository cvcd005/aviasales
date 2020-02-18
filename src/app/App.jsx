import React from 'react';
import { Col } from 'antd';

import { sortFilter, transferFilter, getSearchId, getChunkTickets } from '../api/api';

import ContentWrapper from '../ContentWrapper';
import TransferFilter from '../TransferFilter';
import ButtonFilter from '../ButtonFilter';
import TicketsList from '../TicketsList';

import 'antd/dist/antd.css';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      sortFlag: 'fastest',
      transferFlag: { '0': true, '1': false, '2': false, '3': false, all: false },
      searchId: null,
    };
  }

  async componentDidMount() {
    this.getId();
  }

  getId = async () => {
    const response = await getSearchId();
    this.setState({ ...response.data }, () => this.getTickets());
  };

  getTickets = async () => {
    const { searchId } = this.state;
    try {
      const response = await getChunkTickets(searchId);
      const { data } = response;
      if (data.stop) {
        return this.setState(state => ({ tickets: [...state.tickets, ...data.tickets] }));
      }
      this.setState(state => ({ tickets: [...state.tickets, ...data.tickets] }), this.getTickets);
    } catch (err) {
      this.getTickets();
    }
  };

  changeTransferFlag = value => {
    if (value === 'all') {
      this.setState(state => {
        const { all } = state.transferFlag;
        if (all) {
          return { transferFlag: { '0': true, '1': false, '2': false, '3': false, all: false } };
        }
        return { transferFlag: { '0': true, '1': true, '2': true, '3': true, all: true } };
      });
    } else {
      this.setState(state => {
        const { transferFlag } = state;
        return { transferFlag: { ...transferFlag, [value]: !transferFlag[value], all: false } };
      });
    }
  };

  changeSortFlag = () => {
    this.setState(state => {
      const { sortFlag } = state;
      return sortFlag === 'cheapest' ? { sortFlag: 'fastest' } : { sortFlag: 'cheapest' };
    });
  };

  render() {
    const { tickets, transferFlag, sortFlag } = this.state;
    const result = sortFilter(transferFilter(tickets, transferFlag), sortFlag).slice(0, 5);
    return (
      <ContentWrapper>
        <TransferFilter changeTransferFlag={this.changeTransferFlag} transferFlag={transferFlag} />
        <Col xs={22} sm={15}>
          <ButtonFilter changeSortFlag={this.changeSortFlag} sortFlag={sortFlag} />
          <TicketsList list={result} />
        </Col>
      </ContentWrapper>
    );
  }
}

export default App;
