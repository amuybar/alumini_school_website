// pages/Home.js
import React from 'react';
import Nav from '../components/Home/Nav';
import Landing from '../components/Home/Landing';
import QuickLinksCard from '../components/Home/QuickLinks';
import NewsCard from '../components/Home/News';
import EventsCard from '../components/Home/Events';
import MemoriesCard from '../components/Home/Memories';
import Contact from '../components/Home/Contact';
import BottomLinks from '../components/Home/BottomLinks';
import Footer from '../components/Home/Footer';
import '../styles/Home/Home.css'

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Landing />
      <section className="cards-section">
      <QuickLinksCard title="Alumni Directory" link="/alumni-directory" />
        <QuickLinksCard title="Spotlight Forums" link="/class-notes-and-forums" />
        <QuickLinksCard title="Job Board" link="/job-board" />
        <QuickLinksCard title="Survey and Feedback" link="/feedback-and-surveys" />
       
        <NewsCard
          title="Latest News"
          image="images/cotere1.jpg"
          description="Catch up on the latest happenings in our community."
          link="/news"
        />
        <MemoriesCard
          title="Memorable Moments"
          image="images/meeting.jpg"
          description="Relive the memories of our time together."
          link="/memories"
        />
        <EventsCard
          title="Upcoming Events"
          image="images/gate.jpg"
          description="Stay informed about upcoming alumni events."
          link="/events"
        />
       
      </section>
      <Contact />
      <BottomLinks />
      <Footer />
    </div>
  );
};

export default Home;

