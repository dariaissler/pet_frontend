import React, { useContext, useState } from 'react'
import { StepsContext } from '../../context/StepsContext'
import Accordion from 'react-bootstrap/Accordion';
import { UilClock } from '@iconscout/react-unicons'
import { UilSuitcaseAlt } from '@iconscout/react-unicons'
import { UilCreditCard } from '@iconscout/react-unicons'
import Form from 'react-bootstrap/Form';
import { UilAngleDown } from '@iconscout/react-unicons'


const firstStepLayout = {
    "display": "flex",
    "justifyContent": "space-around",
    "alignItems": "center",
    "backgroundColor": "#f5f7fa",
    "marginBottom": "20px",
    "padding": "20px",
    "borderRadius": "28px",
}


export const Toggle = ({ component, title, time, price, desc, completeStep, id, completed }) => {


    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <div className="col s12 m12 l12">
                        <div className="row" style={{ padding: "5px" }}>
                            <div className='col-md-1 mb-2'>
                                {component}
                            </div>
                            <div className='col-md-5 mb-2'>
                                <h5 style={{ color: "#757575" }}>{title}</h5>
                            </div>
                            <div className='col-md-2 mb-2'>
                                <a style={{maxWidth: "100px", backgroundColor: "transparent", border: "1px solid #FDB348", color: "#FDB348", display: "flex", alignItems: "end" }} className='btn'>детали <UilAngleDown color="#FDB348" size="20" /></a>
                            </div>
                            <div className="col-md-2 mb-4" style={{ display: "flex", alignItems: "center", color: "#757575" }}><UilCreditCard color="#673ab7" size='30' />{price}</div>
                            <div className='col-md-2 mb-4' style={{ display: "flex", alignItems: "center", color: "#757575" }}><UilClock color="#673ab7" size='30' /><span>{time}</span></div>
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body className='step'>
                    <div style={{color: "#757575", padding: "0 50px"}}>
                        <p>{desc}</p>
                        <div style={{ display: "flex" }} className="col-md-4 mb-2">
                            {completed ? <label className='mt-1'>Вернуть в незаконченные</label> : <label className='mt-1'>Уже есть</label>}
                            <Form.Check onChange={() => completeStep(id)} style={{ marginLeft: "10px", fontSize: "18px" }} type="checkbox" />
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}