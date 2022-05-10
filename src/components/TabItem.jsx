import React from "react";

function TabItem({label, setter, currentTab}) {
    const prefix = currentTab === label ? ">" : "";

    return (

        <option value={label}>
            {label}
        </option>
    )
}


export default TabItem;