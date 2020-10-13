import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import SmsModal from "./SmsModal";

export default function Recommend() {
  useEffect(() => {
    fetch("http://localhost:3000/Data/Recommendation/FirstRecommend.json")
      .then((response) => response.json())
      .then((data) => setAllData(data.RecommendData));
  }, []);

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const setAllData = (data) => {
    setData(data);
    setFilteredData(data);
  };

  const [openModal, setOpenModal] = useState(false);

  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  const HandleFilter = useCallback(() => {
    if (userInput === "") {
      setFilteredData(data);
    }
    const filterSearch = data.filter((filterData) => {
      return filterData.name.includes(userInput);
    });
    setFilteredData(filterSearch);
  }, [setFilteredData, userInput]);

  useEffect(() => {
    HandleFilter();
  }, [HandleFilter, userInput]);

  return (
    <>
      <SmsModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className="littleContainer">
        <SearchFriend>
          <SearchButton type="submit" className="fa fa-search" />
          <SearchInput
            type="text"
            placeholder="친구 검색"
            name="search"
            value={userInput}
            onChange={handleChange}
          />
        </SearchFriend>
        <GuideBanner>
          <i className="fab fa-facebook"></i>
          <i className="fas fa-plus-circle"></i>
          <span>간단하게 네트워크 연결하고 지인들의 추천을 받아보세요.</span>
          <i className="fas fa-angle-right"></i>
        </GuideBanner>
        <ContentsWrapper>
          <SmsRecommend onClick={() => setOpenModal(true)}>
            <i className="fas fa-sms" />
            <div>SMS를 통해 추천</div>
          </SmsRecommend>
          {filteredData.map((FirstData, idx) => (
            <FirstRecommend key={idx}>
              <img src={FirstData.pic} alt="logo"></img>
              <div>{FirstData.name}</div>
              <span>첫 추천 해주기</span>
              <button>추천</button>
            </FirstRecommend>
          ))}
        </ContentsWrapper>
      </div>
    </>
  );
}

const SearchFriend = styled.form`
  display: flex;
  width: 100%;
  vertical-align: middle;
  position: relative;
`;

const SearchButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 30%;
  margin-left: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 35px;
  padding: 0 36px 0 46px;
  border: 0;
  border-radius: 3px;
  font-size: 15px;
  background-color: #e8e8e8;
  float: left;
`;

const GuideBanner = styled.div`
  display: flex;
  border-radius: 3px;
  background: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 60px;
  margin-top: 20px;
  cursor: pointer;
  span {
    margin: 19px 25px 19px 25px;
    font-size: 16px;
    color: #333;
  }
  i {
    color: #333;
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  @media (max-width: 1199px) and (min-width: 992px) {
    margin-bottom: 20px;
    width: calc(25%-25px);
  }
  button:nth-of-type(4n) {
    margin: 0;
  }
`;

const SmsRecommend = styled.button`
  position: relative;
  height: 250px;
  border-radius: 3px;
  border: solid 1px #e0e0e0;
  text-align: center;
  cursor: pointer;
  background: white;
  width: 23.5%;
  margin-bottom: 20px;
  margin-right: 20px;
  i {
    color: #258bf7;
    font-size: 74px;
    margin: 60px auto 0;
  }
  div {
    color: #248bf7;
    font-size: 16px;
    font-weight: 500;
    margin: 27px auto 54px;
  }
`;

const FirstRecommend = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 250px;
  border-radius: 3px;
  border: solid 1px #e0e0e0;
  text-align: center;
  background: white;
  width: 23.5%;
  margin-bottom: 20px;
  margin-right: 20px;
  img {
    border-radius: 9999px;
    margin-top: 30px;
    width: 66px;
    height: 66px;
  }
  div {
    font-size: 18px;
    color: #333333;
    margin: 12px 20px 10px;
    font-weight: bold;
  }
  span {
    font-size: 13px;
    color: #999999;
    margin: 0px 11.8281px 24px 11.8125px;
  }
  button {
    color: white;
    background-color: #258bf7;
    margin: 0px 63.3281px 30px;
    border-radius: 20px;
    width: 109.69px;
    height: 36px;
    cursor: pointer;
  }
`;
