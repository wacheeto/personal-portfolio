import React from 'react'

function Footer() {
  return (
    <div className="py-5 d-flex align-items-center justify-content-center ">
        <div className="max-container w-100 text-white  ">
            <div className="d-flex gap-4">
              <a className="nav-link text-white" href='/'>
                  Home
              </a>
              <a className="nav-link text-white" href='#skills'>
                  About
              </a>
              <a className="nav-link text-white" href='#projects'>
                  Projects
              </a>
              <a className="nav-link text-white" href='#contact'>
                  Contact
              </a>
            </div>
        </div>
    </div>
  )
}

export default Footer