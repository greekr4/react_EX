import styled from 'styled-components';

const SkillBox = () => {
  const SkillWrap = styled.div`
    height: 70rem;
  `;

  const ItemWrap = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-content: space-around;
    height: calc(100% - (7.5rem));
  `;

  const SkillItem = styled.div`
    margin: 1rem;
    background-color: white;
    border-radius: 10px;
    width: 15rem;
    padding: 1rem;
  `;

  const SkillTitle = styled.div`
    font-size: 2rem;
    padding: 0.5rem;
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

  return (
    <SkillWrap>
      <ItemWrap>
        <SkillItem>
          <SkillTitle>Skill Title</SkillTitle>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </SkillItem>
        <SkillItem>
          <SkillTitle>Skill Title</SkillTitle>
          <Skill />
          <Skill />
        </SkillItem>
        <SkillItem>
          <SkillTitle>Skill Title</SkillTitle>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </SkillItem>
        <SkillItem>
          <SkillTitle>Skill Title</SkillTitle>
          <Skill />
          <Skill />
          <Skill />
        </SkillItem>
        <SkillItem>
          <SkillTitle>Skill Title</SkillTitle>
          <Skill />
          <Skill />
          <Skill />
        </SkillItem>
      </ItemWrap>
    </SkillWrap>
  );
};

export default SkillBox;
