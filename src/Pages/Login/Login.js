import { useState } from 'react'
import login from '../../assets/images/login.png'
import './Login.css'
import Input from '../../Components/FormInput/FormInput'
const Login = () => {
    const [userData,setUserData]=useState({
        email:'',
        pass:''
    })
    const changeUserData=(e)=>{

    }
    return (
        <>
            <div className="container ">
                <div className="row justify-content-evenly shadow rounded my-5">
                    <div className="col-8">
                        {/* <img src={login} alt="" className="img-fluid rounded" /> */}
                        <h1>Login</h1>
                        <p>  Welcome back! Log in to continue your journey of improving your English speaking, listening, and vocabulary skills. Let’s get one step closer to fluency — one conversation at a time.</p>
                    </div>
                    <div className="col-8 ">
                        <h1 className='text-danger  my-3'>Login</h1>
                        <form>
                           <Input icon="fa-solid fa-envelope" placeholder="Email"/>
                            <Input icon="fa-solid fa-lock" placeholder="Password"/>
                        <button className='btn btn-lg w-50 mx-auto btn-danger rounded-pill '>Login</button>
                        </form>
                        <p className='my-3'>Forget <a>Username/Password?</a></p>
                        <p className='align-self-end'>create a new account</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login