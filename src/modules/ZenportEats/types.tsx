import { FoodMenuItem } from './data/food-menu';

export interface FoodMenuOrderItem extends FoodMenuItem {
  itemCount: number;
}

export interface FoodOrder {
  name: string;
  items: FoodMenuOrderItem[];
}

export interface Order {
  numPeople: number;
  orders: FoodOrder[];
}
