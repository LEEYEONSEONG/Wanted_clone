import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const moveSlideLength = 420;

function MainSlide() {
  const [jobCategoryData, setjobCategoryData] = useState([]);
  const [x_axis, setX_axis] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/data/CompanyLists/jobCategoryData.json')
      .then((response) => response.json())
      .then((jobCategoryData) =>
        setjobCategoryData(jobCategoryData.jobCategoryData)
      );
  }, []);

  return (
    <Container>
      <Content>
        <PreButton
          preButton
          preVisibleNum={x_axis}
          onClick={() => setX_axis(x_axis + moveSlideLength)}
        >
          <i className="fas fa-angle-left leftArrow" />
        </PreButton>
        <Slide>
          {jobCategoryData.map((el) => (
            <List key={el.id}>
              <SlideItem left={x_axis}>
                <Img src={el.img} alt={el.alt} />
                <OpacityBox />
                <CategoryText>{el.category}</CategoryText>
              </SlideItem>
            </List>
          ))}
        </Slide>
        <NextButton
          nextButton
          nextVisibleNum={x_axis}
          onClick={() => setX_axis(x_axis - moveSlideLength)}
        >
          <i className="fas fa-angle-right rightArrow" />
        </NextButton>
      </Content>
    </Container>
  );
}

export default MainSlide;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #e1e2e3;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 1200px;
  height: 120px;
  overflow: hidden;
  cursor: pointer;
`;

const List = styled.li`
  list-style: none;
  margin-right: 10px;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  height: 120px;
  overflow: hidden;
`;

const Button = styled.button`
  position: absolute;
  width: 150px;
  height: 80px;
  background-color: white;
  opacity: 0.33;
  z-index: 3;
  cursor: pointer;
`;

const PreButton = styled(Button.withComponent('button'))`
  left: 10px;
  visibility: ${({ preVisibleNum, preButton }) =>
    preVisibleNum === 0 ? (preButton = 'hidden') : ''};
  cursor: pointer;

  .leftArrow {
    font-size: 50px;
    margin-right: 80px;
  }
`;

const NextButton = styled(Button.withComponent('button'))`
  right: 10px;
  visibility: ${({ nextVisibleNum, nextButton }) =>
    nextVisibleNum === -(moveSlideLength * 3) ? (nextButton = 'hidden') : ''};

  .rightArrow {
    font-size: 50px;
    margin-left: 80px;
  }
`;

const SlideItem = styled.div`
  position: relative;
  width: 140px;
  height: 80px;
  left: ${({ left }) => left}px;
  transition: left 0.3s ease;
`;

const Img = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;

const OpacityBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.8) 0,
    rgba(46, 49, 49, 0.5)
  );
`;

const CategoryText = styled.span`
  position: absolute;
  top: 32px;
  left: 28px;
  color: white;
  font-weight: bolder;
`;
