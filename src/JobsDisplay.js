import React , {useState} from 'react'
import { container } from 'react-bootstrap';
import { Briefcase, GeoAlt, Coin } from 'react-bootstrap-icons';
import MoreInfo from './MoreInfo';

const JobsDisplay = ({ joboffers }) => {
    const [showMoreInfo , setShowMoreInfo] = useState(false);
    return (
        <div className="jobs__display container">
            {joboffers.map((offer) => {
                const { id, title, type, company, comLogo, experience, location, industry, salary } = offer;
                return (
                    <div key={id} className="offer-container">
                        <div className="offer__container-upper">
                            <img src={comLogo} alt={company} className='logo' />
                            <div className="job__info">
                                <h3 onClick={() => setShowMoreInfo(!showMoreInfo)} className='job__role'>{title}</h3>
                                <h4 className='job__company'>{company}</h4>
                                <p>{industry}</p>
                                <h4 className='job__info__icons'> <span><Briefcase />{type} </span>
                                    <span><GeoAlt />{location} </span>
                                    <span><Coin />{salary}</span> </h4>
                            </div>
                        </div>
                        <div className="offer__container-lower">
                            {
                                showMoreInfo && <MoreInfo {...offer} key={offer.id} />
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default JobsDisplay
