import React, { useEffect, useState } from 'react'
import Event from './Event';

const Events = () => {
  const initialevents = [
    {
      title: 'Sellular Hackathon',
      description: 'Sellular Hackathon is an all India Hackathon which would will help the Youth to have more interaction with like minded people, get a recoginition from sellular and have more Connections along with Developing new skills',
      date: (new Date(2017, 9, 1)).toDateString(),
      organizername: 'Sellular Networks',
      platform: 'Online'
    },
    {
      title: 'Virtual Book Club',
      description: 'Join our virtual book club and discuss the latest bestsellers with other bookworms. Our first book will be "The Silent Patient" by Alex Michaelides.',
      date: (new Date(2022, 2, 21)).toDateString(),
      organizername: 'BookBar',
      platform: 'Online'
    },
    {
      title: 'Yoga in the Park',
      description: 'Join us for a free yoga session in the park. All skill levels welcome!',
      date: (new Date(2022, 4, 15)).toDateString(),
      organizername: 'Team Yogi',
      platform: 'Offline'
    },
    {
      title: 'Cooking Class',
      description: 'Learn how to cook authentic Italian cuisine with our experienced chef. Limited spots available, register now!',
      date: (new Date(2022, 3, 10)).toDateString(),
      organizername: 'Cook with Diksha',
      platform: 'Offline'
    },
    {
      title: 'Charity Run',
      description: 'Participate in our annual charity run and help raise funds for a good cause. Choose from 5k or 10k distances.',
      date: (new Date(2022, 5, 5)).toDateString(),
      organizername: 'Run India',
      platform: 'Offline'
    },
    {
      title: 'The Great Science Fair',
      description: 'Join us for the Great Science Fair, an event that showcases the latest and greatest in scientific discoveries from all around the world. You will get the opportunity to interact with some of the brightest minds in the field and learn about breakthroughs in a variety of scientific disciplines.',
      date: (new Date(2023, 3, 1)).toDateString(),
      organizername: 'Veritasium',
      platform: 'Online'
    },
    {
      title: 'International Food Festival',
      description: 'Experience the diverse and delicious cuisine from around the world at the International Food Festival. From savory to sweet, we have it all! This event is a feast for your taste buds and a celebration of the multiculturalism that exists within our community.',
      date: (new Date(2023, 4, 15)).toDateString(),
      organizername: 'The Foodie Club',
      platform: 'Offline'
    },
    {
      title: 'Art in the Park',
      description: 'Come and explore the beauty and creativity of local artists at Art in the Park. You will see a variety of artwork including paintings, sculptures, and photographs. It is a great opportunity to support the arts and discover unique pieces that can enhance your home or office decor.',
      date: (new Date(2023, 5, 30)).toDateString(),
      organizername: 'The Artistry Show',
      platform: 'Offline'
    }
  ];
  const [Events, setEvents] = useState(initialevents); 
  const [ErrorMsg, setErrorMsg] = useState('');
  const [Name, setName] = useState('')
  const [showMyEvents, setshowMyEvents] = useState(false);
  const [MyEvents, setMyEvents] = useState([]);
  const [Params, setParams] = useState({
    title: '',
    description: '',
    platform: '',
    date: '',
  });
  const [isAdmin, setisAdmin] = useState(false);
  const handleSubmit = async(e) =>{
    e.preventDefault();
    Params.date = document.getElementById('dateField').value;
    if(!Params.title || !Params.description || !Params.date){
      setErrorMsg('Please fill all the fields');
      console.log('Fill all the Fields')
      return;
    }
    setErrorMsg('');
    console.log((Params.date));
    Params.platform = (document.getElementById('exampleCheck1').checked)?('Offline'):('Online');
    const response = await fetch('http://localhost:5000/hackathons/add',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title:Params.title,description: Params.description,platform: Params.platform,date:Params.date.toString()})
    })
    const json = await response.json();
    console.log(json)
    getEvents();
  }
  const getEvents = async () => {
    const response = await fetch('http://localhost:5000/hackathons/fetch',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    })
    const json = await response.json();
    setEvents(json.map((element)=>{return {...element,date:element.date.slice(0,10)}}));
  }
  useEffect(() => {
    getUser();
    getEvents();
  }, [])
  const getUser = async () => {
    const response = await fetch('http://localhost:5000/auth/user/getuser',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    })
    const json = await response.json();
    setisAdmin((json.role==='admin')?(true):(false));
    setName(json.name)
  }
  const showMyHackathons = async (e) => {
    e.preventDefault();
    setshowMyEvents(!showMyEvents);
    const response = await fetch('http://localhost:5000/hackathons/myhackathons',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    })
    const json = await response.json();
    setMyEvents(json);
  }

  return (
    <>
      {isAdmin &&
      (<div className="container my-5" style={{ backgroundColor: '#f0f0f0', padding: '30px', borderRadius: '25px' }}>
        <h2>Add an Event - {Name}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Enter Hackathon Title</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
            onChange={(e)=>{setParams((prev)=>({...prev,title:e.target.value}))}}  />
            <div id="emailHelp" className="form-text">The Hackathon Name should be short and specific</div>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} 
            onChange={(e)=>{setParams((prev)=>({...prev,description:e.target.value}))}} ></textarea>
            <label htmlFor="floatingTextarea2">Hackathon Description</label>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Is the Event Offline?</label>
          </div>
          <div className='mb-3'>
            <input type="date" name="" id="dateField" />
          </div>
          {ErrorMsg && <p className="ErrorMsg">{ErrorMsg}</p> }
          <button type="submit" className="btn btn-primary">Submit</button>
          <a href="" className="mx-2" onClick={showMyHackathons}>See My Events</a>
        </form>
      </div>
      )}
      {showMyEvents && (
        <div className="container my-3">
        <h1>My Hackathons</h1>
        {/* {initialevents.map(())} */}
        {MyEvents.map((element, index) => {
          return (
            <Event key={index} title={element.title} description={element.description} date={element.date} organizername={element.organizername} platform={element.platform} />
          )
        })}
      </div>
      )}


      <div className="container my-3">
        <h1>Popular Hackathons</h1>
        {/* {initialevents.map(())} */}
        {Events.map((element, index) => {
          return (
            <Event key={index} title={element.title} description={element.description} date={element.date} organizername={element.organizername} platform={element.platform} />
          )
        })}
      </div>
    </>
  )
}

export default Events