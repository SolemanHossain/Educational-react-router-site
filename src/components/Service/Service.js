import React from 'react';

const Service = (props) => {
    const { img, title, courseType, courseDuration } = props.service;
    return (
        <div className='home'>
            <h4>Course Title :{title}</h4>
            <h5>Duration: {courseDuration}months</h5>
            <h6>Course Type : {courseType}</h6>


        </div>
    );
};

export default Service;