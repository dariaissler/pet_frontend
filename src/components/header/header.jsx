import React, { useState, useContext, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'

// import { AuthPage } from '../auth/auth'
import { BackArrow } from '../arrow_back'
import logo from '../../assets/img/logo.jpg'
import { AuthModal } from '../auth/modal'

import { AuthContext } from '../../context/AuthContext';



export const Header = () => {
  const auth = useContext(AuthContext)
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (auth.isAuthenticated) {
      setShow(false)
    }
  }, [auth.isAuthenticated])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logoutHandler = async () => {
    auth.logout()
  }


  return (
    <div className='navbar' style={{ backgroundColor: '#FDB348', boxShadow: "none", padding: "20px", marginBottom: "30px", height: "140px" }}>
      <a className='col-md-1' style={{ fontSize: "2.1rem", color: "#662ED3" }} href="/">
        <img src={logo} alt="logo" />
      </a>
      <BackArrow />
      {/* <a>Sign in/Sign Up</a> */}
      {/* <AuthPage /> */}
      {auth.isAuthenticated ? <button style={{ background: "none", border: "none", color: "#662ED3" }} onClick={logoutHandler}>Logout</button> : <button onClick={handleShow} style={{ background: "none", border: "none", color: "#662ED3" }}>Sign up/Sign in</button>}
      <AuthModal className='col-md-2' show={show} onHide={handleClose} />
    </div>
  )
}