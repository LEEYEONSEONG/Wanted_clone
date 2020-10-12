import React from "react";
import styled from "styled-components";

function SortFilter() {
  return (
    <Container>
      <span className="tag">최신순</span>
      <i className="fas fa-angle-down"></i>
    </Container>
  );
}

export default SortFilter;

const Container = styled.button`
  position: relative;
  width: 104px;
  height: 40px;
  border: 1px solid #ececec;
  border-radius: 5px;
  padding-left: 16px;
  cursor: pointer;

  .tag {
    margin-right: 33px;
    font-size: 14px;
    color: #333333;
  }
  i {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 3px;
  }
`;
