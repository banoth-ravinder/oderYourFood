import { ContainerStyle, QuestionStyle, WelcomeStyle } from './styles';

import Button from '@components/Button';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useZenportEats } from '@modules/ZenportEats/hooks/useZenportEats';

const Frame1 = () => {
  const { setOrder, setPage } = useZenportEats();

  const [value, setValue] = useState(0);
  const isInvalidValue = value < 1 || value > 10;

  return (
    <ContainerStyle>
      <WelcomeStyle>Welcome to Zenport Eats Inc.</WelcomeStyle>
      <QuestionStyle>How many people do you have with you today?</QuestionStyle>
      <Input
        style={{ width: 216 }}
        size="large"
        prefix={<UserOutlined />}
        type="number"
        value={value === 0 ? '' : value}
        onChange={(event) => {
          const newValue = event.target.value;
          setValue(Number(newValue));
        }}
      />
      <Button
        size="large"
        type="primary"
        disabled={isInvalidValue}
        onClick={() => {
          setOrder({
            numPeople: value,
            orders: Array(value)
              .fill(0)
              .map((_, idx) => {
                return {
                  name: `Person ${idx + 1}`,
                  items: [],
                };
              }),
          });
          setPage(2);
        }}
      >
        Next
      </Button>
    </ContainerStyle>
  );
};

export default Frame1;
