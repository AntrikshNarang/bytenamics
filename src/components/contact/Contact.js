import React from 'react'
import './contact.css'

const Contact=() =>{
  return (
    <div>
       <section className="contact">
        <div className="content">
            <h2>Contact Us</h2>
            <p>Lorem, ipsum dolor sit amet adipisicing elit. Debitis corporis totam soluta eius ab dolor modi quod fuga illum nobis. Deserunt, earum facilis laborum reiciendis labore assumenda nobis reprehenderit vero ad? Quibusdam.</p>
        </div>
        <div className="container">
            <div className="contactInfo">
                <div className="box">
                    <div className="icon"><i className="fa-regular fa-address-book"></i> </div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>Ashokapuram, Nie Men's Hostel</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>507-475-6094</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><i className="fa-regular fa-envelope"></i></div>
                    <div className="text">
                        <h3>Email</h3>
                        <p><a href="mailto:example@gmail.com"></a> example@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
export default  Contact;