import React from 'react';
import MainSlide from './Components/MainSlide';
import FilterContainer from './Components/FilterContainer';
import BookMark from './Components/BookMark';
import ActiveRecruitment from './Components/ActiveRecruitment';
import styled from 'styled-components';

function CompanyLists() {
  return (
    <>
      <MainSlide />
      <Container>
        <FilterContainer />
        <BookMark />
        <ActiveRecruitment />
      </Container>
    </>
  );
}

export default CompanyLists;

const Container = styled.div`
  width: 1000px;
  height: 800px;
  margin: 0px auto;
  padding: 20px 0px 80px;
`;
