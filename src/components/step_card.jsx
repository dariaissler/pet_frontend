import React, { useState } from 'react'

import { UilClock } from '@iconscout/react-unicons'
import { UilSuitcaseAlt } from '@iconscout/react-unicons'
import { UilTransaction } from '@iconscout/react-unicons'
import Form from 'react-bootstrap/Form';



export const StepCard = (props) => {

    const [showMore, setShowMore] = useState(false)

    const showMoreText = () => {
        setShowMore(!showMore)
    }

    return (
        <div className='col-sm-12 col-md-12 col-lg-12 mb-3'>
            <div className="step">
                <div className={!showMore ? "card-body step-card" : "card-body step-card-more-text"}>
                    <div className="row" style={{ display: "flex", alignItems: "center" }}>
                        <div className='col-md-2 mb-2'>
                            <UilSuitcaseAlt color="#673ab7" size="40" />
                        </div>
                        <div className='col-md-8 mb-2'>
                            <h5>{props.title}</h5>
                            <span>{!showMore ? props.desc.split(".")[0] : props.desc}</span>
                            <a onClick={showMoreText}>...подробности</a>
                        </div>
                        <div className="col-md-1 mb-4" style={{ display: "flex" }}><UilTransaction color="#673ab7" />{props.price}</div>
                        <div className='col-md-1 mb-4' style={{ display: "flex" }}><UilClock color="#673ab7" /><span>{props.time}</span></div>
                        {/* <div style={{display: "flex"}} className="col-md-4 mb-2">
                                {props.completed ? <label className='mt-1'>Вернуть в незаконченные</label> : <label className='mt-1'>Уже есть</label>}
                                <Form.Check onChange={()  => props.completeStep(props.id)} style={{marginLeft: "10px", fontSize: "18px"}}  type="checkbox" />
                            </div> */}
                    </div>
                    {/* <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p> */}
                </div>
            </div>
        </div>
    )
}