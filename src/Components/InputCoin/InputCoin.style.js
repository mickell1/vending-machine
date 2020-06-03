import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 200px;
  height: 120px;
`;

export const Item = styled.div`
  font-size: 1.5em;
  margin: 5px 15px 0 15px;
  padding: 5px;
  background-color: #87CEEB;
  color: #006400;
  width: 60px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Total = styled.div`
  font-size: 1.5em;
  margin: 25px 15px 0 15px;
  padding: 5px;
  text-align: center;
  background-color: #32CD32;
  color: white;
  width: 200px;
  &:hover {
    cursor: pointer;
  }
`;

export const Cancel = styled.div`
  font-size: 1.3em;
  margin: 25px 15px 0 15px;
  padding: 5px;
  text-align: center;
  background-color: #FF0000;
  color: white;
  width: 200px;
  &:hover {
    cursor: pointer;
  }
`;

export const Change = styled.div`
  font-size: 1.3em;
  margin: 25px 15px 0 15px;
  padding: 5px;
  text-align: center;
  background-color: #696969;
  color: #ffffff;
  width: 200px;
  &:hover {
    cursor: pointer;
  }
`;