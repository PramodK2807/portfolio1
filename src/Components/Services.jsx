import React, { useState } from 'react';
import ServiceCard from './Cards/ServiceCard';
import resp from '../assets/images/b1.jpg';

const Services = () => {
  let [services, setServices] = useState([
    {
      id: 1,
      icon: '/images/backend.png',
      desc: 'I can create a modern looking websites with a great UI as per the clients requirement. I am focused to provide you a fully responsive and functional websites which enhance your business.',
      title: 'Frontend Development',
    },
    {
      id: 2,
      icon: '/images/res.png',
      desc: 'I am able to create a fully responsive website that works smoothly in different screen sizes i.e. mobile, tab, computer etc. ',
      title: 'Responsive Website',
    },
    {
      id: 2,
      icon: '/images/frontend.png',
      desc: 'I have some basic knowledge about the backend development in (mongoDB & Express js).',
      title: 'Backend Development',
    },
  ]);
  return (
    <div className="container">
      <div className="text-center my-5">
        <h1 className=" title_heading">Services</h1>
      </div>

      <div className="row">
        {services?.map((item) => (
          <div className="col-sm-6 col-md-6 col-lg-4 my-5">
            <ServiceCard
              title={item?.title}
              icon={item?.icon}
              desc={item?.desc}
              key={item?.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
