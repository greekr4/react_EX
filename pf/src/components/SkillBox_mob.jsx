import styled from 'styled-components';
import frontend_img from '../assets/images/frontend.png';
import backend_img from '../assets/images/backend.png';
import mobile_img from '../assets/images/mobile.png';
import other_img from '../assets/images/other.png';

const SkillWrap = styled.div`
  height: 157rem;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-wrap: nowrap;
  align-content: space-around;
  align-items: center;
  height: calc(100% - (2rem));
  width: 60%;
  margin: 0 auto;
`;

const SkillItem = styled.div`
  margin: 1rem;
  background-color: white;
  border-radius: 10px;
  width: 18rem;
  padding: 1rem;
`;

const SkillTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding: 0.5rem;
  color: darkorange;
  border-bottom: 1px solid #456783;
`;

const Skill = styled.div`
  width: 5rem;
  height: 5rem;
  background: url(https://cdn-icons-png.flaticon.com/128/3214/3214746.png)
    no-repeat center;
  background-size: cover;
  margin: 10px;
`;

const SkillImg = styled.img`
  display: block;
  width: 100%;
`;

const SkillBox_mob = () => {
  return (
    <SkillWrap>
      <ItemWrap>
        <SkillItem>
          <SkillTitle>Frontend</SkillTitle>
          <SkillImg src={frontend_img}></SkillImg>
        </SkillItem>
        <SkillItem>
          <SkillTitle>Backend</SkillTitle>
          <SkillImg src={backend_img}></SkillImg>
        </SkillItem>
        <SkillItem>
          <SkillTitle>Mobile</SkillTitle>
          <SkillImg src={mobile_img}></SkillImg>
        </SkillItem>
        <SkillItem>
          <SkillTitle>Other</SkillTitle>
          <SkillImg src={other_img}></SkillImg>
        </SkillItem>
      </ItemWrap>
    </SkillWrap>
  );
};

export default SkillBox_mob;
