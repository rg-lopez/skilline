import logo from './img/skilline.png';
import icon_calendar from './img/icon-calendar.png';
import icon_mail from './img/icon-mail.png';
import icon_user from './img/icon-user.png';
import icon_level from './img/icon-level.png';
import icon_check from './img/check.png';
import teenage_girl from './img/teenage-girl.png';

import logo_google from './img/logo-google.png';
import logo_netflix from './img/logo-netflix.png';
import logo_airbnb from './img/logo-airbnb.png';
import logo_amazon from './img/logo-amazon.png';
import logo_facebook from './img/logo-facebook.png';
import logo_grab from './img/logo-grab.png';

import feature_billing from './img/feature-icon-billing.png';
import feature_calendar from './img/feature-icon-calendar.png';
import feature_user from './img/feature-icon-user.png';

import testimonial from './img/testimonial.png';
import fivestar from './img/five-star.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <section id="section-header">
        <div className="overlay desktop"></div>

        <div className="wrapper">
          <div className="navbar">
            <a href="/" className="logo">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <div className="right desktop">
              <div className="link-group">
                <a className="btn-link" href="/">Home</a>
                <a className="btn-link" href="/">Careers</a>
                <a className="btn-link" href="/">Blog</a>
                <a className="btn-link" href="/">About Us</a>
              </div>
              <div className="button-group">
                <a className="btn btn-white" href="/">Login</a>
                <a className="btn btn-secondary" href="/">Sign Up</a>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper hero-wrapper">
          <div className="left-component">
              <h1><span>Studying </span> Online is now much easier</h1>
              <p>Skilline is an interesting platform that will teach you in more an interactive way</p>
              <div className="cta">
                <a className="btn btn-secondary" href="/">Join for free</a>
                <a className="btn btn-circle" href="/">
                  <i className="fas fa-play"></i>
                </a>
                <a className="btn-link" href="/">Watch how it works</a>
              </div>
              
          </div>
          <div className="right-component">
            <img className="hero-img" src={teenage_girl} alt="" />
            <div className="relative-point">
              <div className="mini desktop">
                <img src={icon_level} alt="" />
              </div>
              <div className="mini-card card-one desktop">
                <div className="content">
                  <div className="icon">
                    <img src={icon_calendar} alt=""/>
                  </div>
                  <div className="text-group">
                    <h3>250k</h3>
                    <p>Assisted Student</p> 
                  </div>
                </div>
              </div>
              <div className="mini-card card-two desktop">
                <div className="content">
                  <div className="icon">
                    <img src={icon_mail} alt=""/>
                  </div>
                  <div className="text-group">
                  <img className="badge" src={icon_check} alt="" />
                    <h3>Congratulations</h3>
                    <p>Your admission completed</p> 
                  </div>
                </div>
              </div>
              <div className="mini-card card-three desktop">
                <div className="content">
                  <div className="icon">
                    <img src={icon_user} alt=""/>
                  </div>
                  <div className="text-group">
                    <h3>User Experience Class</h3>
                    <p>Today at 12:00 PM</p> 
                  </div>
                </div>
                <div className="btn-mini">
                  Join Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-partners">
        <div className="wrapper">
          <h3>Trusted by 5,000+ Companies Worldwide</h3>
          <div className="logo-group">
            <img src={logo_google} alt="" />
            <img src={logo_netflix} alt="" />
            <img src={logo_airbnb} alt="" />
            <img src={logo_amazon} alt="" />
            <img src={logo_facebook} alt="" />
            <img src={logo_grab} alt="" />
          </div>
        </div>
      </section>

      <section id="section-features">
        <div className="wrapper">
          <div className="section-header">
            <h3>All-In-One <span>Cloud Software.</span> </h3>
            <p>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
          </div>
          <div className="feature-group">
            <div className="feature-card">
              <img src={feature_billing} alt="" />
              <h3>Online Billing, <br/>Invoicing, & Contracts</h3>
              <p>Simple and secure control of your organization’s financial and legal transactions. Send customized <br/>invoices and contracts</p>
            </div>
            <div className="feature-card">
              <img src={feature_calendar} alt="" />
              <h3>Easy Scheduling & Attendance Tracking</h3>
              <p>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
            </div>
            <div className="feature-card">
              <img src={feature_user} alt="" />
              <h3> <br/>Customer Tracking</h3>
              <p>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization</p>
            </div>
          </div>
        </div>
      </section>

      <section id="section-testimonials">
        <div className="wrapper">
          <div className="left-component">
            <div className="eyebrow">
              <span></span>
              <h6>Testimonial</h6>
            </div>
            <h3>What They Say?</h3>
            <p>Skilline has got more than 100k positive ratings from our users around the world. </p>
            <p>Some of the students and teachers were greatly helped by the Skilline.</p>
            <p>Are you too? Please give your assessment</p>
            <a className="btn-outline-group" href="/">
              <span>Write your assesment</span>
              <span>
                <i className="fas fa-arrow-right"></i>
              </span>
            </a>
          </div>
          <div className="right-component">
            <div className="content-group">
              <div className="image-group">
                <img src={testimonial} alt="" />
                <div className="btn-circle">
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
              <div className="card-group">
              <p>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."</p>
                <div className="label">
                    <span className="name">Gloria Rose</span>
                    <div className="rating">
                      <img src={fivestar} alt="" />
                      <span>12 reviews at Yelp</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
