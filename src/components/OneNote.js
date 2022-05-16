import React from "react";

import {useParams} from "react-router";
import {useEffect, useState} from 'react'
import axios from "axios";

function OneNote () {


    let { id } = useParams();

    const test = 'http://localhost:8080/get-note/'+id.toString()

    const [newLoaded, setNewLoaded] = useState(false)
    const [oneNotesData, setOneNotesData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            if(!newLoaded) {
                const result = await axios.get(test)
                if (result) {
                    setNewLoaded(true)
                    setOneNotesData(result.data)
                }
            }
        }
        fetchData()
    })

    let newId;
    let newNote;

    if (oneNotesData !== undefined){
        newId = oneNotesData["id"]
        newNote = oneNotesData["data"]
    }


    return(
        <>
            <div>
                {
                        <div className="card">
                            <h5 className="card-header" >Nota Numero: {newId}</h5>
                            <div className="card-body">
                                <p className="card-text">{newNote}</p>
                            </div>
                        </div>
                }
            </div>
        </>

        )

}

export default OneNote