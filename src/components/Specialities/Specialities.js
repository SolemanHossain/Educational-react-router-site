import React, { useEffect, useState } from 'react';
import Speciallity from '../Speciallity/Speciallity';
import "./Specialities.css"

const Specialities = () => {
    const [specials, setSpecial] = useState([])
    useEffect(() => {
        fetch("./data.JSON")
            .then(res => res.json())
            .then(data => setSpecial(data));
    }, [])
    return (
        <div>
            <h2 className="header"><u>Our Course Speciallity</u></h2>
            <div className="spcl-container">
                {
                    specials.map(special => <Speciallity
                        special={special}
                    ></Speciallity>
                    )

                }
            </div>
        </div>
    );
};

export default Specialities;