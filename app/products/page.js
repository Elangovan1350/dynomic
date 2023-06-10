"use client"
import Image from 'next/image'
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
                        <>
                        <Link href={`/products/${data.id}`}>{data.title}</Link>
                        <Link href={`/products/${data.id}`}>
                        <Image src={`${data.image}`} alt='efff' height={200} width={200} />
                        <p>Price:{data.price}</p>
                        </Link>
                        </>

                    </div>
                ))}
            </div>
        </main>
    )
}
export default App