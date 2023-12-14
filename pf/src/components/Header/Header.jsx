import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { styled, css } from 'styled-components';
import menuimg from '../../assets/images/menu.png';
import './Header.css';
import { CSSTransition } from 'react-transition-group';
import Mobmenu from './Mobmenu';

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
    const isDesktop = useMediaQuery({ minWidth: 878 });
    return isDesktop ? children : null;
  };

  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 877, maxWidth: 991 });
    return isTablet ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 877 });
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
        height: 8vh;
        background-color: #ffffff;
      `}
  `;

  const HeaderMainMob = styled.header`
    display: block;
    position: fixed;
    background-color: #ffffff;
    height: 4rem;
    width: 100%;
    z-index: 10;
  `;

  const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    align-items: center;
    height: 100%;
    margin: 0 auto;
  `;

  const HeaderBoxMob = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
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
    /* display: ${MobMenuShow}; */
    display: block;
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

  const Hamburger = styled.div`
    background-image: url(${menuimg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 2.5rem;
    height: 2.5rem;
    display: block;
  `;

  const MobMenuList = styled.div`
    display: grid;
    background-color: white;
    overflow: hidden;
    height: ${props =>
      props.show ? '100px' : '0'}; /* 초기 상태에서 높이를 0으로 설정 */
    transition: height 0.2s ease;
  `;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
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
        <HeaderMainMob>
          <HeaderBoxMob>
            <Title>타이틀</Title>
            <Mobmenu></Mobmenu>
          </HeaderBoxMob>
        </HeaderMainMob>
      </Mobile>
    </>
  );
};

export default Header;
