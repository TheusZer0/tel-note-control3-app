import React from "react";

import {useParams} from "react-router";

function oneNote () {
    let { id } = useParams();
    console.log(id)
    return(
        <div>
            <h2>User {id}</h2>
        </div>

    )

}

export default oneNote