import React from 'react'
import TopBar from '../Header/TopBar'
import Hero from '../Header/Hero'
import JoinUs from './JoinUs'
import About from './About'



export default function Home() {
    return (
      <>
        <div style={{
        background: "linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)"
        }}>
          <TopBar/>
          <Hero/>
          <JoinUs/> 
        </div>
      </>
    )
  }
