import React from 'react';
import styled from 'styled-components'

type LabelPropsType = { children: string }

const LabelDiv = styled.div`
  color: red
`

const Label = ({ children } : LabelPropsType ) => (
    <LabelDiv className="Label">
      {children}
    </LabelDiv>
  )

export default Label;
