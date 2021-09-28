import React from 'react'
import styled from 'styled-components'

const StyledTab = styled.div`
    width: 100%;
    ${(p) => p.tabIndex === p.itemIndex ? 'display: grid' : 'display: none'};
    place-items: center;
    height: 100vh;
    background: ${p => p.bg ? p.bg : '#fff'};
  
  
`

const Tab = ({label, itemIndex, activeClass, bg, tabIndex}) => {
    return (
        <StyledTab  itemIndex={itemIndex} bg={bg} tabIndex={tabIndex}>
           {label}
        </StyledTab>
    )
}

export default Tab

  // transform: ${p => p.activeClass ? 'translateX(0)' : 'translateX(-100%)'});
//   className={ activeClass ? activeClass : ''}