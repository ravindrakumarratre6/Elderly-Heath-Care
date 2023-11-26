import React from 'react'
import HealthMonitor from './HealthMonitor'
import FindDoctor from './FindDoctor'
import OurService from './OurService'
import About from './About'
import Contact from './Contact'
function Home() {
  return (
    <div>
      <HealthMonitor/>
      <FindDoctor/>
      <OurService/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home