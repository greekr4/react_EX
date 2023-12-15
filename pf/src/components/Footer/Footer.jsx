import { useMediaQuery } from 'react-responsive';
import { styled } from 'styled-components';

const MyFooter = styled.footer`
  display: block;
  width: 100%;
  height: 8rem;
  background-color: #fefefefe;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
`;

const IconItem = styled.div`
  color: #222222;
`;

const Copyright = styled.div`
  color: #222222;
  text-align: center;
`;

const Img = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${props => props.iconUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 1rem 1rem 0.5rem 1rem;
`;

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

  return (
    <>
      <MyFooter>
        <IconBox>
          <IconItem>
            <a href="https://github.com/greekr4">
              <Img iconUrl="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" />
            </a>
          </IconItem>
          <IconItem>
            <a href="mailto:greekr4@naver.com">
              <Img iconUrl="https://cdn-icons-png.flaticon.com/512/3711/3711159.png" />
            </a>
          </IconItem>
        </IconBox>
        <Copyright>© 2023. Kim TaeKyun. All rights reserved.</Copyright>
      </MyFooter>
    </>
  );
};

export default Footer;
