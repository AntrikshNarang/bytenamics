import React, { useState } from 'react'
import './events.css'

const Event = (props) => {
    const [ResMsg, setResMsg] = useState('')
    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:5000/hackathons/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const json = await response.json();
        console.log(json);
        const newEvents = props.Events.filter((element) => (element._id !== id))
        const newMyEvents = props.MyEvents.filter((element) => (element._id !== id))
        props.setEvents(newEvents);
        props.setMyEvents(newMyEvents);
    }
    const joinNow = async (id) => {
        if(!localStorage.getItem('token')){
            setResMsg('Please login first');
            return;
        }
        const response = await fetch(`http://localhost:5000/participants/join`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                name: props.User.name,
                email: props.User.email,
                hackathonid: id
            })
        })
        const json = await response.json();
        setResMsg((json.success) ? (json.message) : ('Could not Register User'))
    }
    const showParticipants = async (id) => {
        const response = await fetch(`http://localhost:5000/participants/get/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        props.setParticipants(json);
        props.openModal();
    }
    return (
        <>
            <div className="card my-2 events" style={{ backgroundColor: '#fcfcfc' }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}
                        <sup style={{ color: (props.platform === 'Online') ? ('red') : ('blue') }}> {props.platform}</sup>
                    </h5>
                    <p style={{ position: 'absolute', right: '10px', top: '10px', backgroundColor: 'green', borderRadius: '10px', fontSize: '10px', color: 'white', padding: '5px' }}>{props.organizername}</p>
                    <p className="card-text">{props.description}</p>
                    {props.showMyEvents && <button className="btn btn-sm btn-outline-dark" onClick={() => (showParticipants(props.hackathonid))}>Show Participants</button>}
                    {!props.showMyEvents && <button className="btn btn-sm btn-outline-dark" onClick={() => (joinNow(props.hackathonid))}>Join Before - {props.date}</button>} {props.showMyEvents && <i class="fa-solid fa-trash" onClick={() => (handleDelete(props.hackathonid))}></i>}
                    <p className="resMsg text-decoration-underline" style={{fontSize:'14px',color:'red'}}>{ResMsg}</p>
                </div>
            </div>
        </>
    )
}

export default Event