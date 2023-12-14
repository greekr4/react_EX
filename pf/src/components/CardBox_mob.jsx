import styled from 'styled-components';

const BoxWrap = styled.div`
  display: flex;
  width: 100%;
  height: 45rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  flex-wrap: wrap;
`;

const BoxItem = styled.div`
  display: flex;
  width: 100%;
  height: 7rem;
  justify-content: center;
  align-items: center;
`;

const Imgbox = styled.div``;

const Img = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${props => props.iconUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* margin-right: 1rem; */
`;

const TextBox = styled.div`
  width: 63%;
  margin-left: 0.5rem;
`;

const TextTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
`;
const TextContent = styled.div`
  margin-top: 0.2rem;
  font-size: 1rem;
  word-break: break-all;
  text-align: center;
`;

const CardBox_mob = ({ content }) => {
  return (
    <BoxWrap>
      {content.map((e, index) => {
        return (
          <>
            <BoxItem>
              <Imgbox>
                <Img iconUrl={e.iconUrl} />
              </Imgbox>
              <TextBox>
                <TextTitle>{e.title}</TextTitle>
                <TextContent>{e.content}</TextContent>
              </TextBox>
            </BoxItem>
          </>
        );
      })}
    </BoxWrap>
  );
};

export default CardBox_mob;
