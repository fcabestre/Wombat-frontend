import React from "react";
import styled, { css } from "styled-components";

interface LabelPropsType {
  children?: string;
  onClick?: Function;
  highlight?: boolean;
}

const LabelDiv = styled.div<LabelPropsType>`
  margin: 5px;
  color: ${props => (props.highlight ? "white" : "gray")};
  background: ${props => (props.highlight ? "gray" : "white")};
  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
`;

const Label = ({ children, onClick, highlight }: LabelPropsType) => (
  <LabelDiv
    className="Label"
    highlight={highlight}
    onClick={onClick ? () => onClick() : undefined}
  >
    {children}
  </LabelDiv>
);

export default Label;
