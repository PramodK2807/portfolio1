import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Slider from 'react-slick';

const Projects = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Blood Donation',
      img: '/images/blood.png',
      description:
        'Any user can request for the blood by just filling the form',
      techUsed: [
        'ReactJs',
        'HTML & CSS',
        'Bootstrap',
        'JavaScript',
        'NodeJs',
        'MongoDb',
      ],
      live: 'https://blood-help.netlify.com',
    },
    {
      id: 2,
      title: 'Swieat',
      img: '/images/sweat.png',
      description:
        'Sweat is a complete full stack project, used the context hooks for state management.',
      techUsed: [
        'ReactJs',
        'HTML & CSS',
        'Bootstrap',
        'JavaScript',
        'NodeJs',
        'MongoDb',
      ],
      live: 'https://sweatmern.onrender.com',
    },
    {
      id: 3,
      title: 'Simploan',
      img: '/images/loan.png',
      description:
        'Simploan is a project where user can request for loan with the number of installment which user can enter according to ease',
      techUsed: [
        'NuxtJs',
        'HTML & CSS',
        'Bootstrap',
        'JavaScript',
        'NodeJs',
        'MongoDb',
      ],
      live: 'https://simploan.netlify.app',
    },
    {
      id: 4,
      title: 'Weather App',
      img: '/images/weather.png',
      description: 'Know the temprature of you city.',
      techUsed: ['HTML & CSS', 'Bootstrap', 'JavaScript'],
      live: 'https://pramodk2807.github.io/weather-App',
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    // fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mb-5 pb-5">
      <div className="text-center">
        <h1 className=" title_heading">Projects</h1>
      </div>
      <div className="py-4">
        <Slider {...settings}>
          {data &&
            data?.map((items, i) => (
              <>
                <div
                  className="project_info_container m-2 rounded-2 position-relative"
                  key={i}>
                  <div className="position-absolute bottom-0 left-1 ps-2 tech_stack py-2 w-100">
                    {items?.title}
                  </div>
                  <div className="project_info ">
                    <p className="project_title bg-black text-center py-2 position-absolute w-100">
                      {items?.techUsed.join(', ')}
                    </p>
                    <div className="project_desc py-2 position-absolute w-100">
                      <p>{items?.description}</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <a className="text-decoration-none text-white">
                          {/* Github */}
                        </a>
                        <a
                          className="text-decoration-none text-white"
                          href={items?.live}
                          target="_blank">
                          Live
                        </a>
                      </div>
                    </div>
                  </div>
                  <img
                    style={{ height: '300px' }}
                    src={items?.img}
                    loading="lazy"
                    className="w-100 object-fit-cover rounded-4"
                    alt=""
                  />
                </div>
              </>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
