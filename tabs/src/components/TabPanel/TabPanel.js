import React, { useState } from 'react'
import styled from 'styled-components'
import TabPanelItem from '../TabPanelItem/TabPanelItem'


const StyledTabPanel = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #cecece; 
`


const TabPanel = ({handleChange, tabIndex}) => {

    const tabsPanelData = [
        {label: 'tab1'},
        {label: 'tab2'},
        {label: 'tab3'}
    ];

   


    return (
        <StyledTabPanel>
            
            {tabsPanelData.map((tabPanelItem, i) => {
                const {label} = tabPanelItem;
                return (
                    <TabPanelItem
                    key={i}
                    itemIndex={i}
                    tabIndex={tabIndex}
                    label={label}
                    handleChange={() => handleChange(i)}
                  />
                )
            })}
        </StyledTabPanel>
    )
}

export default TabPanel
