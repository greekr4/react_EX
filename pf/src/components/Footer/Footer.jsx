import { useMediaQuery } from 'react-responsive';
import { styled } from 'styled-components';

const Footer = () => {
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

  const Footer = styled.footer`
    display: block;
    width: 100%;
  `;

  const IconBox = styled.div``;

  return (
    <>
      <Footer>
        <IconBox>dd</IconBox>
      </Footer>
    </>
  );
};

export default Footer;
