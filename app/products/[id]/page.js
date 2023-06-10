"use client";
import Image from "next/image";
import React from "react";
import useSWR from "swr";

const url = "https://fakestoreapi.com/products";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Pro = ({ params }) => {
  const { id } = params;
  const { data, error } = useSWR(`${url}/${id}`, fetcher);
  console.log(data);

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{data.title}</h1>
      <Image src={`${data.image}`} alt="efff" height={200} width={200} />
      <h3>Price: ${data.price}</h3>
      <h2>{data.description}</h2>
      <p>rating:{data.rating.rate}</p>
      <p>total sales : {data.rating.count}</p>
    </div>
  );
};

export default Pro;
