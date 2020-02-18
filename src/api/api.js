import axios from "axios";

export const sortFilter = (tickets, flag) => {
  const getDuration = ticket =>
    ticket.segments[0].duration + ticket.segments[1].duration;
  const getPrice = ticket => ticket.price;
  const sort = (array, func) => {
    return array.sort((el1, el2) => {
      const prev = func(el1);
      const next = func(el2);
      if (prev < next) {
        return -1;
      }
      if (prev > next) {
        return 1;
      }
      return 0;
    });
  };

  if (flag === "cheapest") {
    return sort(tickets, getPrice);
  }
  return sort(tickets, getDuration);
};

export const transferFilter = (tickets, transferFlag) => {
  // если нажата галачка все
  if (transferFlag.all) {
    return tickets;
  }
  // массив для активных галочек
  const activeTransfer = [];
  for (let i = 0; i < 4; i++) {
    if (transferFlag[i]) {
      activeTransfer.push(i);
    }
  }
  const checkTransfer = stop => activeTransfer.includes(stop);
  return tickets.filter(
    ({ segments: [seg1, seg2] }) =>
      checkTransfer(seg1.stops.length) && checkTransfer(seg2.stops.length)
  );
};

export const getSearchId = async () => {
  const response = await axios.get(
    "https://front-test.beta.aviasales.ru/search"
  );
  return response;
};

export const getChunkTickets = async id => {
  const response = await axios.get(
    "https://front-test.beta.aviasales.ru/tickets",
    {
      params: { searchId: id }
    }
  );
  return response;
};
