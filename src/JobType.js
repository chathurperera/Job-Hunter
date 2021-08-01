import React from 'react'

const JobType = ({types , filterJobs}) => {
    return (
        <div className='types__container' >
            {
                types.map((type,index) => {
                    return (
                        <div className="input__container" key={index}>
                            <label htmlFor={type}>{type}</label>
                            <input type="radio" name="type" id={type} onClick={() => filterJobs(type)} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default JobType
