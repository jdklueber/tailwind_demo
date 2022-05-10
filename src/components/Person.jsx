import React from "react";

function Person({person}) {

    return (
        <div className={"w-48 border-2 m-5 p-5 border-red-900 rounded-3xl bg-red-50"}>
            <img className={"w-24 mx-auto rounded-full border-2 p-2"} src={person.avatar}/>
            <div className={"my-4 mx-auto text-md text-center text-red-900"}>
                {person.first_name} {person.last_name}
            </div>
            <div className={"mx-auto max-w-min"}>
                <a className={"bg-green-300 p-2 rounded-2xl border-green-900 border-2"}  href={"mailto:" + person.email}>Email</a>
            </div>

        </div>
    )
}


export default Person;