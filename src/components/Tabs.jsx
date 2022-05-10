import React from "react";
import TabItem from "./TabItem";

function Tabs({setCurrentTab, currentTab}) {

    return (
        <div>
            <h1 className={"text-2xl inline"}>Select A Filter: </h1>
            <select className={"rounded-lg"}
                value={currentTab}
                onChange={(e)=> {setCurrentTab(e.currentTarget.value)}}>
            { ['ALL','A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S',
                'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
                .map(e =>
                <TabItem key={e} label={e}/>)
            }
            </select>
        </div>
    )
}


export default Tabs;