import React from "react";
import styled from "styled-components";

type LabelPropsType = {
  children: string;
  onClick?: Function;
};

const LabelDiv = styled.div`
  color: gray;
`;

const Label = ({ children, onClick }: LabelPropsType) => (
  <LabelDiv className="Label" onClick={() => onClick && onClick()}>
    {children}
  </LabelDiv>
);

export default Label;
