import axios from "axios";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {useEffect, useState} from 'react'

function UpdateNote(){

    //Esto pilla la nota
    let { id } = useParams();
    let test = 'http://localhost:8080/get-note/'+id.toString()
    //loeader
    const [newLoaded, setNewLoaded] = useState(false)
    //data bruta
    const [oneNotesDataNew, setOneNotesDataNew] = useState()
    //cambios en el text
    const [oneNotesDataString, setOneNotesDataString] = useState("")


    useEffect(() => {
        const fetchData = async () => {
            if(!newLoaded) {
                const result = await axios.get(test)
                if (result) {
                    setNewLoaded(true)
                    setOneNotesDataNew(result.data)
                }
            }
        }
        fetchData()
    })

    let newNote;
    if (oneNotesDataNew !== undefined){
        newNote = oneNotesDataNew["data"]

    }

    const inputHandleChange = (e) =>{
        if(e.target.id==="dataDescription"){
            setOneNotesDataNew(e.target.value)
        }
    }

    let path_response = 'http://localhost:8080/edit-note/'+id.toString()

    function handleChange(event) {
        console.log(typeof newNote)
        if (oneNotesDataNew !== undefined){
            newNote = oneNotesDataNew["data"]
        }
        event.preventDefault();
        axios.post(path_response,newNote,{headers: {'Content-Type': 'text/plain'}}
        ).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <>

            <div className='container' style={{ padding: "40px" }}>
                <div className='row justify-content-center'>
                    <div className="col-mb-3">
                        <form style={{ border: "2px solid #FFD4CB", borderRadius: "20px", padding: "40px" }}>
                            <div className="mb-3" style={{ paddingTop: "14px" }}>
                                <label for="exampleFormControlTextarea1" className="form-label" style={{ border: "2px solid #FFD4CB", borderRadius: "20px", padding: "5px" }}>Descripcion de la Nota</label>
                                <input type="text" className="form-control" id="dataDescription" placeholder="Ingresa tu descripcion" value={newNote} onChange={inputHandleChange}></input>
                            </div>
                            <div className='container' style={{ padding: "10px" }}>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    {/* eslint-disable-next-line no-template-curly-in-string */}
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UpdateNote