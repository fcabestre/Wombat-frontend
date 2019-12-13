import React from "react";
import styled, { css } from "styled-components";

interface LabelPropsType {
  children: string;
  onClick?: Function;
}

const LabelDiv = styled.div`
  color: gray;
  margin: 5px;
  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
`;

const Label = ({ children, onClick }: LabelPropsType) => (
  <LabelDiv className="Label" onClick={onClick ? () => onClick() : undefined}>
    {children}
  </LabelDiv>
);

export default Label;
