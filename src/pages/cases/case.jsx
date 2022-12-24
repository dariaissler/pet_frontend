import React from 'react'
import { NavLink } from 'react-router-dom'


// export const Case = (props) => {
//     return (
//         <div style={{ borderRadius: "12px" }} className="col s12 m6 l6">
//             <div className="card">
//                 <div className="card-image">
//                     <img style={{ height: "200px" }} src={props.img} />
//                 </div>
//                 <div style={{ padding: "15px" }} className="card-content">
//                     <span style={{ fontSize: "24px", fontWeight: "600" }}>{props.title}</span>
//                     <p style={{ marginTop: "10px" }}>{props.description}</p>
//                     <NavLink to={`/${props.title}`} state={{ title: props.title }} className="btn" style={{ backgroundColor: "#794ECD", marginTop: "20px" }}>check the guide </NavLink>
//                 </div>
//             </div>
//         </div>
//     )
// }

export const Case = (props) => {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 mb-5'>
            <div className="card">
                <img className="card-img-top" style={{height: "214px"}} src={props.img} alt="pic" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <NavLink to={`/${props.title}`} state={{ title: props.title }} className="btn" style={{ backgroundColor: "#794ECD", color: "#ffffff" }}>check the guide </NavLink>
                </div>
            </div>
        </div>
    )
}
