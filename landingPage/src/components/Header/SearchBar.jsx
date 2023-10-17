import React from 'react'
import SearchBarResult from './SearchBarResult';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';

export default function SearchBar() {
    const {data, error} = useFetch('http://localhost:8000/CA')
    const [ca, setCa] = useState()  
   
    const input = (value) => {
        console.log(value);
        console.log(value.length);
        if(value.length !== 0){
            const filteredCa = data && data.filter(ca => ca.name.toLowerCase().includes(value.toLowerCase()))
            setCa(filteredCa)
        }else{
            setCa(null)
        }
    }

    return (
        <div className='mt-8'>
            <div className='flex justify-between items-center w-[600px] h-[73px] shrink-0 rounded-[10px]' style={{
                border : "1px solid #BFBFBF",
                background : "#FFF"
            }}>  
                <input onChange={(e) => input(e.target.value)} type="text" placeholder='Search by name' className='ml-5 pl-2 w-[364px] h-[25.585px] outline-none shrink-0 text-[#AEB0B4] font-[Inter] text-lg font-bold'/>
                <button className='w-[186px] h-[73px] shrink-0 rounded-xl bg-[#0076CE] text-[#FFF] text-center font-[Inter] text-lg font-bold'>Search</button>
            </div>
            {error && <h3 className='text-red-600 w-[800px] text-2xl font-bold mt-10'>The API is not responding, Visit After Some Time...!</h3>}
            {ca && <SearchBarResult ca={ca}/>}
        </div>
    )
  }
