import React from 'react';
import "./Speciallity.css"

const Speciallity = (props) => {
    const { image, title, speciallity } = props.special;
    return (
        <div className="special">
            <img src={image} alt="" />
            <h4>Course Name:{title}</h4>
            <h6>Speciallity : {speciallity}</h6>
        </div>
    );
};

export default Speciallity;