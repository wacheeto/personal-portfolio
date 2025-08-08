import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

import goodMatcha from '../assets/good-matcha.png';
import absoluteFitness from '../assets/absolute-fitness.png'
import certiport from '../assets/certiport.png'
import pmi from '../assets/pmi.png'
import cisco from '../assets/cisco.png'
import pfp from '../assets/pfp.png'
import computer from '../assets/computer.png'
import {Link} from 'react-router';
function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <>
            <div className="container p-4 d-flex align-items-center justify-content-center text-white"  data-aos="fade-up">
                <div className="max-container w-100">
                    <div className="row g-2">
                        <div className="col-12 col-md-6 ">
                            <div className="bento-square content-center h-100" id='pfp-container'>
                                <img src={pfp} alt="" className='w-100 h-100 img-fluid ' id='pfp-img' />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column   ">
                            <div className="bento-square content-center">
                                <span className="name-text main-font me-auto" >
                                    HI, I'm Kiel.
                                </span>
                            </div>
                            <div className="bento-square mt-2 flex-column "  >
                                <p className='fs-5 sub-font me-auto'>Web Developer in Metro Manila</p>
                                <p>Exploring the world of web and mobile development. I enjoy building responsive websites and apps that not only look good but also work smoothly. Every project I work on is a chance to learn something new and improve my skills..</p>
                                <div className='d-flex gap-2 w-100'>
                                    <div className="d-flex content-center gap-1 contact">
                                        <i class="fa-solid fa-phone-volume"></i>
                                        <span>09123456789</span>
                                    </div><div className="d-flex content-center gap-1 contact">
                                        <i class="fa-solid fa-envelope"></i>
                                        <span>example@gmail.com</span>
                                    </div>
                                    <div className="d-flex content-center gap-1 contact">
                                        <i class="fa-solid fa-location-pin"></i>
                                        <span>Metro Manila</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container p-4 d-flex align-items-center justify-content-center flex-column mb-5 text-white"  data-aos="fade-up">
                <div className="max-container w-100 d-flex flex-column">
                    <h1 className='fw-bold text-center sub-font mb-3'>Web Development made easy</h1>
                    <span className='text-center'>I am passionate about turning ideas into real, working websites and apps. I believe web development doesn’t have to be complicated. It just needs the right mindset, the right tools, and a love for learning. Whether I'm working on a class project or something personal, I focus on making things simple, useful, and user-friendly. My goal is to keep growing, build cool stuff, and help others do the same.</span>
                </div>
            </section>
            
            {/* fix later? */}
            <section className="container p-4 d-flex flex-column align-items-center justify-content-center text-white " id='skills' data-aos="fade-right">
                <div className="w-100 max-container sub-font">
                    <span className="text-start p-2">
                        Skills
                    </span>
                </div>
                <div className="max-container d-flex align-items-center justify-content-center gap-2 w-100 p-2">
                    <div className="skills-container w-100 content-center">
                        <i className="fa fa-brands fa-react fa-lg text-primary"></i>
                    </div>
                    <div className="skills-container w-100 content-center mt-3">
                        <i class="fa fa-brands fa-java fa-lg text-danger"></i>
                    </div>
                    <div className="skills-container w-100 content-center">
                        <i class="fa fa-brands fa-html5 fa-lg text-warning "></i>
                    </div>
                    <div className="skills-container w-100 content-center mt-3">
                        <i class="fa fa-brands fa-github fa-lg"></i>
                    </div>
                    <div className="skills-container w-100 content-center">
                        <i class="fa fa-brands fa-bootstrap fa-lg text-primary"></i>
                    </div>
                </div>
            </section>
            <div className="container p-4 d-flex align-items-center justify-content-center text-white my-5">
                <div className="max-container  w-100">
                    <div className="row g-2 sub-font">
                        <div className="col-12 col-md-6" data-aos="fade-right">
                            <div className="bento-square content-center h-100">
                                <img src={computer} alt="" className='w-100 h-100 img-fluid ' id='pfp-img' />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 " data-aos="fade-left">
                            <div className="bento-square ">
                                <h5 className='text-center fs-4 fw-bold '>MISSION</h5>
                                <div className="d-flex h-100 w-100" >
                                    {/* justfy if need */}
                                    <p>My mission is to design and build intuitive, user-centered web and mobile applications that address real-world problems through clean code, thoughtful design, and innovative solutions. I aim to create digital experiences that are not only functional but also accessible and enjoyable for users.</p>
                                </div>
                            </div>
                            <div className="bento-square">
                                <h5 className='text-center fs-4 fw-bold '>VISION</h5>
                                <div className="d-flex h-100 w-100" >
                                    <p> My vision is to empower small businesses by providing them with user-friendly digital solutions and modern design that elevate their online presence, streamline their operations, and support their growth in a competitive digital landscape.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <section className="container p-4 d-flex align-items-center justify-content-center text-white " id='projects' data-aos="fade-up">
                <div className="max-container w-100 sub-font">
                    <span className="text-start text-white p-2">
                        Recent works
                    </span>
                    <div className="d-flex p-2 gap-2 w-100" id='large'>
                        <div className="row g-2">
                            <div className="col-12 col-md-6">
                                <div className="website-container w-100 h-100 text-center website-img text-white ">
                                    <Link to={"https://wacheeto.github.io/Good-Matcha-Great-Matcha/"} className='w-100 h-100 text-white' target='_blank'>
                                        <div className="absolute-text p-2 gap-2">
                                            <i className="fa-solid fa-thumbtack"></i>
                                            <span style={{fontSize:12}}>Matcha-Based Website</span>
                                        </div>
                                        <img src={goodMatcha} alt="good matcha great matcha " className='w-100 h-100 img-fluid ' />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="website-container w-100 h-100 text-center website-img text-white ">
                                    <Link to={"https://wacheeto.github.io/Absolute_Fitness/"} className='w-100 h-100 text-white' target='_blank'>
                                        <div className="absolute-text p-2 gap-2">
                                            <i className="fa-solid fa-thumbtack"></i>
                                            <span style={{fontSize:12}}>Hero-Based Gym Website</span>
                                        </div>
                                        <img src={absoluteFitness} alt="good matcha great matcha " className='w-100 h-100 img-fluid ' />
                                    </Link>
                                </div>
                            </div>
                            {/* <div className="col-12 col-md-6">
                                <div className="website-container w-100 h-100 text-center website-img text-white ">
                                    <Link to={"https://wacheeto.github.io/Absolute_Fitness/"} className='w-100 h-100 text-white' target='_blank'>
                                        <div className="absolute-text p-2 gap-2">
                                            <i className="fa-solid fa-thumbtack"></i>
                                            <span style={{fontSize:12}}>Hero-Based Gym Website</span>
                                        </div>
                                        <img src={absoluteFitness} alt="good matcha great matcha " className='w-100 h-100 img-fluid ' />
                                    </Link>
                                </div>
                            </div> */}
                            {/* <div className="col-12 col-md-6">
                                <div className="website-container w-100 h-100 text-center website-img text-white ">
                                    <div className="absolute-text p-2 gap-2">
                                    <i className="fa-solid fa-thumbtack"></i>
                                    <span style={{fontSize:12}}>Matcha-Based Website</span>
                                    </div>
                                    <img src={goodMatcha} alt="good matcha great matcha " className='w-100 h-100 img-fluid ' />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="container p-4 d-flex align-items-center justify-content-center" id='credentials' data-aos="fade-up">
                <div className="max-container d-flex flex-column  w-100  gap-2 sub-font">
                    <span className="text-start text-white p-2">
                        Certifications
                    </span>
                    <div className="row g-2 w-100 align-items-center justify-content-center text-white">
                        <div className="col-6 col-md-4 ">
                            <div className="certifs-container w-100 d-flex align-items-center justify-content-start gap-2 px-2  ">
                                <div className="certificate-logo ">
                                    <img src={certiport} alt="" />
                                </div>
                                <span className='certif-text'>IT Specialist - JavaScript</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 ">
                            <div className="certifs-container w-100 d-flex align-items-center justify-content-start gap-2 px-2">
                                <div className="certificate-logo">
                                    <img src={pmi} alt="" />
                                </div>
                                <span className='certif-text'>PMI Project Management Ready™</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 ">
                            <div className="certifs-container w-100 d-flex align-items-center justify-content-start gap-2 px-2">
                                <div className="certificate-logo">
                                    <img src={certiport} alt="" />
                                </div>
                                <span className='certif-text'>IT Specialist - HTML and CSS</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 ">
                            <div className="certifs-container w-100 d-flex align-items-center justify-content-start gap-2 px-2">
                                <div className="certificate-logo">
                                    <img src={cisco} alt="" />
                                </div>
                                <span className='certif-text'>Linux Essentials Certification</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 ">
                            <div className="certifs-container w-100 d-flex align-items-center justify-content-start gap-2 px-2">
                                <div className="certificate-logo" >
                                    <img src={cisco} alt=""/>
                                </div>
                                <span className='certif-text'>Enterprise Networking,Security & ...</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 ">
                            <div className="certifs-container w-100 d-flex align-items-center justify-content-start gap-2 px-2">
                                <div className="certificate-logo">
                                    <img src={certiport} alt="" />
                                </div>
                                <span className='certif-text'>IT Specialist - Networking</span>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 ">
                            <div className="certifs-container w-100 d-flex align-items-center justify-content-start gap-2 px-2">
                                <div className="certificate-logo">
                                    <img src={cisco} alt="" />
                                </div>
                                <span className='certif-text'>CCNA: Introduction to Networks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container p-4 d-flex align-items-center justify-content-center my-5 mt-5" id='contact' data-aos="fade-up">
                <div className="max-container w-100 h-100 text-white sub-font text-center ">
                    <h1 className='mb-3'>Are you ready? Let's get started!</h1>
                    <p className="mb-4">I'm excited to collaborate on meaningful projects. Reach out and let’s build something great together.</p>
                    <a href="mailto:kielvelarde0629@example.com" className=" text-white content-center custom-btn mt-5 text-dark mx-auto ">
                        <span>Contact Me</span>
                        <i class="fa fa-solid fa-envelope text-white ms-2"></i>
                    </a>
                </div>
            </section>
        </>
    </div>
  )
}

export default Home