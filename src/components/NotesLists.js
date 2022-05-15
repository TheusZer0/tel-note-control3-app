function NotesLists (props) {

    console.log(props.notes)

    if (props.notes !== undefined)
        return(
        <>
            <div>
                    {
                        props.notes.map((note,index) => (


                            // eslint-disable-next-line react/style-prop-object
                            <div className="card">
                                <h5 className="card-header" >Nota Numero: {note.id}</h5>
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">{note.data}</p>
                                    <a href="#" className="btn btn-primary">Editar Nota</a>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </>
    )

}

export default NotesLists