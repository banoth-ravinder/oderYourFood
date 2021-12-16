import { ContainerStyle, SubTextStyle } from './styles';

import Button from '@components/Button';
import OrderDetailCard from '@components/OrderDetailCard';
import OrderTotalCard from '@components/OrderTotalCard';
import { SectionStyle } from '../Frame2/styles';
import { Typography } from 'antd';
import { useZenportEats } from '@modules/ZenportEats/hooks/useZenportEats';

const { Title, Text } = Typography;

const Frame3 = () => {
  const { order, setPage } = useZenportEats();

  return (
    <ContainerStyle>
      <Title>Thank you for dining with Zenport Eats Inc.</Title>
      <SubTextStyle $noMargin>Your food will be out momentarily.</SubTextStyle>
      <SubTextStyle>Here is a review of your order</SubTextStyle>
      <SectionStyle $width={250} $marginBottom={45}>
        {order.orders
          .filter((foodOrder) => foodOrder.items.length !== 0)
          .map((foodOrder, idx) => {
            return <OrderDetailCard key={idx} userName={foodOrder.name} items={foodOrder.items} />;
          })}
        <OrderTotalCard order={order} />
      </SectionStyle>

      <SubTextStyle>Want to make changes to your order?</SubTextStyle>
      <Button
        type="primary"
        size="large"
        onClick={() => {
          setPage(2);
        }}
      >
        Change my order
      </Button>
    </ContainerStyle>
  );
};

export default Frame3;
