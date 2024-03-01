import React from 'react';
import { Chrono } from 'react-chrono';
import '../assets/styles/timeline.css';

const AboutTimeline = () => {
  const items = [
    {
      title: 'June 2022',
      cardTitle: 'Graduation',
      cardSubtitle: 'St. Aloysius Institute of Technology Jabalpur',
      cardDetailedText:
        'Completed my Gradution in 2022 with 8.22 CGPA (RGPV University)',
    },
    {
      title: 'June 2018',
      cardTitle: 'Diploma',
      cardSubtitle: 'St. Aloysius Institute of Technology Jabalpur',
      cardDetailedText:
        'I have done my Diploma in year 2018 with 7.79 CGPA (RGPV University)',
    },
    {
      title: 'May 2015',
      cardTitle: '10th',
      cardSubtitle: 'MP Board of Secondary Education ',
      cardDetailedText:
        'My schooling was completed in 2015 i.e., class X with 59.3%',
    },
  ];
  return (
    <div className="chrono_container">
      <Chrono items={items} mode="VERTICAL_ALTERNATING" hideControls={true} />
    </div>
  );
};

export default AboutTimeline;
