import './Footer.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Footer=()=>{
    return(
        <>
                    <footer>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-12 col-md-4 d-flex  text-center flex-column justify-content-center'>
                            <p className='h1 '>EngliGo</p>
                            <p>
                                EngliGo is an intelligent assistant using advanced AI to enhance your English. 
                            </p>
                        </div>
                            <div className='col-12 col-md-4 links d-flex flex-column text-center flex-wrap gap-3 justify-content-evenly my-5'>
                                <Link to="">Home</Link>
                                <Link to="">Written</Link>
                                <Link to="">Reading</Link>
                                <Link to="">Spoken</Link>
                                <Link to="">Ranking</Link>
                            </div>
                            <div className='col-12 col-md-4 d-flex social-icons d-flex align-items-center gap-3 justify-content-center my-5'>
                                <Link to=""><i className="social-icon fs-3 fa-brands fa-facebook"></i></Link>
                                <Link to=""><i className="social-icon fs-3 fa-brands fa-instagram"></i></Link>
                                <Link to=""><i className="social-icon fs-3 fa-brands fa-x-twitter"></i></Link>
                                <Link to=""><i className="social-icon fs-3 fa-brands fa-linkedin"></i></Link>
                                <Link to=""><i className="social-icon fs-3 fa-brands fa-youtube"></i></Link>
                            </div>

                            <p className='my-5 text-center'>© 2021 Class Technologies Inc. </p>
                        </div>
                </div>
            </footer>
        </>
    )
}

export default Footer