import { OrderDetailContainerStyle, OrderDetailHeaderStyle, OrderDetailItemStyle } from './styles';

import { CloseOutlined } from '@ant-design/icons';
import { FoodMenuOrderItem } from '@modules/ZenportEats/types';
import Image from 'next/image';
import { Typography } from 'antd';

const { Text } = Typography;

interface Props {
  userName: string;
  items: FoodMenuOrderItem[];
  selected?: boolean;
  onDeleteClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onItemClick?: () => void;
}

const OrderDetailCard = ({
  userName,
  selected = false,
  items,
  onItemClick,
  onDeleteClick,
}: Props) => {
  return (
    <OrderDetailContainerStyle $selected={selected} onClick={onItemClick}>
      <OrderDetailHeaderStyle>
        <div style={{ display: 'flex' }}>
          <Image src="/icons/person.png" width={20} height={20} alt="" />
          <span style={{ marginLeft: 6 }}>{userName}</span>
        </div>
        {onDeleteClick && <CloseOutlined onClick={onDeleteClick} />}
      </OrderDetailHeaderStyle>
      {!!items.length && (
        <div style={{ paddingTop: 4, paddingBottom: 4 }}>
          {items.map((item, idx) => {
            return (
              <OrderDetailItemStyle key={idx}>
                <span>{item.name}</span>
                <Text type="secondary">￥{item.price * (item.itemCount || 1)}</Text>
              </OrderDetailItemStyle>
            );
          })}
        </div>
      )}
    </OrderDetailContainerStyle>
  );
};

export default OrderDetailCard;
