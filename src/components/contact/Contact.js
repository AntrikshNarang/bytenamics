import React from 'react'
import './contact.css';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
const Contact=() =>{
  return (
    <div>
        <section className="contact">
        <div className="content">
            <h2>Contact Us</h2>
           
        </div>
        <div className="container-contact">
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
                        <p>7006274849,
                            6005651754,
                            7051450844
                        </p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><i className="fa-regular fa-envelope"></i></div>
                    <div className="text">
                        <h3>Email</h3>
                        <p><a href="mailto:example@gmail.com"></a> 2021is_jaskaransingh_a@nie.ac.in
                        2021cs_aryanmandla_a@nie.ac.in
                        2021cs_antrikshnarang_a@nie.ac.in</p>
                    </div>
                </div>
            </div>
            <div className="embedmaps">
                <iframe classNameName='map-image' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.4652608509655!2d76.63822341460433!3d12.284423291309327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf65ebb4607601%3A0x5c186c9c000bf3fa!2sNIE%20Boys%20hostel!5e0!3m2!1sen!2sin!4v1679157930762!5m2!1sen!2sin" ></iframe>
            </div>
        </div>
    </section>
    </div>
  )
}
export default  Contact;