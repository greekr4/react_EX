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
  height: ${props => (props.open ? '150px' : '0px')};
  transition: height 0.2s;
`;

const MenuItem = styled.div``;

const Mobmenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hamberger onClick={handleToggleMenu}></Hamberger>
      <MobMenu open={isOpen}>
        <MenuItem>About me</MenuItem>
        <MenuItem>About me</MenuItem>
        <MenuItem>About me</MenuItem>
      </MobMenu>
    </>
  );
};

export default Mobmenu;
