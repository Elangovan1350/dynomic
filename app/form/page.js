"use client";

import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    title: "",
    price: 0,
    image: "",
    description: "",
    category: "",
    // rating: {
    //   count: 0,
    //   rate: 0,
    // },
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const sendData = (e) => {
    e.preventDefault();

    axios
      .post("https://newapi-d478.onrender.com", data)
      .then((res) => console.log("data saved"));
    console.log(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-5/6 h-fit bg-slate-600 p-40">
        <form action="" className="flex flex-col gap-5">
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleInput}
          />
          <input
            type="number"
            name="price"
            placeholder="price"
            onChange={handleInput}
          />
          <input
            type="text"
            name="image"
            placeholder="image"
            onChange={handleInput}
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            onChange={handleInput}
          />
          <input
            type="text"
            name="category"
            placeholder="category"
            onChange={handleInput}
          />
          {/* <input
            type="number"
            name="count"
            placeholder="count"
            onChange={handleInput}
          />
          <input
            type="number"
            name="rate"
            placeholder="rate"
            onChange={handleInput}
          /> */}
          <button
            onClick={sendData}
            className="text-2xl font-bold bg-blue-400 px-10 py-3 mb-10 rounded-lg"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
