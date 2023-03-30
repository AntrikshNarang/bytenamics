# Bytenamics

Bytenamics is an event management web application that allows users to find and join hackathons hosted by different companies or organizers. It also enables admins to create and manage their own hackathons using a graphical user interface. Bytenamics was developed by a team of three developers for the Sellular Hackathon 2023.

## Features

### Authentication
- Users can sign up and log in to the application securely.
- Passwords are hashed and stored in the database for better security using bcrypt.js.
- Input validation is also done using Express Validator.

### User Management
- Users can browse all upcoming events hosted by different companies/organizers and join them to practice their skills.
- Admins can create, delete, and manage events through a graphical user interface (GUI).
- Admins can also see a list of users who have joined their hackathon, including their names and emails.

### Frontend
- Homepage includes information about the app's key features, along with reviews and an FAQ section.
- Navbar component is common for all pages.
- Events page lists all upcoming hackathons, and admins can create new ones using the GUI interface.
- Contact us page allows users to get in touch with the developers of the website.
- About us page provides information about the Bytenamics team.

### Backend
- Built using Node.js and Express.js
- MongoDB is used as the database.
- JSON Web Token (JWT) is used for authentication and authorization.
- RESTful API design.
- User passwords are hashed using bcrypt.js for better security.
- Input validation is done using Express Validator.
- Events can be created, read, updated, and deleted (CRUD operations) using the API.

### Deployment
- Bytenamics is deployed on Netlify.
- Backend Repo Link : https://github.com/AntrikshNarang/bytenamics-backend

## Conclusion

Bytenamics is a comprehensive hackathon management solution that offers a secure login system, event management, and user management. The app is designed to be user-friendly, with a clear and intuitive interface. With its robust security measures, Bytenamics is a reliable choice for anyone looking to host or participate in a hackathon.
