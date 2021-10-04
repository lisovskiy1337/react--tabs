import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'




const StyledTabs = styled.div`
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

const StyledTabsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
`

const TabSlider = styled.div`
    position: absolute;
    bottom: 0;
    left: ${(p) => `${p.left}px`};
    width: ${(p) => `${p.width}px`};
    height: 4px;
    background: #00abd5;
    transition: 0.3s;
    
`


const Tabs = ({handleChange, renderTab, options, value}) => {

    const [sliderInfo, setSliderInfo] = useState({width: 0, left: 0});
       
    const containerRef = useRef(null);
  
    const tabsRef = options.map(() => {
        return useRef(null);
    });
  
    useEffect(() => {
        const currentTab = options.findIndex((tab) => tab.value === value );
        
        if (tabsRef){
            setSliderInfo(prevState => ({
                ...prevState,
                width: tabsRef[currentTab].current.getBoundingClientRect().width  ,
                left: tabsRef[currentTab].current.getBoundingClientRect().left - containerRef.current.getBoundingClientRect().left
            }));
        }
      

    }, [value]);


    return (
      
        <StyledTabs className='panel'  >
            <StyledTabsContainer ref={containerRef}>
            {options.map((tab, i) => {  

                return (
                    <div 
                        key={i}  
                        className='wrapper'  
                        ref={tabsRef[i]}  
                        value={value} 
                        onClick={() => handleChange(tab.value)}
                    >
                    {renderTab(tab)}                       
                    </div>
             
              
                )
            })
            }
            <TabSlider width={sliderInfo.width} left={sliderInfo.left}></TabSlider>  
            
            </StyledTabsContainer>
        </StyledTabs>

        
        
    )
}

export default Tabs

