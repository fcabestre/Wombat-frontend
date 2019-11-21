import React from "react";
import styled, { css } from "styled-components";

type LabelPropsType = {
  children: string;
  onClick?: Function;
};

const LabelDiv = styled.div`
  color: gray;
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
