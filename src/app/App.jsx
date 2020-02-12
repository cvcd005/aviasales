import React from 'react';
import axios from 'axios';

import ContentWrapper from '../ContentWrapper';
import TransferFilter from '../TransferFilter';
import Content from '../Content';

import 'antd/dist/antd.css';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateTickets: [],
      sortFlag: 'cheapest',
      transferFlag: { 1: false, 2: false, 3: 3, all: false },
    };
  }

  async componentDidMount() {
    this.getId();
  }

  changeTransferFlag = value => {
    const { transferFlag } = this.state;
    if (transferFlag[value]) {
      this.setState({ transferFlag: { ...transferFlag, [value]: false } });
    } else {
      this.setState({ transferFlag: { ...transferFlag, [value]: value } });
    }
  };

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

  transferFilter = ar => {
    const { transferFlag } = this.state;
    // есл нажата галачка все
    if (transferFlag.all) {
      return ar;
    }
    let fn = (el, value) => el[0].stops.length === value && el[1].stops.length === value;
    const values = Object.values(transferFlag).filter(e => e);
    // если нажата какая-то одна из галочек
    if (values.length === 1) {
      return ar.filter(el => fn(el.segments, values[0]));
    }
    // если нажаты две какие-то галачки
    if (values.length === 2) {
      fn = (el, v1, v2) =>
        (el[0].stops.length === v1 || el[0].stops.length === v2) &&
        (el[1].stops.length === v1 || el[1].stops.length === v2);
      return ar.filter(el => fn(el.segments, values[0], values[1]));
    }
    // если нажаты три галачки
    if (values.length === 3) {
      fn = (el, value) => el[0].stops.length > 0 && el[1].stops.length > 0;
      return ar;
    }
    // если все галочки выключены фильтруем с 0 пересадок
    return ar.filter(el => fn(el.segments, 0));
  };

  sortFilter = ar => {
    const getDuration = el => el.segments[0].duration + el.segments[1].duration;
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
    if (sortFlag === 'fastest') {
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
    }
  };

  render() {
    const { searchId, stateTickets } = this.state;
    const result = this.sortFilter(this.transferFilter(stateTickets)).slice(0, 5);
    console.log(result);
    return (
      <div>
        <ContentWrapper>
          <TransferFilter />
          <Content list={result} />
        </ContentWrapper>
        {searchId}
        Згзышл Pupsil
        <button type="button" onClick={() => this.changeTransferFlag(1)}>
          change
        </button>
      </div>
    );
  }
}

export default App;
