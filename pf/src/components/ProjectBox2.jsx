import styled from 'styled-components';
import Slider from 'react-slick';
import '../assets/slick-theme.css';
import '../assets/slick.css';
import img1 from '../assets/images/project1/1.png';
import img2 from '../assets/images/project1/2.png';
import img3 from '../assets/images/project1/3.png';
import img4 from '../assets/images/project1/4.png';
import img5 from '../assets/images/project1/5.png';
import img6 from '../assets/images/project1/6.png';
import img7 from '../assets/images/project1/7.png';

const SkillWrap = styled.div`
  height: 43rem;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  height: calc(100% - (7.5rem));
`;

const ProjectItem = styled.div`
  margin: 1rem;
  background-color: white;
  border-radius: 10px;
  width: 70rem;
  padding: 1rem;
  /* height: ${props => props.height}; */
`;

const ProjectTitle = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
  text-align: center;
`;

const ProjectSubTitle = styled.div`
  font-size: 0.8rem;
  text-align: center;
  padding: 0.5rem;
  color: #7f7f7f;
  margin-bottom: 1rem;
`;

const ProjectContentWrap = styled.div`
  display: flex;
`;

const ProjectContentSliderWrap = styled.div`
  width: 50%;
  height: 30rem;
`;

const ProjectContentExplanWrap = styled.div`
  width: 50%;
  height: 30rem;
`;

const ProjectContentSlider = styled.div``;

const SliderBox = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;
`;
const PrevArrow = props => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'blcok',
        background: 'red',
        top: '105%',
        left: '40%',
      }}
      onClick={onClick}
    ></div>
  );
};

const NextArrow = props => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'blcok',
        background: 'red',
        top: '105%',
        left: '60%',
      }}
      onClick={onClick}
    ></div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // prevArrow: <PrevArrow />,
  // nextArrow: <NextArrow />,
};

const Testdiv = styled.div`
  width: 100%;
  height: 28rem;
  background-color: aliceblue;
`;

const MainDescription = styled.div`
  width: 88%;
  border-bottom: 1px solid #000000;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  word-wrap: break-word;
`;

const SubDescriptionBox = styled.div`
  margin-bottom: 1rem;
`;

const SubDescriptionLabel = styled.div`
  display: inline-block;
  width: 8rem;
  vertical-align: top;
  font-weight: 600;

  &&::before {
    content: '✔';
    display: inline;
    padding-right: 0.5rem;
  }
`;

const SubDescriptionValue = styled.div`
  display: inline-block;
  width: calc(100% - 10rem);
  vertical-align: middle;
  font-weight: 400;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 28rem;
`;

const ProjectBox2 = ({ project }) => {
  console.log(project);
  return (
    <SkillWrap>
      <ItemWrap>
        <ProjectItem height="50rem">
          <ProjectTitle>IFOU 차세대모바일</ProjectTitle>
          <ProjectSubTitle>정산관리시스템</ProjectSubTitle>
          <ProjectContentWrap>
            <ProjectContentSliderWrap>
              <ProjectContentSlider>
                <SliderBox>
                  <Slider {...settings}>
                    <ImageBox src={img1}></ImageBox>
                    <ImageBox src={img2}></ImageBox>
                    <ImageBox src={img3}></ImageBox>
                    <ImageBox src={img4}></ImageBox>
                    <ImageBox src={img5}></ImageBox>
                    <ImageBox src={img6}></ImageBox>
                    <ImageBox src={img7}></ImageBox>
                  </Slider>
                </SliderBox>
              </ProjectContentSlider>
            </ProjectContentSliderWrap>
            <ProjectContentExplanWrap>
              <MainDescription>
                기존 PHP로 구성 되어 있던 프로세스를 JAVA 언어로 변경 및 3-Tier
                를 구축, UI/UX를 변경한 웹사이트입니다.
                <br />
                <br />
                레거시 코드와 난잡한 쿼리를 정리하면서
              </MainDescription>
              <SubDescriptionBox>
                <SubDescriptionLabel>기능</SubDescriptionLabel>
                <SubDescriptionValue>
                  거래 데이터 확인, 실시간 카드 취소, 각 메뉴별 집계, 엑셀
                  다운로드, 엑셀 및 csv 업로드, 데이터 생성 및 삭제, 카드 데이터
                  청구, 카드사 입금 데이터 확인 등
                </SubDescriptionValue>
              </SubDescriptionBox>
              <SubDescriptionBox>
                <SubDescriptionLabel>Frontend</SubDescriptionLabel>
                <SubDescriptionValue>
                  Javascript, Css, Dhtmlx
                </SubDescriptionValue>
              </SubDescriptionBox>
              <SubDescriptionBox>
                <SubDescriptionLabel>Backend</SubDescriptionLabel>
                <SubDescriptionValue>Java</SubDescriptionValue>
              </SubDescriptionBox>
              <SubDescriptionBox>
                <SubDescriptionLabel>Database</SubDescriptionLabel>
                <SubDescriptionValue>Oracle</SubDescriptionValue>
              </SubDescriptionBox>
              <SubDescriptionBox>
                <SubDescriptionLabel>Demo</SubDescriptionLabel>
                <SubDescriptionValue>https://asdasd.com</SubDescriptionValue>
              </SubDescriptionBox>
            </ProjectContentExplanWrap>
          </ProjectContentWrap>
        </ProjectItem>
      </ItemWrap>
    </SkillWrap>
  );
};

export default ProjectBox2;
