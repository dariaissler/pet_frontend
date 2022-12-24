import React from 'react'


export const Login = ({changeHandler, loginHandler, loading}) => {

    return (
        <div>
            <h5 style={{ color: "#794ECD" }}>Sign in to see your progress</h5>
            <form>
                <div style={{ padding: "30px 0" }}>
                    <div className="form-group">
                        {/* <label htmlFor="exampleInputEmail1">Email</label> */}
                        <input onChange={changeHandler} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-2">
                        {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                        <input onChange={changeHandler} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                </div>
                <button onClick={loginHandler} disabled={loading} style={{ backgroundColor: "#794ECD", color: "#ffffff" }} className='btn mt-2'>Sign In</button>
            </form>
        </div>
    )
}