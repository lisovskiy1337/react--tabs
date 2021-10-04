import React, { useState } from 'react'
import styled, { css } from 'styled-components'


export const StyledTab = styled.div`
    margin: 0 15px;
    padding: 10px 0;
    color: #000; 
    cursor: pointer;
    position: relative;
    transition: 0.35s;    
`

const Tab = ({label, value, bg}) => {

 

    return (
      <StyledTab className='tut' value={value}  bg={bg} >
      {label}
      </ StyledTab>
    )
}

export default Tab
