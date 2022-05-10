import React from "react";

function TabItem({label, setter, currentTab}) {
    const prefix = currentTab === label ? ">" : "";

    return (
        <li onClick={setter}>
            {`${prefix} ${label}`}
        </li>
    )
}


export default TabItem;