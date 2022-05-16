

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" >
                <div className="container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_UTFSM.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                Tel-Note
                </div>
                </a>
            </div>
            </nav>

            <div className="container-fluid">
                <a className="navbar-brand" href="/get-all-notes">Todas las Notas</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/create-note">Crear Nota</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
