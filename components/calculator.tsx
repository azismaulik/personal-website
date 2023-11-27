"use client";

import { Reveal } from "@/components/Reveal";
import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value: any) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="w-full mx-auto md:mx-0 max-w-xs">
      <Reveal width="100%">
        <div className="bg-neutral-800 p-4 rounded-lg shadow-md">
          <input
            className="mb-4 p-2 w-full rounded bg-neutral-600 text-white focus:outline-1 focus:outline-none cursor-not-allowed"
            type="text"
            value={input}
            readOnly
          />

          <div className="grid grid-cols-4 gap-2">
            <button
              className="bg-[#0891B2] text-white p-2 rounded"
              onClick={() => handleClick("1")}
            >
              1
            </button>

            <button
              className="bg-[#0891B2] text-white p-2 rounded"
              onClick={() => handleClick("2")}
            >
              2
            </button>

            <button
              className="bg-[#0891B2] text-white p-2 rounded"
              onClick={() => handleClick("3")}
            >
              3
            </button>

            <button
              className="bg-[#0e5e7d] text-white p-2 rounded"
              onClick={() => handleClick("+")}
            >
              +
            </button>

            <button
              className="bg-[#0891B2] text-white p-2 rounded"
              onClick={() => handleClick("4")}
            >
              4
            </button>

            <button
              className="bg-[#0891B2] text-white p-2 rounded"
              onClick={() => handleClick("5")}
            >
              5
            </button>

            <button
              className="bg-[#0891B2] text-white p-2 rounded"
              onClick={() => handleClick("6")}
            >
              6
            </button>

            <button
              className="bg-[#0e5e7d] text-white p-2 rounded"
              onClick={() => handleClick("-")}
            >
              -
            </button>

            <button
              className="bg-[#0891B2] text-white p-2 rounded"
              onClick={() => handleClick("7")}
            >
              7
            </button>

            <button
              className="bg-[#0891B2] text-white p-2 rounded"
              onClick={() => handleClick("8")}
            >
              8
            </button>

            <button
              className="bg-[#0891B2] text-white p-2 rounded"
              onClick={() => handleClick("9")}
            >
              9
            </button>

            <button
              className="bg-[#0e5e7d] text-white p-2 rounded"
              onClick={() => handleClick("*")}
            >
              *
            </button>

            <button
              className="bg-[#0891B2] text-white p-2 rounded"
              onClick={() => handleClick("0")}
            >
              0
            </button>

            <button
              className="bg-[#0e5e7d] text-white p-2 rounded"
              onClick={() => handleClick(".")}
            >
              .
            </button>

            <button
              className="bg-[#0e5e7d] text-white p-2 rounded"
              onClick={calculate}
            >
              =
            </button>

            <button
              className="bg-[#0e5e7d] text-white p-2 rounded"
              onClick={() => handleClick("/")}
            >
              /
            </button>

            <button
              className="col-span-2 bg-red-500 text-white p-2 rounded"
              onClick={clearInput}
            >
              Clear
            </button>

            <button
              className="col-span-2 bg-blue-500 text-white p-2 rounded"
              onClick={() => setInput(input.slice(0, -1))}
            >
              Backspace
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Calculator;
