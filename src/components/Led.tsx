import styled from "styled-components";

export interface LedPropsType {
  color: string;
}

const Led = styled.div<LedPropsType>`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background: ${props => props.color};
  margin: 5px;
`;

export default Led 