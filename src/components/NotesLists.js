function NotesLists (props) {

    console.log(props.notes)

    if (props.notes !== undefined)
        return(
        <>
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    {
                        props.notes.map((note,index) => (
                            <div key={index} className='row'>
                                <h5 className="card-title">{note.data}</h5>
                            </div>
                        ))
                    }
                    <a href="#" className="btn btn-primary">BUTTON</a>
                </div>
            </div>
        </>
    )

}

export default NotesLists