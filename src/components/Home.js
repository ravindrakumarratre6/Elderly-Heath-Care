import React from 'react'
import HealthMonitor from './HealthMonitor'
import FindDoctor from './FindDoctor'
import OurService from './OurService'
import About from './About'
import Contact from './Contact'
import TestiMonial from './TestiMonial'
function Home() {
  return (
    <div>
      <HealthMonitor/>
      <FindDoctor/>
      <OurService/>
      <About/>
      <TestiMonial/>
      <Contact/>
    </div>
  )
}

export default Home