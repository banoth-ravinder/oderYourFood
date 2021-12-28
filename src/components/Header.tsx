import Image from 'next/image';
import styled from 'styled-components';

import { useZenportEats } from '@modules/ZenportEats/hooks/useZenportEats';

const HeaderStyle = styled.div`
  padding: 1rem 3rem;
  position: relative;
  border-bottom: 1px solid #cccccc;
`;

const LogoWrapperStyle = styled.span`
  display: flex;
  align-items: center;

  & > span {
    & :hover {
      cursor: pointer;
    }
    margin-right: 1rem !important;
  }
`;

const defaultOrder = {
  numPeople: 0,
  orders: [],
};

const Header = () => {
  const { setPage, setOrder, setSelectedIdx, setSelectedTab } = useZenportEats();
  return (
    <HeaderStyle>
      <LogoWrapperStyle
        onClick={() => {
          setPage(1);
          setOrder(defaultOrder);
          setSelectedIdx(0);
          setSelectedTab(null);
        }}
      >
        <Image src="/logo/Zenport logo - blue 1.png" alt="" width={31} height={36} />
        <Image
          src="/logo/Zenport Eats Inc.@3x.png"
          alt=""
          width={150}
          height={36}
          objectFit="contain"
        />
      </LogoWrapperStyle>
    </HeaderStyle>
  );
};

export default Header;
