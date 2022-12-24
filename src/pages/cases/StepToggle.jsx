import React, { useContext, useState } from 'react'
import { StepsContext } from '../../context/StepsContext'
import Accordion from 'react-bootstrap/Accordion';
import { UilClock } from '@iconscout/react-unicons'
import { UilSuitcaseAlt } from '@iconscout/react-unicons'
import Form from 'react-bootstrap/Form';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { redirect } from 'react-router-dom';


const firstStepLayout = {
    "display": "flex",
    "justifyContent": "space-around",
    "alignItems": "center",
    "backgroundColor": "#f5f7fa",
    "marginBottom": "20px",
    "padding": "20px",
    "borderRadius": "28px",
}


export const StepToggle = ({ steps, filtered, completeStep, completed, percent }) => {


    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <div className="col s12 m12 l12">
                        <div className="row" style={{ alignItems: "center", padding: "5px" }}>
                            <div className='col-md-1 mb-2'>
                                <UilSuitcaseAlt color="#673ab7" size="40" />
                            </div>
                            <div className='col-md-9 mb-2'>
                            </div>
                            {/* <div className='col-md-2'>
                        <CircularProgressbar 
                        value={percent} 
                        text={`${percent}%`}
                        strokeWidth={12}
                        styles={buildStyles({
                            rotation: 0,
                           

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                        
                            // Text size
                            textSize: '16px',
                        
                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,
                        
                            // Colors
                            pathColor: '#FDB348',
                            textColor: '#794ECD',
                            trailColor: '#794ECD',
                            backgroundColor: '#3e98c7',
                        })}
                        />
                        </div> */}
                            {/* <div className='col-md-1 mb-2' style={{ display: "flex" }}><UilClock color="#673ab7" /><span>1h</span></div> */}
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className='row'>
                        <div className='col-md-9 col-sm-8'>
                        {steps.map(s => {
                            return (
                                <div key={s.id}>
                                    <ul>
                                        <li style={{ display: "flex", justifyContent: "space-between", maxWidth: "400px" }}>
                                            <label>{s.title}</label>
                                            <Form.Check checked={s.done}  onChange={()  => completeStep(s.id)} style={{ marginLeft: "10px", fontSize: "18px" }} type="checkbox" />
                                        </li>
                                    </ul>
                                </div>
                            )
                        })}
                        </div>
                        {/* <div className='col-md-3 col-sm-4' style={{marginTop: "85px"}}>
                        <CircularProgressbar 
                        value={percent} 
                        text={`${percent}%`}
                        strokeWidth={12}
                        styles={buildStyles({
                            rotation: 0,
                           

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                        
                            // Text size
                            textSize: '22px',
                        
                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,
                        
                            // Colors
                            pathColor: '#FDB348',
                            textColor: '#794ECD',
                            trailColor: '#794ECD',
                            backgroundColor: '#3e98c7',
                        })}
                        />
                        </div> */}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}