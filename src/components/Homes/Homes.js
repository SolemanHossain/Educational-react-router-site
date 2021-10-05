import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
import './Homes.css'

const Homes = () => {
    const [homes, setHomes] = useState([])
    useEffect(() => {
        fetch("./data.JSON")
            .then(res => res.json())
            .then(data => setHomes(data));
    }, [])
    return (
        <div>
            <div className="home-container">
                {
                    homes.map(home => <Home
                        home={home}
                    ></Home>)

                }
            </div>
        </div>
    );
};

export default Homes;