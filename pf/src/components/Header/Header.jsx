import { useMediaQuery } from 'react-responsive';
import CSS from './Header.css';
import { useState } from 'react';

const Header = () => {
  const [MobMenuShow, SetMobMenuShow] = useState({ display: 'none' });

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

  const HandleClick = e => {
    if (MobMenuShow.display == 'block') {
      SetMobMenuShow({ display: 'none' });
    } else {
      SetMobMenuShow({ display: 'block' });
    }
  };

  return (
    <>
      <Desktop>
        <header className="PcHeader">
          <div className="header_box">
            <div className="title">ㅇㅇ</div>
            <div className="PcMenuBox">
              <div className="PcMenuBtn">메asfas뉴1</div>
              <div className="PcMenuBtn">메뉴asfas2</div>
              <div className="PcMenuBtn">메뉴asdas3</div>
              <div className="PcMenuBtn">메fasfas뉴4</div>
            </div>
          </div>
        </header>
      </Desktop>
      <Mobile>
        <header className="MobHeader">
          <div className="header_box">
            <div className="title">ㅇㅇ</div>
            <div className="MobMenuBox">
              <button onClick={HandleClick}>햄버거</button>
            </div>
          </div>
          <div className="MobMenuListBox" style={MobMenuShow}>
            <div className="MobMenuList">
              <div>메뉴1</div>
              <div>메뉴1</div>
              <div>메뉴1</div>
              <div>메뉴1</div>
            </div>
          </div>
        </header>
      </Mobile>
    </>
  );
};

export default Header;
