function NotesLists (props) {
    if (props.notes !== undefined)
        return(
        <>
            <div>
                    {
                        props.notes.map((note,index) => (

                            // eslint-disable-next-line react/style-prop-object
                            <div key={index} className="card">
                                <h5 className="card-header" >Nota Numero: {note.id}</h5>
                                <div className="card-body">
                                    <p className="card-text">{note.data}</p>
                                    <a href={"/edit-note/"+note.id} className="btn btn-primary">Editar Nota</a>
                                    <a href={"/get-note/"+note.id} className="btn btn-primary">Ver Nota</a>

                                </div>
                            </div>
                        ))
                    }
            </div>
        </>
    )

}

export default NotesLists