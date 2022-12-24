import React, { useState, useContext, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'

import { Login } from './login'
import { Register } from './auth';
import { AuthContext } from '../../context/AuthContext';
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook';


export const AuthModal = (props) => {

    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, error, request, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const [show, setShow] = useState(false)
    const [register, setRegister] = useState(false)

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const openRegister = () => {
        setRegister(!register)
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', { ...form })
            setShow(!show)
            message(data.message)
            loginHandler()
        } catch (e) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
            setShow(!show)
            message(data.message)

        } catch (e) { }
    }

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Body>
                {register
                    ? <Register changeHandler={changeHandler} registerHandler={registerHandler} loading={loading} />
                    : <Login changeHandler={changeHandler} loginHandler={loginHandler} loading={loading} />
                }
            </Modal.Body>
            <Modal.Body>
                {register
                    ? (
                        <div style={{ display: "flex", alignItems: "baseline" }}>
                            <p style={{ color: "#794ECD" }}>Already have an account? </p>
                            <button onClick={openRegister} style={{ backgroundColor: "#FDB348", color: "#ffffff", marginLeft: "20px" }} className='btn'>Login</button>
                        </div>
                    )
                    : (
                        <div style={{ display: "flex", alignItems: "baseline" }}>
                            <p style={{ color: "#794ECD" }}>Don't have an account yet? </p>
                            <button onClick={openRegister} style={{ backgroundColor: "#FDB348", color: "#ffffff", marginLeft: "20px" }} className='btn'>Register</button>
                        </div>
                    )
                }
            </Modal.Body>
        </Modal>
    )
}