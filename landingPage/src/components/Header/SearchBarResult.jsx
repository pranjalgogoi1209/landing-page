import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchBarResult({ca}) {
    console.log(ca.length);
    return (
      <div>
        {ca.length === 0 && <h3 className='shadow-xl  bg-white rounded-[10px] pl-2 w-[600px] h-[25.585px] outline-none shrink-0 text-[#454648] font-[Inter] text-lg font-bold'>No Matches Found...</h3>}
        {ca.map(person => (
            <section key={person.id}>
              <Link to={`/details/${person.id}`}>
                {<h3 className='shadow-xl  bg-white hover:bg-[#C5EAED]  hover:text-xl hover:text-[#0076CE] cursor-pointer rounded-[10px] pl-2 w-[600px] h-[25.585px] outline-none shrink-0 text-[#454648] font-[Inter] text-lg font-bold'>{person.name}</h3>}
              </Link>
            </section>
        ))}
      </div>
    )
  }
