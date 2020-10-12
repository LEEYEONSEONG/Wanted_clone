import React from "react";
import styled from "styled-components";

function ApplyTemplate({
  handleMove,
  handleModal,
  handleShareModal,
  onLikeToggle,
  goToApply,
  likeToggle,
  likeNumber,
  modal,
}) {
  return (
    <ApplyTemplateBlock
      goToApply={goToApply}
      likeToggle={likeToggle}
      likeNumber={likeNumber}
      modal={modal}
    >
      <ApplyTemplateText>
        채용보상금
        <button onClick={handleShareModal}>
          <i className="fas fa-share-alt"></i>
        </button>
      </ApplyTemplateText>
      <ApplyTemplateHead>
        <li>
          <h4>추천인</h4>
          <ApplyTemplateText>5,000,000원</ApplyTemplateText>
        </li>
        <li>
          <h4>지원자</h4>
          <ApplyTemplateText>5,000,000원</ApplyTemplateText>
        </li>
      </ApplyTemplateHead>
      <ApplyTemplateBtn
        backgroundColor="white"
        color="#00c8a2"
        onClick={handleModal}
      >
        {modal ? (
          <i className="fas fa-bookmark"></i>
        ) : (
          <img alt="bookmarklogo" src="/Images/Detail/bookMark.png" />
        )}
        {modal ? <p>북마크 완료</p> : <p>북마크하기</p>}
      </ApplyTemplateBtn>
      <ApplyTemplateBtn
        onClick={handleMove}
        backgroundColor="#36f"
        color="white"
      >
        <p>지원하기</p>
      </ApplyTemplateBtn>
      <LikeForm>
        <ApplyLikeBtn onClick={onLikeToggle}>
          <img
            alt="like"
            src={
              likeToggle
                ? "/Images/Detail/like.png"
                : "/Images/Detail/likeActive.png"
            }
          />
          <span>{likeNumber}</span>
        </ApplyLikeBtn>
        <LikeUser likeToggle={likeToggle}>
          {likeToggle ? "" : <i className="fas fa-user-circle"></i>}
          <img alt="asda" src="/Images/Detail/image.png" />
        </LikeUser>
      </LikeForm>
    </ApplyTemplateBlock>
  );
}

export default ApplyTemplate;

const ApplyTemplateBlock = styled.div`
  width: 340px;
  height: 320px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  padding: 24px 20px;
  position: sticky;
  right: 0;
  top: 20px;
  display: ${(props) => (props.goToApply ? "none" : "block")};

  @media (max-width: 992px) {
    width: 100%;
    height: 46px;
    padding: 0;
    border: none;
    position: fixed;
    top: unset;
    bottom: 20px;
    display: flex;
    justify-content: center;

    div:nth-child(1) {
      display: none;
    }
    div:nth-child(2) {
      display: none;
    }
    button:nth-child(3) {
      display: none;
    }
    button:nth-child(4) {
      display: block;
      width: 97%;
      -webkit-box-shadow: 4px 21px 194px -85px rgba(214, 214, 214, 0.68);
      -moz-box-shadow: 4px 21px 194px -85px rgba(214, 214, 214, 0.68);
      box-shadow: 4px 21px 194px -85px rgba(214, 214, 214, 0.68);
    }

    div:nth-child(5) {
      display: none;
    }
  }
`;

const ApplyTemplateHead = styled.div`
  display: flex;
  margin: 24px 0;
  list-style: none;
  color: #999;
  line-height: 1.2;
  h4 {
    margin-bottom: 8px;
  }
  li {
    width: 50%;
    h4 {
      font-size: 14px;
    }
  }
`;

const ApplyTemplateText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  color: #333;
  i {
    font-size: 25px;
    color: #36f;
    cursor: pointer;
  }
`;

export const ApplyTemplateBtn = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 1px solid #e1e2e3;
  border-radius: 25px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  img {
    width: 13px;
    height: 17px;
    margin-right: 8px;
  }
  input {
    display: none;
  }
  label {
    cursor: pointer;
  }
  i {
    margin-right: 9px;
    color: ${(props) => (props.modal ? "00c8a2" : "")};
  }
`;

const ApplyLikeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #e1e2e3;
  margin-right: 12px;
  padding: 0 15px;
  font-weight: 600;
  background-color: white;
  outline: none;
  cursor: pointer;
  position: relative;
  img {
    width: 15px;
    height: 15px;
    bottom: 1px;
    margin-right: 10px;
  }
  i {
    position: absolute;
    right: 10px;
  }
`;

const LikeUser = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  position: relative;
  img {
    width: 26px;
    height: 27px;
    position: absolute;
    margin-left: ${({ likeToggle }) => (likeToggle ? "" : "21px")};
    border-radius: 50%;
  }

  i {
    font-size: 28px;
    color: lightgray;
    z-index: 1;
  }
`;

const LikeForm = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  position: relative;
`;
