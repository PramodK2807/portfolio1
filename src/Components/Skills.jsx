import React, { useState } from 'react';
// import FlowChart from './FlowChart';

const Skills = () => {
  const [image, setImage] = useState([
    { id: 1, imgSrc: '/images/React.png' },
    { id: 2, imgSrc: '/images/redux.jpg' },
    { id: 3, imgSrc: '/images/js.png' },
    { id: 4, imgSrc: '/images/vue.png' },
    { id: 5, imgSrc: '/images/nuxt.png' },
    { id: 6, imgSrc: '/images/html.png' },
    { id: 7, imgSrc: '/images/css.png' },
    { id: 8, imgSrc: '/images/bs5.png' },
    { id: 9, imgSrc: '/images/nodejs.png' },
    { id: 10, imgSrc: '/images/exp.png' },
    { id: 11, imgSrc: '/images/mongo.jpg' },
    { id: 12, imgSrc: '/images/sanity.png' },
    { id: 13, imgSrc: '/images/strapi.webp' },
    { id: 14, imgSrc: '/images/nodejs.png' },
  ]);
  return (
    <>
      <div className="container ">
        <div className="text-center my-5 pt-5">
          <h1 className="text-dark title_heading">Skills</h1>
        </div>

        <div className="row gx-4 skills_container">
          <div data-aos="flip-left"  data-aos-duration="2000" className="col-md-4 my-2 my-md-0 ">
            <div className="h-100 w-100 bg-white rounded-3 border bg_shadow">
              <p className="text-center text-blue px-2">
                Backend Development Skills
              </p>
              <div>
                <ul>
                  <li> NodeJs </li>
                  <li> MongoDB</li>
                  <li> Express</li>
                  <li> Restful API</li>
                </ul>
              </div>
            </div>
          </div>

          <div data-aos="flip-left"  data-aos-duration="2000" className="col-md-4 negative_mt">
            <div className="h-100 w-100 bg-white rounded-3 border bg_shadow ">
              <p className="text-center text-blue px-2">
                Frontend Development Skills
              </p>
              <div>
                <ul>
                  <li> ReactJs</li>
                  <li> VueJs</li>
                  <li> NuxtJs</li>
                  <li> Javascript</li>
                  <li> HTML 5 & CSS 3</li>
                  <li> Bootstrap</li>
                  <li> VueX</li>
                  <li> Redux Toolkit</li>
                </ul>
              </div>
            </div>
          </div>

          <div data-aos="flip-left"  data-aos-duration="2000" className="col-md-4 my-2 my-md-0 ">
            <div className="h-100 w-100 bg-white rounded-3 border bg_shadow">
              <p className="text-center text-blue px-2">Mislaneous Skills</p>
              <div>
                <ul>
                  <li> Github</li>
                  <li> Sanity</li>
                  <li> Strapi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <FlowChart /> */}
      </div>
      <div className="skills_image_container my-5">
        <div className="images_container container">
          <div className="images_scroll d-flex align-items-center">
            {image.map((item) => (
              <img src={item?.imgSrc} loading="lazy" alt="" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
