"use client";
import React, { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'
const ResponsiveNav = () => {
  const [showNav, setShowNav]=useState(false);
  const handNavShow =()=>setShowNav(true)
  const handleCloseShow =()=>setShowNav(false)
    return (
    <div>
        <Nav openNav={handNavShow}/>
        <MobileNav showNav={showNav} closeNav={handleCloseShow}/>
    </div>
  )
}

export default ResponsiveNav