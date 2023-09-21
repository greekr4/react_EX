import styled from 'styled-components';

const BoxWrap = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const BoxItem = styled.div`
  display: flex;
  width: 33.33%;
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

const TextBox = styled.div``;

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
                <h1>{e.title}</h1>
                <h2>{e.content}</h2>
              </TextBox>
            </BoxItem>
          </>
        );
      })}
    </BoxWrap>
  );
};

export default CardBox;
