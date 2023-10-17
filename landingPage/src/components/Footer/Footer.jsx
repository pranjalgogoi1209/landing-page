import React from 'react'
import logo2 from '../../assets/footer/logo2.png'
import facebook from '../../assets/footer/facebook.svg'
import instagram from '../../assets/footer/instagram.svg'
import linkedin from '../../assets/footer/linkedin.svg'
import whatsapp from '../../assets/footer/whatsapp.svg'

export default function Footer() {


    return (
      <div>
        <div className='h-[311px]' style={{
                background: "var(--gradient-footer, linear-gradient(96deg, #0076CE -7.82%, #9400D3 143.96%))",
            }}>
            <div className='flex justify-evenly text-white h-[240px] pt-8'>
                <div>
                    <img src={logo2} alt="logo" className='h-[70px] w-[155px]'/>
                    <div>
                        <p className='mx-3 w-[272px] h-[44px] top-[92px] left-[128px] font-normal text-sm font-[opensans]'>India's first platform dedicated to simplifying partner search</p>
                    </div>
                </div>

                <div className='h-[150px] flex flex-col justify-evenly mt-2'>
                    <h3 className='font-bold'>COMPANY</h3>
                    <a href="#" className='block text-sm'>About</a>
                    <a href="#" className='block text-sm'>Pricing</a>
                    <a href="#" className='block text-sm'>Careers</a>
                </div>

                <div className='h-[180px] flex flex-col justify-evenly mt-2'>
                    <h3 className='font-semibold'>SOLUTIONS</h3>
                    <a href="#" className='block text-sm'>Search</a>
                    <a href="#" className='block text-sm'>Connect</a>
                    <a href="#" className='block text-sm'>Research</a>
                    <a href="#" className='block text-sm'>Academy</a>
                </div>

                <div className='h-[110px] flex flex-col justify-evenly mt-2'>
                    <h3 className='font-semibold'>RESOURCES</h3>
                    <a href="#" className='block text-sm'>Blogs</a>
                    <a href="#" className='block text-sm'>Forms</a>
                </div>

                <div className='h-[110px] flex flex-col justify-evenly mt-2'>
                    <h3 className='font-semibold'>SUPPORT</h3>
                    <a href="#" className='block text-sm'>Help</a>
                    <a href="#" className='block text-sm'>Contact Us</a>
                </div>

                <div className='h-[140px] flex flex-col justify-evenly mt-2'>
                    <h3 className='font-semibold'>LEGAL</h3>
                    <a href="#" className='block text-sm'>Privacy</a>
                    <a href="#" className='block text-sm'>Terms</a>
                    <a href="#" className='block text-sm'>Accessibility</a>
                </div>
            </div>


            <div className='flex justify-between border-t-2 border-white mx-20 pt-5'>
                <div>
                    <p className='text-white text-sm'>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
                </div>
                <div className='flex justify-around w-[200px]'>
                    <a href="">
                        <div className="shrink-0 bg-no-repeat h-[24px] w-[24px] bg-center" style={{
                            background: `url(${facebook})`,
                            backgroundSize : "cover",
                        }}></div>
                    </a>
                    <a href="">
                        <div className="shrink-0 bg-no-repeat h-[24px] w-[24px] bg-center" style={{
                            background: `url(${instagram})`,
                            backgroundSize : "cover",
                        }}></div>
                    </a>
                    <a href="">
                        <div className="shrink-0 bg-no-repeat h-[24px] w-[24px] bg-center" style={{
                            background: `url(${linkedin})`,
                            backgroundSize : "cover",
                        }}></div>
                    </a>
                    <a href="">
                        <div className="shrink-0 h-[24px] w-[24px] bg-center" style={{
                            background: `url(${whatsapp})`,
                            backgroundSize : "cover",
                            backgroundRepeat : "no-repeat"
                        }}></div>
                    </a>
                </div>
            </div>
        </div>
        <div className='bg-black flex justify-center items-center h-[57px]'>
            <p className='text-xs text-white'>Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</p>
        </div>
      </div>
    )
  }
