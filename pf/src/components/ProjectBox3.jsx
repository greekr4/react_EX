import styled from 'styled-components';
import Slider from 'react-slick';
import '../assets/slick-theme.css';
import '../assets/slick.css';
import img1 from '../assets/images/project3/1.png';
import img2 from '../assets/images/project3/2.png';
import img3 from '../assets/images/project3/3.png';
import img4 from '../assets/images/project3/4.png';
import img5 from '../assets/images/project3/5.png';
import img6 from '../assets/images/project3/6.png';
import img7 from '../assets/images/project3/7.png';

const SkillWrap = styled.div`
  height: 41rem;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  /* height: calc(100% - (7.5rem)); */
  height: 100%;
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

const MyATag = styled.a`
  text-decoration: none;
  color: #666;
  &&:hover {
    color: orangered;
  }
`;

const ProjectBox3 = ({ project }) => {
  return (
    <SkillWrap>
      <ItemWrap>
        <ProjectItem height="50rem">
          <ProjectTitle>인건비 관리 어플</ProjectTitle>
          <ProjectSubTitle>개인용 프로젝트</ProjectSubTitle>
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
                <b>
                  아버지가 엑셀로 관리하던 데이터 유실의 위험성을 줄이고 데이터
                  편집 및 저장 관리에 편의성을 높이고자 개발한 간단한 앱
                  서비스입니다.
                </b>
                <br />
                <br />앱 개발을 공부하던 중 Flutter를 접하고 처음 개발한
                프로젝트입니다. 간편한 크로스 플랫폼 개발과 네이티브 앱과 거의
                동일한 성능의 UI를 제공, Material Design과 Cupertino 스타일의
                위젯을 사용하여 디자인하는 부분에서 Flutter의 강력함을 느낄 수
                있었습니다.
              </MainDescription>
              <SubDescriptionBox>
                <SubDescriptionLabel>기능</SubDescriptionLabel>
                <SubDescriptionValue>
                  회원가입, 로그인, 일별 인건비 추가/수정/삭제, 인건비 집계
                </SubDescriptionValue>
              </SubDescriptionBox>
              <SubDescriptionBox>
                <SubDescriptionLabel>Frontend</SubDescriptionLabel>
                <SubDescriptionValue>Flutter, Dart</SubDescriptionValue>
              </SubDescriptionBox>
              <SubDescriptionBox>
                <SubDescriptionLabel>Backend</SubDescriptionLabel>
                <SubDescriptionValue>
                  Firebase Authentication
                </SubDescriptionValue>
              </SubDescriptionBox>
              <SubDescriptionBox>
                <SubDescriptionLabel>Database</SubDescriptionLabel>
                <SubDescriptionValue>Firebase Database</SubDescriptionValue>
              </SubDescriptionBox>
              <SubDescriptionBox>
                <SubDescriptionLabel>GitHub</SubDescriptionLabel>
                <SubDescriptionValue>
                  <MyATag
                    href="https://github.com/greekr4/flutter/tree/master/pay_master"
                    target="_blank"
                  >
                    github.com/greekr4/flutter/tree/master/pay_master
                  </MyATag>
                </SubDescriptionValue>
              </SubDescriptionBox>
            </ProjectContentExplanWrap>
          </ProjectContentWrap>
        </ProjectItem>
      </ItemWrap>
    </SkillWrap>
  );
};

export default ProjectBox3;
