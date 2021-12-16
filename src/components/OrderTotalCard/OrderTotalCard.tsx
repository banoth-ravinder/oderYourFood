import { ContainerStyle, OrderTotalTableStyle } from './styles';

import Button from '../Button';
import { Order } from '@modules/ZenportEats/types';
import { PlusCircleFilled } from '@ant-design/icons';
import { Typography } from 'antd';

const { Text } = Typography;

interface Props {
  onAddPersonClick?: () => void;
  onNextClick?: () => void;
  order: Order;
}

const taxPercentage = 10;

const OrderTotalCard = ({ onAddPersonClick, onNextClick, order }: Props) => {
  const subTotal = order.orders.reduce((amount, order) => {
    const orderItemTotal = order.items.reduce((orderItemTotalAmount, item) => {
      return orderItemTotalAmount + item.price * item.itemCount;
    }, 0);

    return amount + orderItemTotal;
  }, 0);
  const taxTotal = subTotal * (taxPercentage / 100);
  const total = subTotal + taxTotal;

  return (
    <ContainerStyle>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <div>
          {onAddPersonClick && (
            <Button
              $buttonType="addPerson"
              icon={<PlusCircleFilled style={{ color: '#52C41A' }} />}
              onClick={onAddPersonClick}
              disabled={order.orders.length >= 10}
            >
              Add
            </Button>
          )}
        </div>
        <div>
          <OrderTotalTableStyle>
            <tbody>
              <tr>
                <td align="right">Subtotal</td>
                <td align="right">
                  <Text type="secondary">￥{subTotal}</Text>
                </td>
              </tr>
              <tr>
                <td align="right">Tax (10%)</td>
                <td align="right">
                  <Text type="secondary">￥{taxTotal}</Text>
                </td>
              </tr>
              <tr>
                <td align="right">Total</td>
                <td align="right">
                  <Text type="secondary">￥{total}</Text>
                </td>
              </tr>
            </tbody>
          </OrderTotalTableStyle>
        </div>
      </div>
      {onNextClick && (
        <Button disabled={!total} type="primary" $buttonType="orderTotal" onClick={onNextClick}>
          Next
        </Button>
      )}
    </ContainerStyle>
  );
};

export default OrderTotalCard;
