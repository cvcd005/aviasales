import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const BlankTicket = styled(Row)`
  width: 100%;
  height: 184px;
  margin-top: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px 0 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Price = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #2196f3;
`;
const LogoCompani = styled.img`
  width: 110px;
  height: 36px;
`;
const SupportText = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #a0b0b9;
`;

const MainText = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #4a4a4a;
`;
const String = styled(Row)`
  margin-top: 10px;
`;
const normalize = el => (el < 10 ? `0${el}` : el);

const createTime = (time, duration) => {
  const startTime = new Date(time);
  const endTime = new Date(startTime.getTime() + duration * 60000);
  const diff = new Date(endTime.getTime() - startTime.getTime());
  return [
    `${normalize(startTime.getUTCHours())} : ${normalize(startTime.getUTCMinutes())} - ${normalize(
      endTime.getUTCHours()
    )} : ${normalize(endTime.getUTCMinutes())}`,
    `${normalize(diff.getUTCHours())}ч : ${normalize(diff.getUTCMinutes())}м`,
  ];
};

const Ticket = props => {
  const { obj } = props;
  const {
    price,
    carrier,
    segments: [segment1, segment2],
  } = obj;

  const first = createTime(segment1.date, segment1.duration);
  const second = createTime(segment2.date, segment2.duration);

  return (
    <BlankTicket>
      <String>
        <Col span={16}>
          <Price>{`${price} Р`}</Price>
        </Col>
        <Col span={8}>
          <LogoCompani src={`http://pics.avs.io/99/36/${carrier}.png`} />
        </Col>
      </String>
      <String>
        <Col span={8}>
          <SupportText>{`${segment1.origin} - ${segment1.destination}`}</SupportText>
        </Col>
        <Col span={8}>
          <SupportText>в пути</SupportText>
        </Col>
        <Col span={8}>
          <SupportText>
            {segment1.stops.length > 1 ? `${segment1.stops.length} пересадки` : '1 пересадка'}
          </SupportText>
        </Col>
        <Col span={8}>
          <MainText>{first[0]}</MainText>
        </Col>
        <Col span={8}>
          <MainText>{first[1]}</MainText>
        </Col>
        <Col span={8}>
          <MainText>{segment1.stops.join(',')}</MainText>
        </Col>
      </String>
      <String>
        <Col span={8}>
          <SupportText>{`${segment2.origin} - ${segment2.destination}`}</SupportText>
        </Col>
        <Col span={8}>
          <SupportText>в пути</SupportText>
        </Col>
        <Col span={8}>
          <SupportText>
            {segment2.stops.length > 1 ? `${segment2.stops.length} пересадки` : '1 пересадка'}
          </SupportText>
        </Col>
        <Col span={8}>
          <MainText>{second[0]}</MainText>
        </Col>
        <Col span={8}>
          <MainText>{second[1]}</MainText>
        </Col>
        <Col span={8}>
          <MainText>{segment1.stops.join(',')}</MainText>
        </Col>
      </String>
    </BlankTicket>
  );
};

export default Ticket;
