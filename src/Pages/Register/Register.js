import { useState } from 'react'
import login from '../../assets/images/login.png'
import './Register.css';
import Input from '../../Components/FormInput/FormInput'
const Register=()=>{
        const [userData, setUserData] = useState({
        email: '',
        pass: ''
    })
    const [errors, setErrors] = useState({
        emailError: '',
        passError: ''
    })
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // const passwordRegex =
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^_-])[A-Za-z\d@$!%*?#&^_-]{8,}$/;

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
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <>
            <div className="container text-danger">
                <div className="row justify-content-evenly shadow rounded my-5 align-items-center">
                    <div className="col-8">
                        <h1 className='text-danger  my-3 text-center'>Register</h1>
                        <p className='text-black'>  Welcome back! Log in to continue your journey of improving your English speaking, listening, and vocabulary skills. Let’s get one step closer to fluency — one conversation at a time.</p>
                    </div>
                    <div className="col-8 ">
                        <form onSubmit={handleSubmit}  className='d-flex flex-column align-items-center'>
                            <Input icon="fa-solid fa-envelope" type="text" placeholder="Email" setUSerData={changeUserData} input_name="email" />
                            {errors.emailError && (
                                <div className="text-black">{errors.emailError}</div>
                            )}
                            <Input icon="fa-solid fa-lock" type="password" placeholder="Password" setUSerData={changeUserData} input_name="pass" />
                            {errors.passError && (
                                <div className="text-black">{errors.passError}</div>
                            )}
                            <button className='btn btn-lg w-50 btn-danger rounded-pill '>Login</button>
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