import React from 'react'
import { container } from 'react-bootstrap'
import { Briefcase, GeoAlt, Coin } from 'react-bootstrap-icons';

const JobsDisplay = ({ joboffers }) => {
    return (
        <div className="jobs__display container">
            {joboffers.map((offer) => {
                const { id, title, type, comapny, comLogo, experience, location, industry, salary } = offer;
                return (
                    <div key={id} className="offer-container">
                        <img src={comLogo} alt={comapny} className='logo' />
                        <div className="job__info">
                            <h3>{title}</h3>
                            <p>{industry}</p>
                            <h4 className='job__info__icons'> <span><Briefcase />{type} </span> 
                            <span><GeoAlt />{location} </span>
                            <span><Coin />{salary}</span> </h4>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default JobsDisplay
