import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { styled, css } from 'styled-components';

const Header = () => {
  const [MobMenuShow, SetMobMenuShow] = useState('none');
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

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
    height: 70px;
    width: 100%;
    z-index: 10;

    ${props =>
      props.view === true &&
      css`
        background-color: #ffffff;
        box-shadow: 0 1px 0.3rem hsla(0, 0%, 80%, 0.8);
      `}
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
    align-items: center;
    height: 100%;
    margin: 0 auto;
  `;

  const MenuBox = styled.div`
    display: flex;
    color: #444444;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
  `;

  const Title = styled.div`
    color: #444444;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;

    &&:hover {
      color: #999999;
      ${props =>
        props.view === true &&
        css`
          color: #ff1100;
        `};
    }
  `;

  const MobMenuListBox = styled.div`
    display: ${MobMenuShow};
    width: 100%;
  `;

  const PcMenuBtn = styled.div`
    padding: 0.5rem;
    &&:hover {
      color: #999999;
      ${props =>
        props.view === true &&
        css`
          color: #ff1100;
        `};
    }
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
        <HeaderMain view={scrollPosition < 100 ? false : true}>
          <HeaderBox>
            <Title view={scrollPosition < 100 ? false : true}>
              태균's 포트폴리오
            </Title>
            <MenuBox>
              <PcMenuBtn view={scrollPosition < 100 ? false : true}>
                About me
              </PcMenuBtn>
              <PcMenuBtn view={scrollPosition < 100 ? false : true}>
                Skills
              </PcMenuBtn>
              <PcMenuBtn view={scrollPosition < 100 ? false : true}>
                Projects
              </PcMenuBtn>
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
