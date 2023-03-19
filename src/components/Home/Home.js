import React,{useState} from 'react'
import Faq from '../faq/Faq';
import Feature1 from '../Features/Feature1';
import Feature2 from '../Features/Feature2';
import Feature3 from '../Features/Feature3';
import Feature4 from '../Features/Feature4';
import Feature5 from '../Features/Feature5';
import Feature6 from '../Features/Feature6';
import Intro from '../Intro';
import Reveiws from '../reveiws/Reviews';
import Slider from '../Slider/Slider';

const Home=(props)=> {

  const[intro1,setIntro1]=useState('true')
  const[intro2,setIntro2]=useState('')

  const leftImageHandler=()=>{
    setIntro1(true)
    setIntro2(false)

  }

  const rightImageHandler=()=>{
    setIntro1(false)
    setIntro2(true)

  }
 
  

    const intros=[
        {
            background:"url(https://c4.wallpaperflare.com/wallpaper/806/593/307/low-poly-geometry-digital-art-planetary-rings-wallpaper-preview.jpg)",
            text1:'Join forces with fellow innovators, ignite your creativity, and code your way to a better future.',
            text2:'Get ready to break boundaries and push the limits of technology at our hackathon! Collaborate with other passionate individuals and tackle real-world problems through creative solutions.',
            btn1:'Login',
            btn2:'Signup'
        },
        {
          background:"url(https://c4.wallpaperflare.com/wallpaper/455/205/165/fantasy-art-digital-art-artwork-science-fiction-wallpaper-preview.jpg)",
          text2:'Bytenamics is made for organizing and executing hackathons linked to a corporate innovation program.',
          text1:'Sponsers and Partners',
          text3:'Looking for a chance to turn your innovative ideas into reality? Join our hackathon and work alongside industry experts to create groundbreaking solutions to real-world problems.',
          src1:"https://www.hackerrank.com/wp-content/uploads/2022/10/peloton_black.png",
          src2:"https://www.hackerrank.com/wp-content/uploads/2022/10/atlassian_black.png",
          src3:"https://www.hackerrank.com/wp-content/uploads/2022/10/bloomberg_black.png",
          src4:"https://www.hackerrank.com/wp-content/uploads/2022/10/vmware_black.png",
          src5:"https://www.hackerrank.com/wp-content/uploads/2022/10/stripe_black.png",
          src6:"https://www.hackerrank.com/wp-content/uploads/2022/10/goldmansachs_black.png",
          src7:"https://www.hackerrank.com/wp-content/uploads/2022/10/adobe_black.png",
          src8:"https://www.hackerrank.com/wp-content/uploads/2022/10/linkedin_black.png"
        }
    ]
    
  return (
    <>
    <div>
        {intro1 && <Intro background={intros[0].background} text1={intros[0].text1} text2={intros[0].text2} btn1={intros[0].btn1} btn2={intros[0].btn2} token={props.token}></Intro>}

        {intro2 && <Intro background={intros[1].background} text3={intros[1].text3} text1={intros[1].text1}  src1={intros[1].src1} src2={intros[1].src2} src3={intros[1].src3} src4={intros[1].src4} src5={intros[1].src5} src6={intros[1].src6} src7={intros[1].src7} src8={intros[1].src8} hideButtons></Intro>}

        <Slider onLeft={leftImageHandler} onRight={rightImageHandler}></Slider>
        <div className='features-cards'>
      <Feature1></Feature1>
      <Feature2></Feature2>
      <Feature3></Feature3>
      <Feature4></Feature4>
      <Feature5></Feature5>
      <Feature6></Feature6>
      <Reveiws></Reveiws>
      <Faq></Faq>
      </div>
    </div>
    </>
  )
}
export default Home;