import React from "react";
import styled from "styled-components";

function Resume() {
  return (
    <>
      <Background>
        <Container>
          <RecentDocBar>
            <p>최근 문서</p>
            <span>
              원티드 이력서 소개<i className="fas fa-info-circle"></i>
            </span>
          </RecentDocBar>
          <ContentsWrapper>
            <NewResume>
              <i className="far fa-copy" />
              <div> 새 이력서 작성 </div>
            </NewResume>
            <UploadFiles>
              <i className="fas fa-file-upload"></i>
              <div>파일 업로드</div>
            </UploadFiles>
          </ContentsWrapper>
        </Container>
      </Background>
    </>
  );
}

export default Resume;

const Background = styled.body`
  background-color: #f8f8fa;
  background-size: cover;
  height: 100vh;
`;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1060px;
  @media (min-width: 1200px) {
    width: 87.72%;
  }
`;

const RecentDocBar = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 15px 0px;
  p {
    font-size: 16px;
    font-weight: 600;
    color: #333333;
  }
  span {
    line-height: 1.4;
    color: #258bf7;
    font-size: 16px;
    font-weight: 600;
    i {
      margin-left: 8px;
    }
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  @media (max-width: 1199px) and (min-width: 992px) {
    margin-left: 20px;
    margin-bottom: 20px;
    width: calc(25%- 25px);
  }
`;

const NewResume = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 190px;
  position: relative;
  border: 1px solid #dbdbdb;
  background-color: white;
  cursor: pointer;
  width: 25%;
  padding: 6px 12px;
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 26px;
    background-color: #258bf7;
    border-radius: 50%;
    width: 74px;
    height: 74px;
  }
  div {
    font-size: 16px;
    color: #333333;
    margin: 20px 0px 0px;
    font-weight: bold;
  }
`;

const UploadFiles = styled(NewResume)`
  margin: 0 0 20px 20px;
  i {
    background-color: #f8f8fa;
    color: #333333;
  }
`;
