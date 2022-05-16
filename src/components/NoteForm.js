import axios from "axios";
import {body} from "koa/lib/response";
import {Link} from "react-router-dom";

function NoteForm({notesDataForm,setDataForm}){

    const inputHandleChange = (e) =>{
        if(e.target.id==="dataDescription"){
            setDataForm(e.target.value)
        }
    }


    function handleChange(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/create-note', {
            data: notesDataForm
        }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        window.location.href = "/get-all-notes";
    }

    return (
        <>

            <div className='container' style={{ padding: "40px" }}>
                <div className='row justify-content-center'>
                    <div className="col-mb-3">
                        <form style={{ border: "2px solid #FFD4CB", borderRadius: "20px", padding: "40px" }}>
                            <div className="mb-3" style={{ paddingTop: "14px" }}>
                                <label for="exampleFormControlTextarea1" className="form-label" style={{ border: "2px solid #FFD4CB", borderRadius: "20px", padding: "5px" }}>Descripcion de la Nota</label>
                                <input type="text" className="form-control" id="dataDescription" placeholder="Ingresa tu descripcion" onChange={inputHandleChange} value={notesDataForm}></input>
                            </div>
                            <div className='container' style={{ padding: "10px" }}>


                                <div className="d-grid gap-2 col-6 mx-auto">
                                    {/* eslint-disable-next-line no-template-curly-in-string */}
                                    <Link type="submit" className="btn btn-success mb-3" onClick={handleChange} to="/get-all-notes">Confirmar Nota
                                    </Link>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NoteForm
