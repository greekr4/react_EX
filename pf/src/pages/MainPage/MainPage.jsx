import { useMediaQuery } from 'react-responsive';
import { styled } from 'styled-components';
import Header from '../../components/Header/Header';
import CardBox from '../../components/CardBox';
import SkillBox from '../../components/SkillBox';
import ArchiveBox from '../../components/ArchiveBox';
import ProjectBox from '../../components/ProjectBox';
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

const MainWrap = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(179, 35, 35, 0.1);
  }
`;
const MainContentBox = styled.div`
  width: 100%;
  padding: 8.5rem 2rem 4rem;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: center;
`;

const MainTitle = styled.div``;

const ArticelEl = styled.article`
  background-color: ${props => props.bgColor || 'none'};
`;

const ArticelWrap = styled.div`
  margin: 0 20px 0 20px;
`;

const ArticleTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  height: 150px;

  color: ${props => props.fontColor || '#000000'};

  &&::before {
    content: '';
    width: 50px;
    height: 50px;
    background-image: url(https://cdn-icons-png.flaticon.com/128/3214/3214746.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-right: 1.5rem;
    margin-top: 0.5rem;
  }
`;

const MainPage = () => {
  const content = [
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/3214/3214746.png',
      title: '제목1',
      content: '내용1',
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/3214/3214747.png',
      title: '제목1',
      content: '내용1',
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/3214/3214749.png',
      title: '제목1',
      content: '내용1',
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/3214/3214744.png',
      title: '제목1',
      content: '내용1',
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/3214/3214743.png',
      title: '제목1',
      content: '내용1',
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/128/3214/3214742.png',
      title: '제목1',
      content: '내용1',
    },
  ];

  return (
    <>
      <Desktop>
        <MainWrap>
          <MainContentBox>
            <MainTitle>타이틀</MainTitle>
            <div>컨텐츠</div>
            <button>더보기</button>
            <h1>dd</h1>
            <h1>dd</h1>
            <h1>dd</h1>
          </MainContentBox>
        </MainWrap>
        <ArticelEl bgColor="#ffffff">
          <ArticelWrap>
            <ArticleTitle>ArticleTitle</ArticleTitle>
            <CardBox content={content}></CardBox>
          </ArticelWrap>
        </ArticelEl>
        <ArticelEl bgColor="#f9c51d">
          <ArticelWrap>
            <ArticleTitle>Title 2</ArticleTitle>
            <SkillBox />
          </ArticelWrap>
        </ArticelEl>
        <ArticelEl bgColor="#464646">
          <ArticelWrap>
            <ArticleTitle fontColor="#ffffff">Title 3</ArticleTitle>
            <ArchiveBox />
          </ArticelWrap>
        </ArticelEl>
        <ArticelEl bgColor="#5f9ca0">
          <ArticelWrap>
            <ArticleTitle fontColor="#ffffff">Title 4</ArticleTitle>
            <ProjectBox />
          </ArticelWrap>
        </ArticelEl>
      </Desktop>
      <Tablet>Tablet</Tablet>
      <Mobile>Mobile</Mobile>
    </>
  );
};

export default MainPage;
