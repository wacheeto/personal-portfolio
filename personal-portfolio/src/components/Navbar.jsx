import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  sticky-top shadow-sm  " id="navbar-header">
        <div className="container-fluid px-3 py-4">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" aria-controls="navbarNav" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav mx-auto ">
                    <li className="nav-item ">
                        <a className="nav-link text-white" href='/'>
                            Home
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-white" href='#skills'>
                            About
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-white" href='#projects'>
                            Projects
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-white" href='#contact'>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar