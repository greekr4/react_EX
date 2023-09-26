import styled from 'styled-components';
import Slider from 'react-slick';
import '../assets/slick-theme.css';
import '../assets/slick.css';

const SkillWrap = styled.div`
  height: 70rem;
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
      style={{ ...style, display: 'blcok', background: 'red' }}
      onClick={onClick}
    ></div>
  );
};

const NextArrow = props => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: 'blcok', background: 'red' }}
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
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const Testdiv = styled.div`
  width: 100%;
  height: 28rem;
  background-color: aliceblue;
`;

const MainDescription = styled.div`
  width: 100%;
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

const ProjectBox = () => {
  return (
    <SkillWrap>
      <ItemWrap>
        <ProjectItem height="50rem">
          <ProjectTitle>Title</ProjectTitle>
          <ProjectSubTitle>Subtitle</ProjectSubTitle>
          <ProjectContentWrap>
            <ProjectContentSliderWrap>
              <ProjectContentSlider>
                <SliderBox>
                  <Slider {...settings}>
                    <div>
                      <Testdiv></Testdiv>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                  </Slider>
                </SliderBox>
              </ProjectContentSlider>
            </ProjectContentSliderWrap>
            <ProjectContentExplanWrap>
              <MainDescription>
                MainDescriptionMainDescriptionMainDescriptionMainDescriptionMainDescriptionMainDescriptionMainDescription
                MainDescriptionMainDescription
              </MainDescription>
              <SubDescriptionBox>
                <SubDescriptionLabel>라벨</SubDescriptionLabel>
                <SubDescriptionValue>
                  벨류벨류벨류벨류벨류벨류벨류벨류벨류
                  벨류벨류벨류벨류벨류벨류벨류
                </SubDescriptionValue>
              </SubDescriptionBox>
              <SubDescriptionBox>
                <SubDescriptionLabel>라벨</SubDescriptionLabel>
                <SubDescriptionValue>
                  벨류벨류벨류벨류벨류벨류벨류벨류벨류
                  벨류벨류벨류벨류벨류벨류벨류
                </SubDescriptionValue>
              </SubDescriptionBox>
              <SubDescriptionBox>
                <SubDescriptionLabel>라벨</SubDescriptionLabel>
                <SubDescriptionValue>
                  벨류벨류벨류벨류벨류벨류벨류벨류벨류
                  벨류벨류벨류벨류벨류벨류벨류
                </SubDescriptionValue>
              </SubDescriptionBox>
              <SubDescriptionBox>
                <SubDescriptionLabel>라벨</SubDescriptionLabel>
                <SubDescriptionValue>
                  벨류벨류벨류벨류벨류벨류벨류벨류벨류
                  벨류벨류벨류벨류벨류벨류벨류
                </SubDescriptionValue>
              </SubDescriptionBox>
            </ProjectContentExplanWrap>
          </ProjectContentWrap>
        </ProjectItem>
      </ItemWrap>
    </SkillWrap>
  );
};

export default ProjectBox;
