import React, { useState, useEffect} from 'react';
import styled from 'styled-components';

function RecruitCompanyLists({handleChange, filterValue}) {
  // const [filterValue , setFilterValue] = useState("date");
  const [recruitCompanydata, setRecruitCompanydata] = useState([]);  
  // console.log("메인화면"+filterValue);
    // useEffect(() => {
    //   fetch('http://localhost:3000/data/CompanyLists/recruitCompanyData.json')
    //     .then((response) => response.json())
    //     .then((recruitCompanydata) =>
    //       setRecruitCompanydata(recruitCompanydata.recruitCompanyData)
    //     );
    // });
    // useEffect(() => {
    //   console.log("recruitCompanydata : "+filterValue)}, [filterValue]);
   

  // 백엔드 통신
    useEffect(() => {
      fetch(`http://10.58.4.18:8000/recruit/?order=${filterValue}`)
        .then((response) => response.json())
        .then((response) => setRecruitCompanydata(response.data.recruit_list))},[filterValue]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/data/CompanyLists/recruitCompanyData.json')
  //     .then((response) => response.json())
  //     .then((recruitCompanydata) =>
  //       setRecruitCompanydata(recruitCompanydata.recruitCompanyData)
  //     );
  // });

  return (
    <Container>
      {recruitCompanydata.map((el) => (
        <CompanyListItem key={el.id}>
          <ImgContainer>
            <Img src={el.thumbnail_url} alt="회사 이미지" />
            {/* <Like onClick={() => setLikeIconColr('red')} />
          <LikeIcon LikeIconColor={LikeIconColor}>
            <i className="fas fa-heart" />
          </LikeIcon> */}
          </ImgContainer>
          <ContentBox>
            <Title>{el.title}</Title>
            <CompanyName>{el.company_name}</CompanyName>
            <ResponseRate percent={el.response_rate}>
              응답률 매우 높음
            </ResponseRate>
            <Location>
              <City>{el.location}</City>
              <Area>한국</Area>
            </Location>
            <Reward>채용보상금 1,000,000원</Reward>
          </ContentBox>
        </CompanyListItem>
      ))}
    </Container>
  );
}

export default RecruitCompanyLists;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin-top: 50px;
`;

const CompanyListItem = styled.div`
  width: 250px;
  height: 355px;
  cursor: pointer;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 250px;
  height: 187.5px;
`;

const Img = styled.img`
  position: absolute;
  width: 250px;
  height: 187.5px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #5f5f5f;
`;

// const Like = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   width: 60px;
//   height: 30px;
//   border-radius: 5px;
//   background-color: black;
//   opacity: 0.5;
//   cursor: pointer;
// `;

// const LikeIcon = styled.span`
//   position: absolute;
//   top: 18px;
//   right: 33px;
//   color: ${({ LikeIconColor }) => LikeIconColor};
//   opacity: 0.8;
//   font-size: 13px;
// `;

const ContentBox = styled.div`
  width: 250px;
  height: 148px;
  padding: 14px 10px;
`;

const Title = styled.div`
  width: 230px;
  height: auto;
  color: #333333;
  font-size: 18px;
  font-weight: bolder;
`;

const CompanyName = styled.div`
  width: 230px;
  height: 22px;
  margin-top: 10px;
  color: #333333;
  font-size: 15px;
  font-weight: bolder;
`;

const ResponseRate = styled.div`
  width: 100px;
  height: 19px;
  margin-top: 2px;
  margin-bottom: 5px;
  padding: 2px 6px;
  color: #00aead;
  font-size: 11px;
  font-weight: bolder;
  border: 1px solid #00aead;
  border-radius: 2px;
  display: ${({ percent }) => (percent >= 95 ? 'none' : 'hidden')};
`;

const Location = styled.div`
  position: relative;
  width: 230px;
  height: 22px;
  padding-top: 1px;
`;

const City = styled.span`
  color: #999999;
  font-size: 12px;
`;

const Area = styled(City.withComponent('span'))`
  :before {
    content: '・';
  }
`;

const Reward = styled.div`
  width: 230px;
  height: 18px;
  margin-top: 6px;
  color: #5f5f5f;
  font-size: 12px;
`;
