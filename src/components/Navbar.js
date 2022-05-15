import React from 'react'

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <div class="container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_UTFSM.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                Tel-Note
                </div>
                </a>
            </div>
            </nav>

            <div class="container-fluid">
                <a class="navbar-brand" href="#">Todas las Notas</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Crear Nota</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Sobre la Aplicacion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sobre el equipo</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ayuda
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">FAQ</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Contacto</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
