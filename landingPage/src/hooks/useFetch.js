import React from 'react'
import { useState, useEffect } from 'react'


export default function useFetch(url) {
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if(!res.ok) throw new Error("API error, Check it again...!")
            return res.json()
        })
        .then(res => {
            setData(res)
            setError(null)
        })
        .catch(err => {
            console.log(err.message);
            setError(err.message)
            setData(null)
        })
    }, [url])
    return {data, error}
  }
