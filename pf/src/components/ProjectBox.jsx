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
  width: 50rem;
  padding: 1rem;
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
`;

const ProjectContentWrap = styled.div`
  display: flex;
`;

const ProjectContentSliderWrap = styled.div`
  width: 50%;
  height: 20rem;
`;

const ProjectContentSlider = styled.div``;

const ProjectContentExplanWrap = styled.div`
  width: 50%;
  height: 20rem;
`;

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
  height: 18rem;
  background-color: aliceblue;
`;

const ProjectBox = () => {
  return (
    <SkillWrap>
      <ItemWrap>
        <ProjectItem>
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
            <ProjectContentExplanWrap>dd</ProjectContentExplanWrap>
          </ProjectContentWrap>
        </ProjectItem>
      </ItemWrap>
    </SkillWrap>
  );
};

export default ProjectBox;
