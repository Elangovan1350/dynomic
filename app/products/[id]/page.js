"use client";
import Image from "next/image";
import React from "react";
import useSWR from "swr";
import { BounceLoader } from "react-spinners";

const url = "https://fakestoreapi.com/products";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Pro = ({ params }) => {
  const { id } = params;
  const { data, error } = useSWR(`${url}/${id}`, fetcher);
  console.log(data);

  if (error) return <h1>Something went wrong!</h1>;
  if (!data)
    return (
      <h1 className="h-screen w-screen flex items-center justify-center">
        <BounceLoader size={100} />
      </h1>
    );

  return (
    <div className="flex justify-center items-center flex-col h-screen max-w-3xl m-auto">
      <h1 className="text-3xl font-bold text-center">{data.title}</h1>
      <Image src={`${data.image}`} alt="efff" height={200} width={200} />
      <h3 className="text-xl font-semibold">Price: ${data.price}</h3>
      <h2 className="text-lg font-medium">{data.description}</h2>
      <p className="text-base font-medium">rating:{data.rating.rate}</p>
      <p className="text-base font-medium">total sales : {data.rating.count}</p>
    </div>
  );
};

export default Pro;
