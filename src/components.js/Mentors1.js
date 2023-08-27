import React from 'react';
import defaultProfile from '../default_profile.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Mentors1 = () => {
    return (

        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="item">
                    <div className="mteam_member_box">
                        <div className="mteam_member_leader_box" style={{ width: "90px" }}>
                            <img src={defaultProfile} alt='profile' />
                        </div>
                        <div>
                            <span style={{ fontSize: "13px", marginTop: "15px", textAlign: "center" }}>Sehasree Mohanta</span>
                        </div>
                        <div>
                            <span style={{ fontSize: "10px", marginTop: "1px", textAlign: "center" }}>Cambridge University, UK</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <div className="item">
                    <div className="mteam_member_box">
                        <div className="mteam_member_leader_box" style={{ width: "90px" }}>
                            <img src={defaultProfile} alt='profile' />
                        </div>
                        <div>
                            <span style={{ fontSize: "13px", marginTop: "15px", textAlign: "center" }}>Sehasree Mohanta</span>
                        </div>
                        <div>
                            <span style={{ fontSize: "10px", marginTop: "1px", textAlign: "center" }}>IACS</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <div className="item">
                    <div className="mteam_member_box">
                        <div className="mteam_member_leader_box" style={{ width: "90px" }}>
                            <img src={defaultProfile} alt='profile' />
                        </div>
                        <div>
                            <span style={{ fontSize: "13px", marginTop: "15px", textAlign: "center" }}>Sehasree Mohanta</span>
                        </div>
                        <div>
                            <span style={{ fontSize: "10px", marginTop: "1px", textAlign: "center" }}>IACS</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <div className="item">
                    <div className="mteam_member_box">
                        <div className="mteam_member_leader_box" style={{ width: "90px" }}>
                            <img src={defaultProfile} alt='profile' />
                        </div>
                        <div>
                            <span style={{ fontSize: "13px", marginTop: "15px", textAlign: "center" }}>Sehasree Mohanta</span>
                        </div>
                        <div>
                            <span style={{ fontSize: "10px", marginTop: "1px", textAlign: "center" }}>IACS</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <div className="item">
                    <div className="mteam_member_box">
                        <div className="mteam_member_leader_box" style={{ width: "90px" }}>
                            <img src={defaultProfile} alt='profile' />
                        </div>
                        <div>
                            <span style={{ fontSize: "13px", marginTop: "15px", textAlign: "center" }}>Sehasree Mohanta</span>
                        </div>
                        <div>
                            <span style={{ fontSize: "10px", marginTop: "1px", textAlign: "center" }}>IACS</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <div className="item">
                    <div className="mteam_member_box">
                        <div className="mteam_member_leader_box" style={{ width: "90px" }}>
                            <img src={defaultProfile} alt='profile' />
                        </div>
                        <div>
                            <span style={{ fontSize: "13px", marginTop: "15px", textAlign: "center" }}>Sehasree Mohanta</span>
                        </div>
                        <div>
                            <span style={{ fontSize: "10px", marginTop: "1px", textAlign: "center" }}>IACS</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    )
}

export default Mentors1