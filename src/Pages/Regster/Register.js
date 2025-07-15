import { useState } from 'react'
import login from '../../assets/images/login.png'
import Input from '../../Components/FormInput/FormInput'
const Register=()=>{
    return(
        <>
         <div className="container shadow rounded">
                <div className="row justify-content-evenly">
                    <div className="col-12 col-md-6 d-md-block d-none">
                        <img src={login} alt="" className="img-fluid rounded" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 text-center">
                        <h1 className='text-danger  my-3'>Register</h1>
                        <form>
                           <Input icon="fa-solid fa-envelope" placeholder="Email"/>
                            <Input icon="fa-solid fa-lock" placeholder="Password"/>
                        <button className='btn btn-danger rounded-pill w-100'>Login</button>
                        </form>
                        <p className='my-3'>Forget <a>Username/Password?</a></p>
                        <p className='align-self-end'>create a new account</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register