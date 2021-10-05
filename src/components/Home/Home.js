import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = (props) => {
    const { img, title } = props.home;
    return (
        <div className="home">
            <img src={img} alt="" />
            <h5>Course Title:{title}</h5>
        </div>
    );
};

export default Home;