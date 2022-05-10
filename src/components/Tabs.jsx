import React from "react";
import TabItem from "./TabItem";

function Tabs({setCurrentTab, currentTab}) {

    return (
        <ul>
            { ['ALL','A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S',
                'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
                .map(e =>
                <TabItem key={e} label={e} currentTab={currentTab} setter={() => { setCurrentTab(e)}}/>)
            }
        </ul>
    )
}


export default Tabs;