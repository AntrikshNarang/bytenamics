import React from 'react'

const Event = (props) => {
    return (
        <>
            <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">{props.title}
                        <sup style={{ color: (props.platform === 'Online') ? ('red') : ('blue') }}> {props.platform}</sup>
                    </h5>
                    <p style={{ position: 'absolute', right: '10px', top: '10px', backgroundColor: 'green', borderRadius: '10px', fontSize: '10px', color: 'white', padding: '5px' }}>{props.organizername}</p>
                    <p className="card-text">{props.description}</p>
                    <a href="/" className="btn-sm">Join Before - {props.date}</a>
                </div>
            </div>
        </>
    )
}

export default Event