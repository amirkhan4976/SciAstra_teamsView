import React from 'react';
import './App.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Mentors1 from './components.js/Mentors1';
import Mentors2 from './components.js/Mentors2';
import Mentors3 from './components.js/Mentors3';
import MentorAdvisor from './components.js/MentorAdvisor';


function App() {
  return (
    <>
      <h1 className='container text-center my-5 head-text'>Team Page
        <br />
        <span className='fs-4 font-semibold'>Learn from scientists, research scholars from the top institutes in the world.</span>
      </h1>
      <div className='row my-5 justify-content-center'>
        <button type='button' className='institute-button mb-4 px-5 py-3 btn m-2 col-md-2'>Cambridge University</button>
        <button type='button' className='institute-button mb-4 px-5 py-3 btn m-2 col-md-2'>Harvard University</button>
        <button type='button' className='institute-button mb-4 px-5 py-3 btn m-2 col-md-2'>University of California</button>
        <button type='button' className='institute-button mb-4 px-5 py-3 btn m-2 col-md-2'>ETH Zurich</button>
        <button type='button' className='institute-button mb-4 px-5 py-3 btn m-2 col-md-2'>Max Planck</button>
        <button type='button' className='institute-button mb-4 px-5 py-3 btn m-2 col-md-2'>University of Edinberg</button>
        <button type='button' className='institute-button mb-4 px-5 py-3 btn m-2 col-md-2'>John's Hopkins</button>
        <button type='button' className='institute-button mb-4 px-5 py-3 btn m-2 col-md-2'>Michigan State</button>
        <button type='button' className='institute-button mb-4 px-5 py-3 btn m-2 col-md-2'>University of Illinois</button>
        <button type='button' className='institute-button mb-4 px-5 py-3 btn m-2 col-md-2'>Humboldt University Berlin</button>
      </div>

      <h1 className='container text-center my-5 head-text'>Meet your mentors</h1>

      {/* <div className="item">
        <div className="mteam_member_box">
          <div className="mteam_member_leader_box">
            <img src={defaultProfile} style={{ width: "90px" }} alt='profile' />
          </div>
          <span style={{ fontSize: "13px", marginTop: "15px", textAlign: "center" }}>Sehasree Mohanta</span>
          <span style={{ fontSize: "10px", marginTop: "1px", textAlign: "center" }}>IACS</span>
        </div>
      </div> */}
      <h3 className='teamsubjectheading mb-5'>Biology</h3>
      <Mentors1 />

      <br />

      <h3 className='teamsubjectheading mb-5'>Physics</h3>
      <Mentors2 />

      <br />

      <h3 className='teamsubjectheading mb-5'>Mathematics</h3>
      <Mentors3 />

      <h1 className='container text-center my-5 head-text'>Mentor & Advisor</h1>
      <MentorAdvisor />

    </>
  );
}

export default App;
