import { useMediaQuery } from 'react-responsive';
import { styled } from 'styled-components';
import Header from '../../components/Header/Header';
import CardBox from '../../components/CardBox';
import SkillBox from '../../components/SkillBox';
import ArchiveBox from '../../components/ArchiveBox';
import ProjectBox1 from '../../components/ProjectBox1';
import ProjectBox2 from '../../components/ProjectBox2';
import ProjectBox3 from '../../components/ProjectBox3';
import CardBox_mob from '../../components/CardBox_mob';
import SkillBox_mob from '../../components/SkillBox_mob';
import ProjectBox1_mob from '../../components/ProjectBox1_mob';
import ProjectBox2_mob from '../../components/ProjectBox2_mob';
import ProjectBox3_mob from '../../components/ProjectBox3_mob';
import ProjectBox4 from '../../components/ProjectBox4';
import ProjectBox4_mob from '../../components/ProjectBox4_mob';

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

const MainWrap = styled.div`
  width: 100%;
  position: relative;
  background-color: rgba(179, 35, 35, 0.1);

  /* &::before {
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(179, 35, 35, 0.1);
  } */
`;
const MainContentBox = styled.div`
  width: 100%;
  padding: 8.5rem 2rem 4rem;
  margin: 0 auto;
  box-sizing: border-box;
  text-align: center;
`;

const MainTitle = styled.div`
  font-family: 'Black Han Sans', sans-serif;
  font-size: ${props => props.fontSize || '5rem'};
  font-weight: 300;
`;

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

const Divider = styled.div`
  width: 3.25rem;
  height: 0;
  margin: 1.5rem auto;
  border: none;
  border-top: 0.2rem solid #e42525;
  opacity: 1;
`;

const SubTitle = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 400;
`;

const MainPage = () => {
  const content = [
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
      title: '이름',
      content: '김태균',
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/3991/3991774.png',
      title: '생년월일',
      content: '1996.08.11',
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
      title: '주소',
      content: '경기도 고양시',
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/126/126509.png',
      title: '연락처',
      content: '010-4191-1611',
      tag: 'tel',
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/542/542689.png',
      title: '이메일',
      content: 'greekr4@naver.com',
      tag: 'email',
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051377.png',
      title: 'GitHub',
      content: 'github.com/greekr4',
      tag: 'link',
    },
  ];

  return (
    <>
      <Desktop>
        <MainWrap>
          <MainContentBox>
            <MainTitle>김태균 포트폴리오</MainTitle>
            <Divider />
            <SubTitle>
              안녕하세요! <br />
              열정적이고 꼼꼼한 성격을 가진 풀 스택 웹 개발자입니다. <br />
              공부는 저의 밥 같은 존재라고 생각하며, 끊임없이 성장하는 것을
              즐깁니다.
              <br />
              도전을 두려워하지 않고 항상 열려있는 마음으로 새로운 기술에
              도전합니다.
            </SubTitle>
          </MainContentBox>
        </MainWrap>
        <ArticelEl bgColor="#ffffff">
          <ArticelWrap>
            <ArticleTitle>ABOUT ME</ArticleTitle>
            <CardBox content={content}></CardBox>
          </ArticelWrap>
        </ArticelEl>
        <ArticelEl bgColor="#f9c51d">
          <ArticelWrap>
            <ArticleTitle>SKILLS</ArticleTitle>
            <SkillBox />
          </ArticelWrap>
        </ArticelEl>
        {/* <ArticelEl bgColor="#464646">
          <ArticelWrap>
            <ArticleTitle fontColor="#ffffff">Title 3</ArticleTitle>
            <ArchiveBox />
          </ArticelWrap>
        </ArticelEl> */}
        <ArticelEl bgColor="#5f9ca0">
          <ArticelWrap>
            <ArticleTitle fontColor="#ffffff">PROJECTS</ArticleTitle>
            <ProjectBox1 />
            <ProjectBox2 />
            <ProjectBox3 />
            <ProjectBox4 />
          </ArticelWrap>
        </ArticelEl>
      </Desktop>
      <Mobile>
        <MainWrap>
          <MainContentBox>
            <MainTitle fontSize="4rem">
              김태균
              <br />
              포트폴리오
            </MainTitle>
            <Divider />
            <SubTitle>
              안녕하세요! <br />
              열정적이고 꼼꼼한 성격을 가진
              <br />풀 스택 웹 개발자입니다. <br />
              공부는 저의 밥 같은 존재라고 생각하며,
              <br />
              끊임없이 성장하는 것을 즐깁니다.
              <br />
              도전을 두려워하지 않고 항상 열려있는 마음으로 새로운 기술에
              도전합니다.
            </SubTitle>
          </MainContentBox>
        </MainWrap>
        <ArticelEl bgColor="#ffffff">
          <ArticelWrap>
            <ArticleTitle>ABOUT ME</ArticleTitle>
            <CardBox_mob content={content}></CardBox_mob>
          </ArticelWrap>
        </ArticelEl>
        <ArticelEl bgColor="#f9c51d">
          <ArticelWrap>
            <ArticleTitle>SKILLS</ArticleTitle>
            <SkillBox_mob />
          </ArticelWrap>
        </ArticelEl>
        <ArticelEl bgColor="#5f9ca0">
          <ArticelWrap>
            <ArticleTitle fontColor="#ffffff">PROJECTS</ArticleTitle>
            <ProjectBox1_mob />
            <ProjectBox2_mob />
            <ProjectBox3_mob />
            <ProjectBox4_mob />
          </ArticelWrap>
        </ArticelEl>
      </Mobile>
    </>
  );
};

export default MainPage;
