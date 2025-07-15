import './Home.css';
import bg_img_5 from '../../assets/images/bg-05-free-img.jpg.jpeg'
const Home = () => {
    return (
        <>
            <section id="hero">
                <div className='hero-container'>
                    <p className='fs-6 fs-lg-1 link-underline-primary'>In look for a language tutor?</p>
                    <h1 className='h1 fs-md-1 fs-6 fw-lighter'>Start <u className='fw-bolder fs-1'><b>learning</b></u> a new language today <u className='fw-bolder fs-1'><b>with the best</b></u>online tutors!</h1>
                </div>
            </section>
            <section id='instructions'>
                <div className="container vh-100 py-5">
                    <div className='row vh-100'>
                        <div className='col-lg-4 col-md-8 col-11'>
                            <div className='section-text text-body'>
                                <h2 className='fw-bolder'>How it all works</h2>
                                <p className='fs-6 text-body'>Donec sagittis sagittis vestibulum. Morbi vestibulum neque.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-5 col-11 img-bg rounded-5 shadow-lg numbers min-h-100'>
                        </div>
                        <div className='col-lg-4 col-md-5 col-11 features'>
                            <ol className='p-0'>
                                <li className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div className=' text-danger rounded-circle justify-content-center align-items-center d-flex'>1</div>
                                    <div className='align-items-end w-50'>
                                        <h3>Find the perfect tutor</h3>
                                        <p>Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur.</p>
                                    </div>
                                </li>
                                <li className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div className=' text-danger rounded-circle justify-content-center align-items-center d-flex'>2</div>
                                    <div className='align-items-end w-50'>
                                        <h3>Find the perfect tutor</h3>
                                        <p>Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur.</p>
                                    </div>
                                </li>
                                <li className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                                    <div className=' text-danger rounded-circle justify-content-center align-items-center d-flex'>3</div>
                                    <div className='align-items-end w-50'>
                                        <h3>Find the perfect tutor</h3>
                                        <p>Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur.</p>
                                    </div>
                                </li>
                            </ol>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Home