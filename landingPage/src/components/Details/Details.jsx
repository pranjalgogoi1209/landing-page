import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import TopBar from '../Header/TopBar'
import star from '../../assets/details/star.svg'
import calender from '../../assets/details/calender.svg'
import group from '../../assets/details/group.svg'
import rectangle from '../../assets/details/rectangle.png'

export default function Details() {
    const {id} = useParams()
    const {data} = useFetch('http://localhost:8000/CA')
    let ca = data && data.filter(person => person.id === Number(id))
    ca = ca && ca[0]
    return (
      <div>
        <TopBar/>
        {/* Details */}
        <div className='flex ml-[85px] mr-[97px]'>
            {/* ca details */}
            <div className='flex font-[poppins] mt-16 mb-24'>
                {/* left one */}
                <div className='flex flex-col justify-between h-[800px] mt-2'>
                    <div>
                        {ca && <h1 className='text-[35px] font-bold'>{ca.name}</h1>}
                        {ca && <p className='text-[17px] w-[410px] font-normal leading-8'>I am here to provide my {ca.intro}</p>}
                    </div>

                    <div className='flex'>
                        <img src={star} alt="star" className='h-[24px] w-[24px] shrink-0'/>
                        {ca && <p className='text-20 font-bold ml-2'>{ca.rating}<span className='font-Poppins text-20 font-normal'> ({ca.reviewCount})</span></p>}
                    </div>

                    <div className='flex flex-col justify-around w-[400px] h-[180px] flex-shrink-0 rounded-2xl p-5' style={{
                        boxShadow : "1px 0px 9px rgba(0,0,0,0.3)"
                    }}>
                        <div className='flex'> 
                            {ca && <p className='w-[300px] text-lg font-normal custom-line-height'>{ca.taskComplexity}</p>}
                            {ca && <p className='w-[187px] text-right font-Poppins text-xl font-bold'>{ca.price}</p>}
                        </div>
                        <div className='flex'>
                            <img src={calender} alt="star" className='h-[24px] w-[24px] shrink-0'/>
                            {ca && <p className='w-[422px] text-lg ml-2 font-normal leading-32]'>{ca.deliveryTime}</p>}
                        </div>
                        <div className='flex justify-between'>
                            <button className='w-[160px] h-[37px] text-white font-semibold items-center gap-2 rounded-lg bg-[#0076CE]'>Request Proposal</button>
                            <button className='w-[160px] h-[37px] border-2 text-base text-[#0076CE] border-[#0076CE] font-semibold items-center gap-2 rounded-lg bg-[#fff]'>Chat with me</button>
                        </div>
                    </div>

                    <div className='flex flex-col justify-around w-[400px] h-[360px] flex-shrink-0 rounded-2xl p-5' style={{
                        boxShadow : '1px 0px 9px rgba(0,0,0,0.3)',
                    }}>
                        <h1 className='text-[35px] font-bold'>What people say?</h1>
                        {ca && <p className='text-[17px] font-normal leading-8'>{ca.testimonial.text}</p>}
                        <div className='flex justify-center'>
                            <img src={group} alt="group" className='w-[65px]'/>
                        </div>
                    </div>
                </div>

                {/* right one */}
                <div className='ml-[80px]'>
                  {ca &&
                    <div className='h-[320px] w-[540px] rounded-3xl' style={{
                      backgroundImage : `url(${ca.image})`,
                      backgroundSize : "cover",
                      backgroundPosition : "center",
                  }}>
                    <div className='flex justify-center'>
                        <img src={group} alt="group" className='mt-[300px] w-[65px]'/>
                    </div>
                  </div>
                  }

                  <div className='flex flex-col justify-evenly  h-[350px]'>
                    {ca && <h1 className='text-[35px] font-bold'>About {ca.name}</h1>}
                    <div className='flex justify-between'>
                      <div>
                        <h3 className='text-[16px] font-bold text-[#999]'>FROM</h3>
                        {ca && <p className='text-[16px] font-bold'>{ca.about.from}</p>}
                      </div>
                      <div>
                        <h3 className='text-[16px] font-bold text-[#999]'>PARTNER SINCE</h3>
                        {ca && <p className='text-[16px] font-bold'>{ca.about.partnerSince}</p>}
                      </div>
                      <div>
                        <h3 className='text-[16px] font-bold text-[#999]'>AVERAGE RESPONSE TIME</h3>
                        {ca && <p className='text-[16px] font-bold'>{ca.about.averageResponseTime}</p>}
                      </div>
                    </div>

                    <div>
                      <h3 className='text-[16px] font-bold text-[#999]'>ABOUT</h3>
                      {ca && <p className='text-[17px] font-normal leading-8'>I am a {ca.about.description}</p>}
                    </div>
                  </div>

                  <div className='flex justify-between'>
                      <div>
                        <h3 className='text-[16px] font-bold text-[#999]'>SERVICES I OFFER</h3>
                        <div>
                          { ca &&
                            ca.about.services.map(service => (
                              <ul key={service}>
                                <li>{service}</li>
                              </ul>
                            ))
                          }
                        </div>
                      </div>
                      <div>
                        <h3 className='text-[16px] font-bold text-[#999]'>WHY ME?</h3>
                        <div>
                         { ca &&
                            ca.about.benefits.map(benefit => (
                            <ul key={benefit}>
                              <li>{benefit}</li>
                            </ul>
                         ))
                         }
                       </div>
                      </div>
                  </div>
                </div>
            </div>



            
            {/* Recommended for you */}
            {/* <div className='mb-52'>
                

            </div> */}
        </div>
        
      </div>
    )
  }
