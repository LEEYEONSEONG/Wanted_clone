import React,{useState} from 'react';
import MainSlide from './Components/MainSlide';
import FilterContainer from './Components/FilterContainer';
import BookMark from './Components/BookMark';
import ActiveRecruitment from './Components/ActiveRecruitment';
import RecruitCompanyLists from './Components/RecruitCompanyLists';
import styled from 'styled-components';

function CompanyLists() {

  const [filterValue , setFilterValue] = useState("date");

  const handleChange = (e) => {
    setFilterValue(e.target.value)
  }
    console.log(filterValue);
  return (
    <>
      <MainSlide />
      <Container>
        <FilterContainer handleChange={handleChange} />
        <BookMark />
        <ActiveRecruitment />
        <RecruitCompanyLists filterValue={filterValue} handleChange={handleChange}/>
      </Container>
    </>
  );
}

export default CompanyLists;

const Container = styled.div`
  width: 1050px;
  height: 800px;
  margin: 0px auto;
  padding: 20px 0px 80px;
`;
