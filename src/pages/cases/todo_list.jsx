import React from 'react'

import Form from 'react-bootstrap/Form';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { Toggle } from './toggle'


export const TodoList = ({ steps, listOfSteps, completeStep}) => {

    return (
        <div className='row'>
            <p style={{color: "#757575"}}>Отметьте завершённые пункты для их учёта в общем прогрессе подготовки</p>
        <div className='col-md-4 col-sm-4' style={{backgroundColor: "#f5f7fa", borderRadius: "28px", padding: "35px"}}>
        {listOfSteps.map(s => {
            return (
                <div style={{height: "60px"}} key={s.id}>
                    <ul>
                        <li style={{ display: "flex", justifyContent: "space-between", maxWidth: "400px" }}>
                            <label style={{color: "#757575", textDecoration: s.done ? "line-through" : "none"}}>{s.title}</label>
                            <Form.Check checked={s.done} onChange={()  => completeStep(s.id)} style={{ marginLeft: "10px", fontSize: "18px" }} type="checkbox" />
                        </li>
                    </ul>
                </div>
            )
        })}
        </div>
        <div style={{marginTop: "-30px"}} className='col-md-8 col-sm-8'>
        {/* {completedSteps.length !== 0 ? <h5>Осталось:</h5> : null} */}
            <div style={{ marginTop: "30px" }} className="row">
                {steps.map((s, id) => (
                    !s.done ?
                        (
                            <Toggle key={s.id + id} id={s.id} component={s.component} completeStep={completeStep} title={s.title} time={s.time} desc={s.desc} price={s.price} />
                        ) : null
                ))}
            </div>
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
    )
}