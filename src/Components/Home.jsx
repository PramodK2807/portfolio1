import React, { useState } from 'react';
import wave from '../assets/images/wave.png';
import Typed from 'react-typed';
import Img from './Img';

const Home = () => {
  return (
    <div className="home_component row position-relative">
      <div className="position-absolute top-0 left-0 pt-5">
        <img src="/images/dot.png" alt="" />
      </div>
      <div className="position-absolute bottom-0 text-end pb-4 d-none d-md-block">
        <img src="/images/dot.png" alt="" />
      </div>
      {/* <div className="row"> */}
      <div
        className="col-md-7 order-2 order-md-1"
        data-aos="fade-right"
        data-aos-duration="2000">
        {/* <p>I'm</p> */}
        <h1 className="main_heading">
          <Typed
            strings={[
              'Frontend Developer',
              'React Developer',
              'MERN Stack Developer',
              'Web Developer',
            ]}
            typeSpeed={100}
            backSpeed={20}
            loop
          />
          <img style={{ height: '30px' }} src={wave} alt="" />
        </h1>

        <p className="">
          Hi, I'm <span className="fw-bold fs-5">Pramod Kushwaha</span>. A
          passionate MERN Stack Developer
          <br /> based in Madhya Pradesh, India. 📍
        </p>

        <div className="hero_icons mb-3">
          <div className="icon">
            <a href="https://github.com/PramodK2807" target="_blank">
              <img src="/images/github.png" className="w-100 h-100" alt="" />
            </a>
          </div>
          <div className="icon ms-2">
            <a
              href="https://www.linkedin.com/in/pramod-kushwaha-1a35ba153/"
              target="_blank">
              <img src="/images/linkedin.png" className="w-100 h-100" alt="" />
            </a>
          </div>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/19rAAcl-lsKez4L81l7aVAx6diZt1jYnA/view?usp=sharing"
            target='_blank'
            className="custom_btn animate_btn rounded-pill text-decoration-none">
            <span>Resume</span>
          </a>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="col-md-5 d-flex align-items-center justify-content-center order-1 order-md-2 mt-4 mt-md-0">
        <Img />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
