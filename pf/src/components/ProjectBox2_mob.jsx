import styled from 'styled-components';
import Slider from 'react-slick';
import '../assets/slick-theme.css';
import '../assets/slick.css';
import img1 from '../assets/images/project2/1.png';
import img2 from '../assets/images/project2/2.png';
import img3 from '../assets/images/project2/3.png';
import img4 from '../assets/images/project2/4.png';
import img5 from '../assets/images/project2/5.png';

const SkillWrap = styled.div`
  height: 100%;
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
  width: 18rem;
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
  /* margin-bottom: 1rem; */
`;

const ProjectContentWrap = styled.div``;

const ProjectContentSliderWrap = styled.div`
  width: 100%;
  height: 19rem;
`;

const ProjectContentExplanWrap = styled.div`
  width: 100%;
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
  width: 90%;
  border-bottom: 1px solid #000000;
  padding-bottom: 1rem;
  margin: 0 auto;

  word-wrap: break-word;
`;

const SubDescriptionBox = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding-top: 1rem;
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
  display: block;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1rem;
  font-weight: 400;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 15rem;
`;

const ProjectBox2_mob = ({ project }) => {
  console.log(project);
  return (
    <SkillWrap>
      <ItemWrap>
        <ProjectItem height="50rem">
          <ProjectTitle>IFOU 차세대 모바일</ProjectTitle>
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
                  </Slider>
                </SliderBox>
              </ProjectContentSlider>
            </ProjectContentSliderWrap>
          </ProjectContentWrap>
          <MainDescription>
            차세대 IFOU를 모바일을 통해 쉽게 확인하려고 만든 모바일 전용
            웹사이트입니다.
          </MainDescription>
          <SubDescriptionBox>
            <SubDescriptionLabel>기능</SubDescriptionLabel>
            <SubDescriptionValue>
              전일매출/당일입금/매출통계 데이터 표출, 메뉴별 집계 데이터 확인
            </SubDescriptionValue>
            <SubDescriptionLabel>Frontend</SubDescriptionLabel>
            <SubDescriptionValue>React</SubDescriptionValue>
            <SubDescriptionLabel>Backend</SubDescriptionLabel>
            <SubDescriptionValue>SpringBoot</SubDescriptionValue>
            <SubDescriptionLabel>Database</SubDescriptionLabel>
            <SubDescriptionValue>Oracle</SubDescriptionValue>
            <SubDescriptionLabel>Demo</SubDescriptionLabel>
            <SubDescriptionValue>Oracle</SubDescriptionValue>
          </SubDescriptionBox>
        </ProjectItem>
      </ItemWrap>
    </SkillWrap>
  );
};

export default ProjectBox2_mob;
