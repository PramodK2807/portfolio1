import React from 'react';
import AboutTimeline from './AboutTimeline';

const About = () => {
  return (
    <div className="container">
      <div className="text-center mt-5 ">
        <h1 className=" title_heading">About</h1>
      </div>
      <div className="my-4 about_tabs">
        <div className="row align-items-center">
          <div className="col-12 col-md-8 text_justify">
            <p className="my-3">
              I am a Full Stack Developer with a passion for building beautiful
              and user friendly websites. I have a strong understanding of both
              Frontend and Backend development, and I am excited to put my
              skills to use in a professional setting. I am quick learner and a
              team player, and I am confident that i can be a valuable asset to
              any web development team.
            </p>
            <br />
            <p>
              I started my journey with the Full Stack Web Development in April
              2021, and on the same year I completed my Bachelor's Degree,
            </p>
          </div>
          <div className="col-12 col-md-4 d-none d-md-block">
            <img
              className="w-100 rounded-4"
              loading="lazy"
              src="/images/aboutus.jpg"
              alt=""
            />
            {/* <img
              className="w-100 rounded-4"
              loading="lazy"
              src="/images/about.jpg"
              alt=""
            /> */}
          </div>
        </div>

        {/* <div className="my-4">
          <AboutTimeline />
        </div> */}
      </div>
    </div>
  );
};

export default About;
