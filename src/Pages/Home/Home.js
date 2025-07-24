import "./Home.css";
import hero_img from "../../assets/images/Home/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
const Home = () => {
  return (
    <>
      {/* <section class="hero-section container position-relative">
    <div class="row align-items-center">
      <div class="col-lg-6 col-12">
        <h1 class="hero-title mb-3">
          <span class="highlight">Studying</span> Online is now<br/>much easier
        </h1>
        <p class="hero-desc mb-4">
          TOTC is an interesting platform that will teach you in more an interactive way
        </p>
        <div class="d-flex align-items-center mb-4 flex-wrap">
          <a href="#" class="btn btn-join mb-2">Join for free</a>
          <span class="play-btn mb-2"><span>&#9658;</span></span>
          <span class="ms-2 text-dark fw-medium">Watch how it works</span>
        </div>
      </div>
      <div class="col-lg-6 col-12 position-relative">
        <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=400&h=500&fit=crop" alt="Student" class="hero-img shadow-lg"/>
        <div class="floating-card card-calendar">
          <span class="icon-box icon-calendar">
            <i class="bi bi-calendar-event"></i>
          </span>
          <div>
            <div class="fw-bold">250k</div>
            <div class="small text-muted">Assisted Student</div>
             </div>
        </div>
        <div class="floating-card card-congrats">
          <span class="icon-box icon-envelope">
            <i class="bi bi-envelope"></i>
          </span>
          <div>
            <div class="fw-bold">Congratulations</div>
            <div class="small text-muted">Your admission completed</div>
          </div>
        </div>
        <div class="floating-card card-class">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" class="rounded-circle" width="40" height="40"/>
          <div>
            <div class="fw-bold">User Experience Class</div>
            <div class="small text-muted">Today at 12.00 PM</div>
          </div>
          <a href="#" class="btn btn-danger btn-sm ms-auto">Join Now</a>
        </div>
        <span class="icon-box icon-bar" style={{"top": "20%","right": "10%;"}}>
          <i class="bi bi-bar-chart"></i>
        </span>
      </div>
    </div>
  </section> */}
      <section id="hero">
        <div className="hero-section min-vh-100 container-fluid mb-5">
          <div className="row justify-content-center align-items-center h-100">
            <div className="hero-section__text col-12 col-md-5 d-flex flex-column gap-4 px-4 px-md-5">
              <h1 className="text-light fw-bold display-4 mb-3 animate__animated animate__fadeInDown">
                <span className="custom-color">Studying</span> Online
                <br />
                <span className="d-inline-block mt-2">Just Got Easier</span>
              </h1>
              <p className="text-light fs-5 opacity-75 animate__animated animate__fadeIn animate__delay-1s">
                EngliGo revolutionizes language learning with interactive tools,
                AI-powered exercises, and personalized lessons tailored to your
                level.
              </p>
              <div className="d-flex gap-3 animate__animated animate__fadeInUp animate__delay-1s">
                <button className="btn btn-custom btn-lg rounded-pill px-4 py-3 fw-bold shadow-lg hover-scale">
                  Join for Free
                </button>
               
              </div>
            </div>

            <div className="col-12 col-md-6 position-relative animate__animated animate__fadeIn">
              <img
                src={hero_img}
                className="hero-image shadow-lg"
                alt="Language learning app"
                style={{
                  maxWidth: "450px",
                  width: "100%",
                  height: "480px",
                }}
              />{" "}
              <div className="floating-element bg-warning rounded-circle position-absolute"></div>
              <div className="floating-element bg-primary rounded-circle position-absolute"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="privileges">
        <div className="privileges-section container my-5 gap-5">
          <div className="privileges-text">
            <h2 className="fw-bolder">
              <span className="dark_blue_col">All-In-One</span>{" "}
              <span className="Teal-col">Cloud Software.</span>
            </h2>
            <p className=" mx-auto my-3 fs-6 w-75 text-mutedcustom" >
              TOTC is one powerful online software suite that combines all the
              tools needed to run a successful school or office.
            </p>
          </div>
          <div className="cards my-2">
            <div className="card shadow border-0 rounded-3 text-center gap-2 p-3">
              <i className="card-icon fs-1 fa-solid fa-file-lines"></i>
              <h3 className="flex-grow-1">Customer Tracking</h3>
              <p className="text-black fw-lighter fs-6">
                Automate and track emails to individuals or groups. Skilline’s
                built-in system helps organize your organization{" "}
              </p>
            </div>
            <div className="card shadow border-0 rounded-3 text-center gap-3 p-2">
              <i className="card-icon fa-solid fa-users fs-1"></i>
              <h3 className="flex-grow-1">
                Easy Scheduling 
                {/* & Attendance Tracking */}
              </h3>
              <p className="text-black fw-lighter fs-6">
                Schedule and reserve classrooms at one campus or multiple
                campuses. Keep detailed records of student attendance
              </p>
            </div>
            <div className="card shadow border-0 rounded-3 text-center gap-3 p-2">
              <i className="card-icon fa-solid fa-calendar-days fs-1"></i>
              <h3 className="flex-grow-1">
                Online Billing
                {/* , Invoicing, & Contracts */}
              </h3>
              <p className="text-black fw-lighter fs-6">
                Simple and secure control of your organization’s financial and
                legal transactions. Send customized invoices and contracts
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container my-5">
          <h2 className="text-center fw-bolder">
            <span className="dark_blue_col">What is</span>{" "}
            <span className="Teal-col">EngliGo?</span>
          </h2>
           <p className=" mx-auto my-3 fs-6 w-75 text-mutedcustom" >
            EngliGo is an intelligent assistant using advanced AI to enhance
            your English. Practice speaking with natural conversations.
          </p>
          <div className="row justify-content-evenly  about-cards">
            <div className="col-md-5 fs-2 justify-content-center text-center card rounded-4">
              <p className="text-white mx-auto">For Writing Skills</p>
              <button className="btn w-50 mx-auto fs-6 fs-sm-5 border-white rounded-pill text-white py-3">
                Start Test Now
              </button>
            </div>
            <div className="col-md-5 fs-2 justify-content-center text-center card rounded-4">
              <p className="text-white mx-auto">For Reading Skills</p>
              <button className="btn w-50 mx-auto fs-6 fs-sm-5 rounded-pill text-white py-3">
                Start Test Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
