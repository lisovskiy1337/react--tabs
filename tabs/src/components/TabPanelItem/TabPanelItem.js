import React, { useState } from 'react'
import styled, { css } from 'styled-components'


const StyledTabPanelItem = styled.div`
    margin: 0 15px;
    padding: 10px 5px;
    color: #000; 
    cursor: pointer;
    position: relative;
    transition: 0.35s;
    ${(p) => p.tabIndex === p.itemIndex && css`
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        transition: 0.35s;
        border-bottom: 2px solid purple;
      }       
    `}

    
`

const TabPanelItem = ({tabIndex, itemIndex, label, handleChange }) => {

 

    return (
      <StyledTabPanelItem
      
      onClick={handleChange} tabIndex={tabIndex} itemIndex={itemIndex}>
         {label}
      </StyledTabPanelItem>
    )
}

export default TabPanelItem
