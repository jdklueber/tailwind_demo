import React from "react";
import Tabs from "./Tabs";

function Header({setCurrentTab, currentTab}) {

    return (
        <div>
            <div className={"text-4xl text-red-900 border-b-4 border-red-900 bg-red-100 p-5 mb-5"}>Fancy Dancy People Lister</div>
            <div>
                <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab}/>
            </div>

        </div>
    )
}


export default Header;