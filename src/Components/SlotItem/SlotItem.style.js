import styled from "styled-components";

export const DivBox = styled.div`
  border: 1px solid #20B2AA;
  height: 160px;
  width: 120px;
  display: flex;
  flex-direction: column;
  margin-left: 2px;
  margin-top: 2px;
`;
export const Img = styled.img`
  height: 60px;
  flex-grow: 1;
`;

export const DivName = styled.div`
  font-size: 0.8em;
  text-align: center;
`;

export const DivPrice = styled.div`
  text-align: center;
`;

export const DivStock = styled.div`
  text-align: center;
`;

export const DivStatus = styled.div`
  background-color: ${props =>
    props.available ? "#32CD32" : "#191970"};
  height: 20px;
  width: 80%;
  margin: auto;
  &:hover {
    cursor: ${props => (props.available ? "pointer" : "arrow")};
  }
`;
