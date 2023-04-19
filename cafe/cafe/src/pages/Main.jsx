import React from 'react'
import "../assets/css/templatemo-klassy-cafe.css";
import "../assets/css/bootstrap.min.css"
import "../assets/css/cart.css"
import "../assets/css/flex-slider.css"
import "../assets/css/font-awesome.css"
import "../assets/css/lightbox.css"
import "../assets/css/owl-carousel.css"

import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
import slide_01 from "../assets/images/slide-01.jpg";
import thumb_01 from "../assets/images/about-thumb-01.jpg";
import thumb_02 from "../assets/images/about-thumb-02.jpg";
import thumb_03 from "../assets/images/about-thumb-03.jpg";
import video_bg from "../assets/images/about-video-bg.jpg";
import breakfast from "../assets/images/breakfast.png";
import drinks from "../assets/images/tab-item-02.png";
import lunch from "../assets/images/lunch.jpg";

const Main = () => {
  return (

    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <img src={logo} />
                </a>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">Home</a>
                  </li>
                  <li className="scroll-to-section"><a href="#about">About</a></li>
                  <li className="scroll-to-section"><a href="#chefs">Menu</a></li>
                  <li className="scroll-to-section">
                    <a href="#reservation">Contact Us</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div id="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-content">
                <div className="inner-content">
                  <h4>AUB Café</h4>
                  <h6>THE BEST EXPERIENCE</h6>
                  <div className="main-white-button scroll-to-section">
                    <a href="#reservation">Make A Reservation</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="main-banner header-text">
                <div className="Modern-Slider">
                  <div className="item">
                    <div className="img-fill">
                      <img src={slide_01} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>About Us</h6>
                  <h2>Ada Dodge Hall Coffee Shop</h2>
                </div>
                <p>
                  The coffee shop open at the Ada Dodge Hall cafeteria serves food
                  in a comforting meeting place to all students, faculty and
                  staff. <br /><br />This is a great place to socialize or pass
                  the time reading, studying or surfing the web while enjoying a
                  beverage and snack. The coffee shop is also a place for informal
                  meetings. <br /><br />The shop sells coffee with snacks and
                  finger food items in a relaxing atmosphere. It also provides
                  freshly prepared sandwiches.
                </p>
                <div className="row">
                  <div className="col-4">
                    <img src={thumb_01} alt="" />
                  </div>
                  <div className="col-4">
                    <img src={thumb_02} alt="" />
                  </div>
                  <div className="col-4">
                    <img src={thumb_03} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="right-content">
                <div className="thumb">
                  <a rel="nofollow" href="http://youtube.com"
                  ><i className="fa fa-play"></i
                  ></a>
                  <img src={video_bg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="chefs">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 text-center">
              <div className="section-heading">
                <h6>Our Menu</h6>
                <h2>We offer the best ingredients for you</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="chef-item">
                <div className="thumb">
                  <div className="overlay"></div>
                  <img src={breakfast} alt="Chef #1" style={{ width: 233, height: 220 }}/>
                </div>
                <div className="down-content">
                  <h4>Breakfast</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="chef-item">
                <div className="thumb">
                  <div className="overlay"></div>
                  <img src={drinks} alt="Chef #1"style={{ width: 233, height: 220 }} />
                </div>
                <div className="down-content">
                  <h4>Drinks</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="chef-item">
                <div className="thumb">
                  <div className="overlay"></div>
                  <img src={lunch} alt="Chef #1" style={{ width: 273, height: 220 }}  />
                </div>
                <div className="down-content">
                  <h4>Lunch</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="reservation">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-text-content">
                <div className="section-heading">
                  <h6>Contact Us</h6>
                  <h2>
                    Here You Can Make A Reservation Or Just walkin to our cafe
                  </h2>
                </div>
                <p>
                  Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a
                  eleifend riqsie, namei sollicitudin urna diam, sed commodo purus
                  porta ut.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="phone">
                      <i className="fa fa-phone"></i>
                      <h4>Phone Numbers</h4>
                      <span
                      ><a href="#">080-090-0990</a><br /><a href="#"
                      >080-090-0880</a
                        ></span
                      >
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="message">
                      <i className="fa fa-envelope"></i>
                      <h4>Emails</h4>
                      <span
                      ><a href="#">hello@company.com</a><br /><a href="#"
                      >info@company.com</a
                        ></span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Table Reservation</h4>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          id="name"
                          placeholder="Your Name*"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your Email Address"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <fieldset>
                        <input
                          name="phone"
                          type="text"
                          id="phone"
                          placeholder="Phone Number*"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <select
                          value="number-guests"
                          name="number-guests"
                          id="number-guests"
                        >
                          <option value="number-guests">Number Of Guests</option>
                          <option name="1" id="1">1</option>
                          <option name="2" id="2">2</option>
                          <option name="3" id="3">3</option>
                          <option name="4" id="4">4</option>
                          <option name="5" id="5">5</option>
                          <option name="6" id="6">6</option>
                          <option name="7" id="7">7</option>
                          <option name="8" id="8">8</option>
                          <option name="9" id="9">9</option>
                          <option name="10" id="10">10</option>
                          <option name="11" id="11">11</option>
                          <option name="12" id="12">12</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <div id="filterDate2">
                        <div
                          className="input-group date"
                          data-date-format="dd/mm/yyyy"
                        >
                          <input
                            name="date"
                            id="date"
                            type="text"
                            className="form-control"
                            placeholder="dd/mm/yyyy"
                          />
                          <div className="input-group-addon">
                            <span className="glyphicon glyphicon-th"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <select value="time" name="time" id="time">
                          <option value="time">Time</option>
                          <option name="Breakfast" id="Breakfast">
                            Breakfast
                          </option>
                          <option name="Lunch" id="Lunch">Lunch</option>
                          <option name="Dinner" id="Dinner">Dinner</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          id="message"
                          placeholder="Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button-icon"
                        >
                          Make A Reservation
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xs-12">
              <div className="right-text-content">
                <ul className="social-icons">
                  <li>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="logo">
                <a href="index.html"
                ><img src={logo2} alt="" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-xs-12">
              <div className="left-text-content">
                <p>
                  © Copyright AUB Café.

                  <br />Design: AUB web warriors
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>

  );
};

export default Main