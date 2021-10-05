import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className="services">
                <h2>Our service</h2>
                <h3>We provide different types of course</h3>
            </div>
            <div className="home-container">

                {
                    services.map(service => <Service
                        service={service}
                    ></Service>
                    )

                }
            </div>
        </div>
    );
};

export default Services;