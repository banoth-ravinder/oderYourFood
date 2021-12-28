import { FoodTypes, foods } from '@modules/ZenportEats/data/food-menu';
import { TabPaneImageStyle, TabsStyle } from './styles';
import { Tabs, Typography } from 'antd';

import Image from 'next/image';
import { useZenportEats } from '@modules/ZenportEats/hooks/useZenportEats';

const { TabPane } = Tabs;

const images = {
  Appetizer: '/icons/appetizer.png',
  Entree: '/icons/entree.png',
  Maki: '/icons/maki.png',
  Nigiri: '/icons/nigiri.png',
};

const FoodTypeTabs = () => {
  const { selectedTab, setSelectedTab } = useZenportEats();

  return (
    <TabsStyle
      tabBarGutter={25}
      onTabClick={(activeKey: string) => {
        setSelectedTab(selectedTab === activeKey ? null : activeKey);
      }}
      $isDisabled={!selectedTab}
    >
      {Object.keys(foods).map((foodType) => {
        return (
          <TabPane
            tab={
              <TabPaneImageStyle>
                <Image
                  src={images[foodType as FoodTypes] as string}
                  alt=""
                  width={15}
                  height={15}
                />

                <Typography>{foodType}</Typography>
              </TabPaneImageStyle>
            }
            key={foodType}
          />
        );
      })}
    </TabsStyle>
  );
};

export default FoodTypeTabs;
