import styled from 'styled-components';

const BoxWrap = styled.div`
  display: flex;
  width: 65%;
  height: 17rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  flex-wrap: wrap;
`;

const BoxItem = styled.div`
  display: flex;
  width: 33.33%;
  height: 7rem;
  justify-content: center;
  align-items: center;
`;

const Imgbox = styled.div``;

const Img = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${props => props.iconUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-right: 1rem;
`;

const TextBox = styled.div`
  width: 50%;
  margin-left: 1rem;
`;

const TextTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
const TextContent = styled.div`
  margin-top: 0.2rem;
  font-size: 1rem;
  word-break: break-all;
`;

const CardBox = ({ content }) => {
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

export default CardBox;
