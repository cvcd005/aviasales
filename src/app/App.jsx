import React from 'react';
import axios from 'axios';
import { Col } from 'antd';

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
      stateTickets: [],
      sortFlag: 'fastest',
      transferFlag: { '0': true, '1': false, '2': false, '3': false, all: false },
    };
  }

  async componentDidMount() {
    this.getId();
  }

  getId = async () => {
    const response = await axios.get('https://front-test.beta.aviasales.ru/search');
    this.setState({ ...response.data }, () => this.getTickets());
  };

  getTickets = async () => {
    const { searchId } = this.state;
    const response = await axios
      .get('https://front-test.beta.aviasales.ru/tickets', { params: { searchId } })
      .catch(() => this.getTickets());

    if (!response) {
      return;
    }
    const { stop, tickets } = response.data;
    if (!stop) {
      this.setState(
        state => {
          const { stateTickets } = state;
          return { stateTickets: [...stateTickets, ...tickets] };
        },
        () => this.getTickets()
      );
    } else {
      this.setState(state => {
        const { stateTickets } = state;
        return { stateTickets: [...stateTickets, ...tickets], isUpdate: false };
      });
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

  transferFilter = ar => {
    const { transferFlag } = this.state;
    // если нажата галачка все
    if (transferFlag.all) {
      return ar;
    }
    const flags = [];
    for (let i = 0; i < 4; i++) {
      if (transferFlag[i]) {
        flags.push(i);
      }
    }
    const stopLeng = stop => flags.includes(stop);
    const fn = ticket => {
      const [seg1, seg2] = ticket.segments;
      return stopLeng(seg1.stops.length) && stopLeng(seg2.stops.length);
    };
    return ar.filter(fn);
  };

  sortFilter = ar => {
    const { sortFlag } = this.state;
    if (sortFlag === 'cheapest') {
      return ar.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    }
    const getDuration = el => el.segments[0].duration + el.segments[1].duration;
    return ar.sort((el1, el2) => {
      const a = getDuration(el1);
      const b = getDuration(el2);
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
  };

  changeSortFlag = () => {
    this.setState(state => {
      const { sortFlag } = state;
      return sortFlag === 'cheapest' ? { sortFlag: 'fastest' } : { sortFlag: 'cheapest' };
    });
  };

  render() {
    const { stateTickets, transferFlag, sortFlag } = this.state;
    const result = this.sortFilter(this.transferFilter(stateTickets)).slice(0, 5);
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
