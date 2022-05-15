function NoteForm(){

    return (
        <>
            <div className='container' style={{ padding: "40px" }}>
                <div className='row justify-content-center'>
                    <div class="col-mb-3">
                        <form style={{ border: "2px solid #FFD4CB", borderRadius: "20px", padding: "40px" }}>
                            <div class="mb-3" style={{ paddingTop: "14px" }}>
                                <label for="exampleFormControlTextarea1" class="form-label" style={{ border: "2px solid #FFD4CB", borderRadius: "20px", padding: "5px" }}>Descripcion de la Nota</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ingresa tu descripcion"></textarea>
                            </div>
                            <div className='container' style={{ padding: "10px" }}>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button type="submit" class="btn btn-success mb-3" >Confirmar Nota</button>
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
