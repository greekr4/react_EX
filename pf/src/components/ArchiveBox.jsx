import styled from 'styled-components';

const ArchiveWrap = styled.div`
  height: 20rem;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  height: calc(100% - (7.5rem));
`;

const ArchiveItem = styled.div`
  margin: 1rem;
  background-color: white;
  border-radius: 10px;
  width: 15rem;
  padding: 1rem;
`;

const ArchiveTitleWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ArchiveTitleImg = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: black;
`;

const ArchiveTitle = styled.div`
  font-size: 2rem;
  padding: 0.5rem;
`;

const ArchiveLink = styled.div`
  padding: 0.5rem 0 0.5rem 0;
  color: #5757ff;
  font-weight: 500;
`;

const ArchiveSubTitle = styled.div``;

const ArchiveList = styled.div`
  &&::before {
    content: '->';
    padding-right: 0.5rem;
  }
`;

const ArchiveBox = () => {
  return (
    <ArchiveWrap>
      <ItemWrap>
        <ArchiveItem>
          <ArchiveTitleWrap>
            <ArchiveTitleImg />
            <ArchiveTitle>타이틀</ArchiveTitle>
          </ArchiveTitleWrap>
          <ArchiveLink>링크</ArchiveLink>
          <ArchiveSubTitle>서브타이틀</ArchiveSubTitle>
          <ArchiveList>리스트1</ArchiveList>
          <ArchiveList>리스트1</ArchiveList>
          <ArchiveList>리스트1</ArchiveList>
          <ArchiveList>리스트1</ArchiveList>
        </ArchiveItem>
      </ItemWrap>
    </ArchiveWrap>
  );
};

export default ArchiveBox;
