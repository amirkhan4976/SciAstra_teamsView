import React from 'react';
import defaultProfile from '../default_profile.png';

const MentorAdvisor = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center my-5">

                    <div className="col-md-4 text-center">
                        <div>
                            <img src={defaultProfile} alt='profile' style={{ width: "90px" }} />
                        </div>
                        <div>
                            <span className='name_mentor' style={{ fontSize: "13px", marginTop: "15px", textAlign: "center" }}>Dr. Omkar</span>
                        </div>
                        <div>
                            <span className='name_desi' style={{ fontSize: "13px", marginTop: "15px", textAlign: "center" }}>Principal Project Scientists</span>
                        </div>
                        <div>
                            <span className='name_desi' style={{ fontSize: "10px", marginTop: "1px", textAlign: "center" }}>IIT Madras</span>
                        </div>
                    </div>

                    <div className="col-md-4 text-center">
                        <div>
                            <img src={defaultProfile} alt='profile' style={{ width: "90px" }} />
                        </div>
                        <div>
                            <span className='name_mentor' style={{ fontSize: "13px", marginTop: "15px", textAlign: "center" }}>Akhil Tripathi</span>
                        </div>
                        <div className='wraper_btn'>
                            <a class="button" href="mailto:support@sciastra.com">
                                <span>Message him now <i class="fa-solid fa-paper-plane"></i></span>
                            </a>
                        </div>
                    </div>


                    <div className="col-md-4 text-center">
                        <div>
                            <img src={defaultProfile} alt='profile' style={{ width: "90px" }} />
                        </div>
                        <div>
                            <span className='name_mentor' style={{ fontSize: "13px", marginTop: "15px", textAlign: "center" }}>Vivek Dwivedi</span>
                        </div>
                        <div className='wraper_btn'>
                            <a class="button" href="mailto:support@sciastra.com">
                                <span>Message him now <i class="fa-solid fa-paper-plane"></i></span>
                            </a>
                        </div>
                    </div>

                </div >
            </div>
        </>
    )
}

export default MentorAdvisor