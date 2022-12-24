import React from 'react'


export const Tag = (props) => {
    return (
        <button style={{backgroundColor: "#f5f7fa", color: "#757575", borderRadious: "28px", fontSize: "10px", marginRight: "10px"}} className="btn">{props.tag}</button>
    )
}