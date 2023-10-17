import React from 'react'
import SearchBar from './SearchBar'
import girl1 from '../../assets/header/hero/Picture2.png'
import girl2 from '../../assets/header/hero/Picture3.png'
import girl3 from '../../assets/header/hero/Picture4.png'

export default function Hero() {
    return (
      <div className='h-[793px]'>
        <div className='mt-[80px] flex justify-evenly  border-emerald-950 h-[610px]'>
            {/* hero-left */}
            <div className='mt-12 ml-14 h-[560px] w-[50%] flex flex-col justify-left'>
                <div>
                    <h1 className='font-[poppins] font-bold' style={{
                        fontSize : "66px",
                        lineHeight : "75px",
                        fontStyle : "normal",
                    }}>Find  <span style={{
                        background: "linear-gradient(91deg, #0076CE 26.63%, #9400D3 65.81%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>Partners</span> (CAs) available online</h1>
                </div>

                <div className='mt-2'>
                    <p className='text-[#616161] font-[opensans] font-normal' style={{
                        fontFeatureSettings : "'clig off, 'liga' off",
                        fontSize : "18px",
                        fontStyle : "normal",
                        lineHeight : "30px",
                    }}><span className='font-bold'>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>
                </div>
                <SearchBar/>
            </div>

            {/* hero-right */}
            <div className='w-[37%]  h-[487px] flex justify-around'>
                <div className="mt-20 shrink-0 bg-no-repeat w-[138.718px] h-[323.034px] rounded-[20.991px] gap-[10.496px] bg-center" style={{
                    background: `lightgray url(${girl1})`,
                    backgroundSize: "cover",
                }}></div>
                    
                <div className="shrink-0 bg-no-repeat w-[138.718px] h-[323.034px] rounded-[20.991px] gap-[10.496px] bg-center" style={{
                    background: `lightgray url(${girl2})`,
                    backgroundSize: "cover",
                }}></div>
                
                <div className="mt-10 shrink-0 bg-no-repeat w-[138.718px] h-[323.034px] rounded-[20.991px] gap-[10.496px] bg-center" style={{
                    background: `lightgray url(${girl3})`,
                    backgroundSize: "cover",
                }}></div>
            </div>
        </div>
      </div>
    )
  }