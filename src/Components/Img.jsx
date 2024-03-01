import React from 'react';
// import image from '../assets/images/profile.webp';
import circle from '../assets/images/circle.svg';

const Img = () => {
  return (
      <div className="position-relative profile_img">
        <div className="circle">
          <div className="image-container">
            <img className="w-100 img-fluid" src='/images/profile.webp' alt="" />
          </div>
          <div className="rotating-border"></div>
        </div>
      </div>
  );
};

export default Img;
