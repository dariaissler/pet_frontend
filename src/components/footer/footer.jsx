import React from 'react'


export const Footer = () => {
  return (
    <div style={{ backgroundColor: '#424242', padding: "25px", color: "#ffffff", marginTop: "20px"}}>
      <div style={{width: "900px", margin: "0 auto"}}>
      <div className="row">
          <div className="col-md-8">
            <h6>Pet Friendly Zone</h6>
            <p>0801 Uruguay St., Panama City, Panama Tax ID: 36-5017390</p>
            <p>© 2022 No War</p>
          </div>
          <div className="col-md-4">
            <h6>Legal</h6>
              <span><a style={{textDecoration: "none", display: "block", color: "#ffffff"}} href="#!">Privacy Policy</a></span>
              <span><a style={{textDecoration: "none", color: "#ffffff"}} href="#!">Cookie Policy</a></span>
          </div>
        </div>
      </div>
      </div>
  )
}