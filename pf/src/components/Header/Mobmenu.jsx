import styled from 'styled-components';
import menuimg from '../../assets/images/menu.png';
import { useState } from 'react';

const Hamberger = styled.div`
  background-image: url(${menuimg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 2.5rem;
  height: 2.5rem;
  display: block;
`;

const MobMenu = styled.div`
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 4rem;
  width: 100%;
  background-color: white;
  height: ${props => (props.open ? '140px' : '0px')};
  transition: height 0.2s ease;
  box-shadow: 0 1px 0.3rem hsla(0, 0%, 80%, 0.8);
`;

const MenuItem = styled.div`
  margin: 1rem 0 1rem 1.5rem;
  font-size: 1rem;
  color: #343434;
`;

const Mobmenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = y => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }, 100);
  };

  return (
    <>
      <Hamberger onClick={handleToggleMenu}></Hamberger>
      <MobMenu open={isOpen}>
        <MenuItem onClick={() => handleMenuClick(600)}>About me</MenuItem>
        <MenuItem onClick={() => handleMenuClick(1475)}>Skills</MenuItem>
        <MenuItem onClick={() => handleMenuClick(4135)}>Projects</MenuItem>
      </MobMenu>
    </>
  );
};

export default Mobmenu;
