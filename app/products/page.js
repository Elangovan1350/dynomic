"use client"
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

const url = 'https://fakestoreapi.com/products'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function App() {
    const { data, error } = useSWR(url, fetcher)
    console.log(data);

    if (error) return <h1>Something went wrong!</h1>
    if (!data) return <h1>Loading...</h1>

    return (
        <main className='App'>
            <h1>Pokedex</h1>
            <div>
                {data.map((data) => (
                    <div key={data.id}>
                        <Link href={`/products/${data.id}`}>{data.title}</Link>
                    </div>
                ))}
            </div>
        </main>
    )
}
export default App