import { useState } from 'react'
import login from '../../assets/images/Login/Group 231.png'
import './Login.css';
import Input from '../../Components/FormInput/FormInput';
import axios from 'axios';
import { Link} from "react-router-dom/cjs/react-router-dom";

const Login = () => {
    const [sectionName,setSectionName]=useState("Login")
    const [userData, setUserData] = useState({
        email: '',
        pass: '',
        userName:''
    })
    const [errors, setErrors] = useState({
        emailError: '',
        passError: '',
        userName:''
    })
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^_-])[A-Za-z\d@$!%*?#&^_-]{8,}$/;

    const userNameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^_-])[A-Za-z\d@$!%*?#&^_-]{8,}$/;


    const changeUserData = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
        console.log(errors);

        switch (name) {
            case "email":
                setErrors((prevFormError) => ({
                    ...prevFormError,
                    emailError:
                        value.length === 0
                            ? "This field is required."
                            : !emailRegex.test(value)
                                ? "Please enter a valid email"
                                : "",
                }));
                break;
            case "pass":
                setErrors((prevFormError) => ({
                    ...prevFormError,
                    passError:
                        value.length === 0
                            ? "This field is required."
                            : !passwordRegex.test(value)
                                ? "Password should be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
                                : "",
                }));
                break;
                                break;
            case "userName":
                setErrors((prevFormError) => ({
                    ...prevFormError,
                    passError:
                        value.length === 0
                            ? "This field is required."
                            : !userNameRegex.test(value)
                                ? "user name must be at least 8 characters long."
                                : "",
                }));
                break;
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
           const {data}=axios.post("Auth/Login",{
            "email":userData.email,
            "password":userData.pass
        },{withCredentials:true})

        axios.defaults.headers.common['Authorization']=`Bearer ${data['token']}`
    }
    return (
        <>
            <div className="login container my-5 text-danger min-vh-100 ">
                <div className="row justify-content-center rounded align-items-center min-vh-100">
                    <div className="col-6 d-none d-md-block">
                        <img src={login} className='img-fluid' />
                    </div>
                    <div className="col-md-6 col-12 d-flex align-items-center">
                        <div className='w-75 mx-auto'>
                            <h1 className='text-black text-center mb-4'>{sectionName}</h1>
                            <div className="rounded-pill py-2 px-2 border text-white bg-teal-light w-fit mx-auto" aria-label="Basic example">
                                <button type="button" className="btn px-5 rounded-pill border-0 active" onClick={()=>setSectionName("Login")}>Login</button>
                                <button type="button" className="btn px-5 bg-transparent text-light rounded-pill" onClick={()=>setSectionName("Register")}>Register</button>
                            </div>
                            <p className='text-black  w-75 mx-auto text-center'>  Welcome back! Log in to continue your journey of improving your English!</p>
                            <form onSubmit={handleSubmit} className='d-flex gap-4 flex-column align-items-center '>

                            {errors.emailError && (
                                    <div className="text-black">{errors.emailError}</div>
                                )}
                                {sectionName == 'Register' && (
                                    <>
                                    <Input label="User Name" id="Email" icon="fa-solid fa-envelope" type="text" placeholder="Enter user name" setUSerData={changeUserData} input_name="userName" />
                                {errors.userName && (
                                <div className="text-black">{errors.userName}</div>
                            )}
                           </> )
                        }
                                <Input label="Email" id="Email" icon="fa-solid fa-envelope" type="email" placeholder="Enter Your Email" setUSerData={changeUserData} input_name="email" />
                                {errors.emailError && (
                                    <div className="text-black">{errors.emailError}</div>
                                )}
                                <Input label="Password" icon="fa-solid fa-lock" type="password" placeholder="Enter Your Password" setUSerData={changeUserData} input_name="pass" />
                                {errors.passError && (
                                    <div className="text-black">{errors.passError}</div>
                                )}
                                <button className='btn btn-lg w-50  border-0 btn-danger rounded-pill bg-teal'>Login</button>
                            </form>
                            <Link to="/register" className='align-self-end  text-black'>create a new account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;