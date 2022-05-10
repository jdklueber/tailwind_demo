import React from "react";

function Person({person}) {

    return (
        <div>
            {person.id} {person.first_name} {person.last_name} {person.email} {person.gender} {person.ip_address}
        </div>
    )
}


export default Person;