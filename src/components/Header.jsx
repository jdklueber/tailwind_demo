import React from "react";
import Tabs from "./Tabs";

function Header({setCurrentTab, currentTab}) {

    return (
        <div>
            <div>Fancy Dancy People Lister</div>
            <div>
                <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab}/>
            </div>

        </div>
    )
}


export default Header;