"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const url = "https://fakestoreapi.com/products";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const { data, error } = useSWR(url, fetcher);
  console.log(data);

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <main className="App">
      <h1>Pokedex</h1>
      <div className="grid grid-cols-3 gap-5">
        {data.map((data) => (
          <div key={data.id}>
            <div className="flex justify-center items-center flex-col">
              <Link href={`/products/${data.id}`} className="text-xl font-bold">{data.title}</Link>
              <Link href={`/products/${data.id}`}>
                <div className="h-60  flex items-center justify-center overflow-hidden">
                  <Image
                    src={`${data.image}`}
                    alt="efff"
                    height={200}
                    width={200}
                  />
                </div>
                <p className="text-lg font-semibold">Price:{data.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
export default App;
