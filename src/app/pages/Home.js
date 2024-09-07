import React from 'react';
import Aboutus from './Aboutus';
import Sales from './Sales';
import RoadMap from './RoadMap';
import Blog from './Blog';
import Contact from './Contact';
import BigTech from '../components/home/BigTech';
import OurTeam from '../components/home/OurTeam';
import Hero from '../components/Hero/Hero';



function Home() {
  return (
    <div className='m-0 p-0'>
      <section id="sales">
        <Sales />
      </section>
      <section id="roadmap">
        <RoadMap />
        <BigTech />
        <OurTeam />
        <Hero />
      </section>
     
    </div>
  );
}

export default Home;

//081728

// <section id="home">
// <h1>Muhammad Hussain</h1>
// {/* Optional: Home section content */}
// </section>
// <section id="about">
// <h2>About Us</h2>
// <Aboutus />
// </section>
// <section id="sales">
// <h2>SALES</h2>
// <Sales />
// </section>
// <section id="roadmap">
// <h2>ROADMAP</h2>
// <RoadMap />
// </section>
// <section id="blogs">
// <h2>BLOGS</h2>
// <Blog />
// </section>
// <section id="contactus">
// <h2>CONTACT US</h2>
// <Contact />
// </section>
