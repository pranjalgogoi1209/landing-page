import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../../assets/header/top-bar/logo2.png'
import dropdownArrow from '../../assets/header/top-bar/material-symbols_keyboard-arrow-down-rounded.svg'

export default function TopBar() {
    return (
      <div className='flex justify-around h-[85px] shrink-0'>
          {/* left top-bar */}
          <div className='flex justify-evenly items-center'>
            {/* logo */}  
            <Link to={'/'}>
            <div className="shrink-0 bg-no-repeat h-[45px] w-[138px]" style={{
              background: `url(${logo2})`,
              backgroundSize : "cover",
              backgroundPosition : "center"
            }}></div>
            </Link>

            {/* soloutions */}
            <div className='p-4 inline-flex items-center gap-0.5 shrink-0'>
              <p className="text-black font-bold font-[poppins]" style={{
                fontSize: "18px",
                fontStyle: "normal",
                lineHeight: "normal",
              }}>Solutions</p>
              <div className='flex w-[24px] h-[24px] justify-center items-center bg-center' style={{
              background: `url(${dropdownArrow})`
              }}></div>
            </div>

            {/* Features */}
            <div className='p-4 inline-flex items-center gap-0.5 shrink-0'>
              <p className="text-black text-lg font-bold font-['Poppins']">Features</p>
              <div className='flex w-[24px] h-[24px] justify-center items-center' style={{
              background: `url(${dropdownArrow})`
              }}></div>
            </div>

            {/* blogs */}
            <div className='p-4 inline-flex items-center gap-0.5 shrink-0'>
              <p className="text-black text-lg font-bold font-['Poppins']">Blogs</p>
              <div className='flex w-[24px] h-[24px] justify-center items-center' style={{
              background: `url(${dropdownArrow})`
              }}></div>
            </div>

            {/* about */}
            <div className='p-4 inline-flex items-center gap-0.5 shrink-0'>
              <p className="text-black text-lg font-bold font-['Poppins']">About</p>
              <div className='flex w-[24px] h-[24px] justify-center items-center' style={{
              background: `url(${dropdownArrow})`
              }}></div>
            </div>
          </div>

          {/* right top-bar */}
          <div className='flex justify-around items-center w-[20%]'>
            {/* signin */}
            <div className='flex justify-center gap-2 w-[100px] px-[20px] py-[10px]' style={{
              borderRadius : "10px",
              border : "1.5px solid #0076CE",
              }}>
              <p className='text-[#0076CE] text-center font-["Poppins"]' style={{
                fontSize : "16px",
                fontWeight : "700",
                lineHeight : "26px", 
              }}>Login</p>
            </div>

            {/* signup */}
            <div className='flex justify-center gap-2 w-[100px] px-[20px] py-[10px] bg-[#0076CE]' style={{
              borderRadius : "10px",
              border : "1.5px solid #0076CE",
              }}>
              <p className='text-white text-center font-["Poppins"]' style={{
                fontSize : "16px",
                fontWeight : "700",
                lineHeight : "26px", 
              }}>Register</p>
            </div>
          </div>
      </div>
    )
  }
