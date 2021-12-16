import Image from 'next/image';
import styled from 'styled-components';

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

interface Props {
  onIconClick: () => void;
}

const Header = ({ onIconClick }: Props) => {
  return (
    <HeaderStyle>
      <LogoWrapperStyle onClick={onIconClick}>
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
