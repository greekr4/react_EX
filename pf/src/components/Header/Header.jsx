import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { styled, css } from 'styled-components';

const Header = () => {
  const [MobMenuShow, SetMobMenuShow] = useState('none');
  const [ScrollY, SetScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);

  const handleScroll = () => {
    if (ScrollY > 299) {
      SetScrollY(window.scrollY);
      setScrollActive(true);
    } else {
      SetScrollY(window.scrollY);
      setScrollActive(false);
    }
  };

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };

  const HeaderMain = styled.header`
    display: block;
    position: fixed;
    background-color: transparent;
    height: 100px;
    width: 100%;
    z-index: 10;

    ${props =>
      props.mob &&
      css`
        height: 5vh;
      `}
  `;

  const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 1.5vh auto;
  `;

  const MenuBox = styled.div`
    display: flex;
  `;

  const Title = styled.div``;

  const MobMenuListBox = styled.div`
    display: ${MobMenuShow};
    width: 100%;
  `;

  const PcMenuBtn = styled.div`
    margin: 0 0.5vh 0 0.5vh;
  `;

  const Hamburger = styled.button``;

  const MobMenuList = styled.div`
    display: grid;
    margin: 1vh;
  `;

  const HandleClick = e => {
    if (MobMenuShow == 'block') {
      SetMobMenuShow('none');
    } else {
      SetMobMenuShow('block');
    }
  };

  return (
    <>
      <Desktop>
        <HeaderMain>
          <HeaderBox>
            <Title>타이틀</Title>
            <MenuBox>
              <PcMenuBtn>메뉴1</PcMenuBtn>
              <PcMenuBtn>메뉴2</PcMenuBtn>
              <PcMenuBtn>메뉴3</PcMenuBtn>
              <PcMenuBtn>메뉴4</PcMenuBtn>
            </MenuBox>
          </HeaderBox>
        </HeaderMain>
      </Desktop>
      <Mobile>
        <HeaderMain mob>
          <HeaderBox>
            <Title>타이틀</Title>
            <MenuBox>
              <Hamburger onClick={HandleClick}>햄버거</Hamburger>
            </MenuBox>
          </HeaderBox>
          <MobMenuListBox>
            <MobMenuList>
              <div>메뉴1</div>
              <div>메뉴1</div>
              <div>메뉴1</div>
              <div>메뉴1</div>
            </MobMenuList>
          </MobMenuListBox>
        </HeaderMain>
      </Mobile>
    </>
  );
};

export default Header;
