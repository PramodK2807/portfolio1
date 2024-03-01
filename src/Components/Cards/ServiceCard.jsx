import React from 'react';
import '../../assets/styles/services.css';

const ServiceCard = ({ title, icon, desc }) => {
  return (
    <>
      <div className="service_card h-100 position-relative rounded-2 border">
        <div className="service_img_container">
          <img className="" src={icon} alt="" />
        </div>
        <div className="content py-5 px-2 text-center">
          <p className="title p-0 m-0 mb-4">{title}</p>
          <p className="desc p-0 m-0">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
