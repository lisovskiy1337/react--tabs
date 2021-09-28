import React, { useState } from 'react'
import styled from 'styled-components'
import Tab from '../Tab/Tab'

const StyledTabs = styled.div`
    width: 100%;
`

const Tabs = ({tabIndex}) => {
   
    const tabData = [
        {label: 'content1', bg: '#659DB4'},
        {label: 'content2', bg: '#9992FF'},
        {label: 'content3',  bg: '#254284'}
    ];


    return (
        <StyledTabs>
            {tabData.map((tab, i) => {
                const {label, bg} = tab;

               
                    return (
                        <Tab
                        key={i}
                        itemIndex={i}
                        label={label}
                        bg={bg}
                        tabIndex={tabIndex}
                        />
                    )
               
               
            })
            }
           
        </StyledTabs>
    )
}

export default Tabs
