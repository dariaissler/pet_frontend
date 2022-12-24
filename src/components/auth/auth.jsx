import React from 'react'


export const Register = ({changeHandler, registerHandler, loading}) => {

    return (
        <div>
            <h5 style={{ color: "#794ECD" }}>Sign up to see your progress</h5>
            <form>
                <div style={{ padding: "30px 0" }}>
                <div className="form-group">
                        <input onChange={changeHandler} name="name" type="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name" />
                    </div>
                    <div className="form-group mt-2">
                        <input onChange={changeHandler} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-2">
                        <input onChange={changeHandler} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                </div>
                <button onClick={registerHandler} disabled={loading} style={{ backgroundColor: "#794ECD", color: "#ffffff" }} className='btn mt-2'>Sign Up</button>
            </form>
        </div>
    )
}