import { FoodMenuItem, FoodTypes } from '@modules/ZenportEats/data/food-menu';
import { FoodSelectionCardStyle, FoodSelectionItemStyle, FoodSelectionTitleStyle } from './styles';

import Button from '@components/Button';
import Image from 'next/image';
import { Typography } from 'antd';

const { Text } = Typography;

interface Props {
  foodType: FoodTypes;
  foodItems: FoodMenuItem[];
  onFoodItemAdd: (foodItem: FoodMenuItem) => void;
}

const FoodSelection = ({ foodType, foodItems, onFoodItemAdd }: Props) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <FoodSelectionTitleStyle>{foodType}</FoodSelectionTitleStyle>
      {foodItems.map((foodItem, idx) => {
        return (
          <FoodSelectionCardStyle key={idx}>
            <Image src={foodItem.imageUrl} width={60} height={60} alt="" />
            <FoodSelectionItemStyle>
              <Text style={{ fontSize: 16 }}>{foodItem.name}</Text>
              <Text type="secondary" style={{ fontSize: 14 }}>
                ￥{foodItem.price}
              </Text>
            </FoodSelectionItemStyle>
            <Button
              type="primary"
              $buttonType="foodSelection"
              onClick={() => {
                onFoodItemAdd(foodItem);
              }}
            >
              +
            </Button>
          </FoodSelectionCardStyle>
        );
      })}
    </div>
  );
};

export default FoodSelection;
