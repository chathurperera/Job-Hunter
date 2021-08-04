import React from 'react'

const MoreInfo = ({ id, desc, requirements }) => {
    return (
        <section className='moreInfo'>
            <hr />
            <div key={id}>
                        <div className="description">
                            <h3>description</h3>
                            <p>{desc}</p>
                        </div>
                        <h3>requirements</h3>
                        <ul>
                            {
                                requirements.map((requirement) => {
                                    return (
                                        <li>{requirement}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

        </section>
    )
}

export default MoreInfo
