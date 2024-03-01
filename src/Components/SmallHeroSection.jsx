import React from 'react';

const SmallHeroSection = () => {
  return (
    <div className="bg_primary_red small_hero">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-4">
          <div>
            <p>
              <span className="number">1+</span>
            </p>
            <p> Years Experience</p>
          </div>
          <div>
            <p>
              <span className="number">10+</span>
            </p>
            <p>Personal Projects</p>
          </div>
          <div>
            <p>
              <span className="number">5+</span>
            </p>
            <p>Official Projects</p>
          </div>
          <div>
            <p>
              <span className="number">5+</span>
            </p>
            <p>Official Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallHeroSection;
