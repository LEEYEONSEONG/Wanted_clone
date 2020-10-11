import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import Area from './Area';
import Career from './Career';
import SortFilter from './SortFilter';

function FilterContainer({handleChange}) {

  return (
    <Container>
      <SmallContainer>
        <Tag />
        <Area />
        <Career />
      </SmallContainer>
      <SortFilter handleChange={handleChange} />
    </Container>
  );
}

export default FilterContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 19px;
  padding-top: 10px;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 956px;
  height: 40px;
`;
