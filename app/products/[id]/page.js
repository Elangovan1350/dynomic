"use client"
import React from 'react'
import useSWR from 'swr'

const url = 'https://fakestoreapi.com/products'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const Pro = ({params}) => {
    const {id}=params
    const { data, error } = useSWR(`${url}/${id}`, fetcher)
    console.log(data);

    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>

  return (
    <div>
        <h1>{data.title}</h1>
    </div>
  )
}

export default Pro