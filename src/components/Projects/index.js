import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./styles.css"

// Images
import WeatherAppImg from '../../assets/img/weather-app.png'


function Projects() {

    return (
        <div className="box">
            <div className="content">
                <div className="row">
                    <a target="_blank" href="https://mariuml.github.io/plan-my-trip/" id="plan-my-trip" className="col-lg-6 col-sm-12 p-cont showUp">
                        <h4 className="p-description">Plan My Trip</h4>
                    </a>
                    <a target="_blank" href="https://thecolourfactory.netlify.app/" id="colour-factory" className="col-lg-6 col-sm-12 p-cont showUp">
                        <h4 className="p-description">Colour factory</h4>
                    </a>
                </div>
                <div className="row">
                    <a target="_blank" href="https://markubil.github.io/weather-forecast/" id="weather-app" className="col-lg-6 col-sm-12 p-cont showUp">
                        <h4 className="p-description">Weather forecast</h4>
                    </a>
                    <a target="_blank" href="https://markubil.github.io/Coding-quiz/" id="coding-quiz" className="col-lg-6 col-sm-12 p-cont showUp">
                        <h4 className="p-description">Coding quiz</h4>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects()