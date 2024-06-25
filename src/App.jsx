import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero title="Test Title" subTitle="Test Subtitle"/>
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>     
    </>
  );
}

export default App