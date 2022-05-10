import React from "react";
import Person from "./Person";

function PeopleList({data, filter}) {
    const ppl = filter !== "ALL" ? data.filter(e => e.last_name.startsWith(filter)) : data;

    return (
        <div>
            {ppl.map(p => <Person key={p.id} person={p}/> )}
        </div>
    )
}


export default PeopleList;