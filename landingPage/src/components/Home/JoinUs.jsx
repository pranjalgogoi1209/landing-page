import React from 'react'



export default function JoinUs() {
    return (
      <div className='flex flex-col items-center justify-around h-[760px]'>
        <div>
            <h1 className='font-[poppins] font-bold' style={{
                fontSize : "66px",
                lineHeight : "75px",
                fontStyle : "normal",
            }}>Want to <span style={{
                background: "linear-gradient(91deg, #0076CE 26.63%, #9400D3 65.81%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}>Join</span> Us?</h1>
        </div>

        <div className='mb-10'>
            <p className='text-[24px] font-normal'>To remain with us, it is essential that you diligently follow the steps provided</p>
        </div>

        <div>
            <div className='flex justify-around h-[290px]'>
                {/* cart1 */}
                <div className='w-[385px] shrink-0'>
                    <div className='text-white border w-[40px] h-[40px] bg-red-500 flex justify-center items-center rounded-[8px]' style={{
                        position : "absolute",
                        zIndex : "2",
                        background: "var(--gradient-border-outline, linear-gradient(96deg, #0076CE 0%, #9400D3 100%))"
                    }}>
                        <p className='font-bold'>1<sup>st</sup></p>
                    </div>

                    <div className='w-[355px] h-[250px] bg-white rounded-2xl flex flex-col items-center justify-evenly' style={{
                        position : "absolute",
                        zIndex : "1",
                        marginTop : "18px",
                        marginLeft : "18px",
                        boxShadow : '1px 0px 9px rgba(0,0,0,0.3)'
                    }}>
                        <h4 className='font-bold text-[20px]'>Commencement of business</h4>
                        <p className='w-[300px] text-center'>Invested shareholders must confirm payment and office address </p>
                        <div className='flex justify-between border w-[300px] bg-[#F4F4F4] rounded-[10px] px-3 py-2' style={{

                        }}>
                            <div>
                                <h5 className='font-medium text-[#0076CE]'>Due date</h5>
                                <p>Within <br />180 days </p>
                            </div>
                            <div>
                                <h5 className='font-medium text-[#F66]'>Penalty fees</h5>
                                <p><span className='font-medium'>₹50,000</span> for the company</p>
                                <p><span className='font-medium'>₹1,000</span> /day for directors</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* cart 2 */}
                <div className='w-[385px] h-[266px] shrink-0'>
                    <div className='text-white border w-[40px] h-[40px] bg-red-500 flex justify-center items-center rounded-[8px]' style={{
                        position : "absolute",
                        zIndex : "2",
                        background: "var(--gradient-border-outline, linear-gradient(96deg, #0076CE 0%, #9400D3 100%))"
                    }}>
                        <p className='font-bold'>2<sup>nd</sup></p>
                    </div>

                    <div className='w-[355px] h-[250px] bg-white rounded-2xl flex flex-col items-center justify-evenly' style={{
                        position : "absolute",
                        zIndex : "1",
                        marginTop : "18px",
                        marginLeft : "18px",
                        boxShadow : '1px 0px 9px rgba(0,0,0,0.3)'
                    }}>
                        <h4 className='font-bold text-[20px]'>Auditor Appointment</h4>
                        <p className='w-[300px] text-center'>Company informs new auditor and submits ADT.1 form to ROC.</p>
                        <div className='flex justify-between border w-[300px] bg-[#F4F4F4] rounded-[10px] px-3 py-2' style={{

                        }}>
                            <div>
                                <h5 className='font-medium text-[#0076CE]'>Due date</h5>
                                <p>Within <br />30 days </p>
                            </div>
                            <div>
                                <h5 className='font-medium text-[#F66]'>Penalty fees</h5>
                                <p><span className='font-medium'>₹3000</span> per month.</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* cart 3 */}
                <div className='w-[385px] h-[266px] shrink-0'>
                    <div className='text-white border w-[40px] h-[40px] bg-red-500 flex justify-center items-center rounded-[8px]' style={{
                        position : "absolute",
                        zIndex : "2",
                        background: "var(--gradient-border-outline, linear-gradient(96deg, #0076CE 0%, #9400D3 100%))"
                    }}>
                        <p className='font-bold'>3<sup>rd</sup></p>
                    </div>

                    <div className='w-[355px] h-[250px] bg-white rounded-2xl flex flex-col items-center justify-evenly' style={{
                        position : "absolute",
                        zIndex : "1",
                        marginTop : "18px",
                        marginLeft : "18px",
                        boxShadow : '1px 0px 9px rgba(0,0,0,0.3)'
                    }}>
                        <h4 className='font-bold text-[20px]'>DIN eKYC</h4>
                        <p className='w-[300px] text-center'>Directors share personal information for identification & verification</p>
                        <div className='flex justify-between border w-[300px] bg-[#F4F4F4] rounded-[10px] px-3 py-2' style={{

                        }}>
                            <div>
                                <h5 className='font-medium text-[#0076CE]'>Due date</h5>
                                <p>Every Year</p>
                            </div>
                            <div>
                                <h5 className='font-medium text-[#F66]'>Penalty fees</h5>
                                <p><span className='font-medium'>₹5000</span> one time</p>
                            </div>
                        </div>
                    </div>
                </div>             
            </div>



            <div className='flex justify-around'>
                {/* cart4 */}
                <div className='w-[385px] shrink-0'>
                    <div className='text-white border w-[40px] h-[40px] bg-red-500 flex justify-center items-center rounded-[8px]' style={{
                        position : "absolute",
                        zIndex : "2",
                        background: "var(--gradient-border-outline, linear-gradient(96deg, #0076CE 0%, #9400D3 100%))"
                    }}>
                        <p className='font-bold'>4<sup>th</sup></p>
                    </div>

                    <div className='w-[355px] h-[250px] bg-white rounded-2xl flex flex-col items-center justify-evenly' style={{
                        position : "absolute",
                        zIndex : "1",
                        marginTop : "18px",
                        marginLeft : "18px",
                        boxShadow : '1px 0px 9px rgba(0,0,0,0.3)'
                    }}>
                        <h4 className='font-bold text-[20px]'>DPT-3</h4>
                        <p className='w-[300px] text-center'>Companies report money taken from people to ROC; auditors confirm details.</p>
                        <div className='flex justify-between border w-[300px] bg-[#F4F4F4] rounded-[10px] px-3 py-2' style={{

                        }}>
                            <div>
                                <h5 className='font-medium text-[#0076CE]'>Due date</h5>
                                <p>Within <br />30 days </p>
                            </div>
                            <div>
                                <h5 className='font-medium text-[#F66]'>Penalty fees</h5>
                                <p><span className='font-medium'>₹300</span> per month.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* cart 5 */}
                <div className='w-[385px] h-[266px] shrink-0'>
                    <div className='text-white border w-[40px] h-[40px] bg-red-500 flex justify-center items-center rounded-[8px]' style={{
                        position : "absolute",
                        zIndex : "2",
                        background: "var(--gradient-border-outline, linear-gradient(96deg, #0076CE 0%, #9400D3 100%))"
                    }}>
                        <p className='font-bold'>5<sup>th</sup></p>
                    </div>

                    <div className='w-[355px] h-[250px] bg-white rounded-2xl flex flex-col items-center justify-evenly' style={{
                        position : "absolute",
                        zIndex : "1",
                        marginTop : "18px",
                        marginLeft : "18px",
                        boxShadow : '1px 0px 9px rgba(0,0,0,0.3)'
                    }}>
                        <h4 className='font-bold text-[20px]'>MCA Form AOC-4</h4>
                        <p className='w-[300px] text-center'>It s like an official report card for a company s documents</p>
                        <div className='flex justify-between border w-[300px] bg-[#F4F4F4] rounded-[10px] px-3 py-2' style={{

                        }}>
                            <div>
                                <h5 className='font-medium text-[#0076CE]'>Due date</h5>
                                <p>On or Before <br/> 30th <br/> November</p>
                            </div>
                            <div>
                                <h5 className='font-medium text-[#F66]'>Penalty fees</h5>
                                <p><span className='font-medium'>₹200</span> per day</p>
                                <p>(No upper limit)*</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* cart 6 */}
                <div className='w-[385px] h-[266px] shrink-0'>
                    <div className='text-white border w-[40px] h-[40px] bg-red-500 flex justify-center items-center rounded-[8px]' style={{
                        position : "absolute",
                        zIndex : "2",
                        background: "var(--gradient-border-outline, linear-gradient(96deg, #0076CE 0%, #9400D3 100%))"
                    }}>
                        <p className='font-bold'>6<sup>th</sup></p>
                    </div>

                    <div className='w-[355px] h-[250px] bg-white rounded-2xl flex flex-col items-center justify-evenly' style={{
                        position : "absolute",
                        zIndex : "1",
                        marginTop : "18px",
                        marginLeft : "18px",
                        boxShadow : '1px 0px 9px rgba(0,0,0,0.3)'
                    }}>
                        <h4 className='font-bold text-[20px]'>MCA Form MGT-7</h4>
                        <p className='w-[300px] text-center'>Companies must annually report activities and finances to the registrar.</p>
                        <div className='flex justify-between border w-[300px] bg-[#F4F4F4] rounded-[10px] px-3 py-2' style={{

                        }}>
                            <div>
                                <h5 className='font-medium text-[#0076CE]'>Due date</h5>
                                <p>On or Before <br />31st December </p>
                            </div>
                            <div>
                                <h5 className='font-medium text-[#F66]'>Penalty fees</h5>
                                <p><span className='font-medium'>₹200</span> per day</p>
                                <p>(No upper limit)*</p>
                            </div>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
        <div className='mx-12 my-10 text-left mb-52 font-normal'>
            <p>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className='font-medium'>every day</span> until you file the form . There is no maximum penalty amount. So, if you dont file the form for a year, you will owe ₹73,000 per form</p>
        </div>
      </div>
    )
  }
