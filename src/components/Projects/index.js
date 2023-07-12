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
                    <a target="_blank" href="https://google.lt" id="weather-app" className="col-lg-6 col-sm-12 p-cont">
                        <h4 className="p-description">Weather forecast application</h4>
                    </a>
                    <a target="_blank" href="https://thecolourfactory.netlify.app/" id="colour-factory" className="col-lg-6 col-sm-12 p-cont">
                        <h4 className="p-description">Colour factory application</h4>
                    </a>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 p-cont">

                    </div>
                    <div className="col-lg-6 col-sm-12 p-cont">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects()