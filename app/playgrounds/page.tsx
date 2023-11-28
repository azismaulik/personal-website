"use client";

import React, { useState } from "react";
import tinycolor from "tinycolor2";
import { copyToClipboard } from "@/helper/ClipToClipboard";
import { HexColorPicker } from "react-colorful";
import Calculator from "@/components/calculator";
import { Reveal } from "@/components/Reveal";
import { Slider } from "@/components/ui/slider";

const Playground = () => {
  const [color, setColor] = useState("#0891B2");
  const [red, setRed] = useState(8);
  const [green, setGreen] = useState(145);
  const [blue, setBlue] = useState(178);
  const [alpha, setAlpha] = useState(0);
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState("");

  const type = alpha > 0 ? "rgba" : "rgb";
  const result =
    type +
    `(${red}, ${green}, ${blue}${alpha ? "," : ""}${alpha ? alpha : ""})`;

  let color2 = tinycolor(color);
  const convert = color2.toRgbString();

  let colorHex = tinycolor(hex);
  const convert2 = colorHex.toRgbString();

  var colorRgb = tinycolor(rgb);
  const convert3 = colorRgb.toHexString();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAlpha = parseFloat(e.target.value);
    setAlpha(newAlpha);
  };

  return (
    <div className="my-28 font-port">
      <Reveal>
        <h1 className="text-4xl font-bold">Playgrounds</h1>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 flex-wrap mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg p-4 border border-neutral-700">
          <Reveal width="100%">
            <HexColorPicker color={color} onChange={setColor} />
          </Reveal>

          {color && (
            <div className="flex-1">
              <Reveal width="100%">
                <div
                  className="py-2 px-4 rounded-md flex justify-between items-center w-full text-sm text-white"
                  style={{ backgroundColor: `${color}` }}
                >
                  <p>{color}</p>
                  <div
                    className="p-1 rounded bg-neutral-600 hover:bg-neutral-700 transition cursor-pointer"
                    onClick={() => copyToClipboard(color)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 24 24"
                      width="18"
                      className="text-white"
                    >
                      <g fill="none">
                        <path
                          d="M5.503 4.627L5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123zM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </Reveal>
              <Reveal width="100%">
                <div
                  className="py-2 px-4 rounded-md flex justify-between items-center mt-2 w-full text-sm text-white"
                  style={{ backgroundColor: `${convert}` }}
                >
                  <p>{convert}</p>
                  <div
                    className="p-1 rounded bg-neutral-600 hover:bg-neutral-700 transition cursor-pointer"
                    onClick={() => copyToClipboard(convert)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 24 24"
                      width="18"
                      className="text-white"
                    >
                      <g fill="none">
                        <path
                          d="M5.503 4.627L5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123zM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </Reveal>
            </div>
          )}
        </div>

        <div className="w-full grid grid-cols-2 gap-4 rounded-lg p-4 border border-neutral-700">
          <Reveal width="100%">
            <div
              className="flex-1 h-[200px] rounded-lg flex justify-center items-center text-white relative shadow shadow-ungu"
              style={{ backgroundColor: result }}
            >
              {result}
              <div
                className="p-1 rounded bg-neutral-600 hover:bg-neutral-700 transition cursor-pointer absolute top-2 right-2"
                onClick={() => copyToClipboard(result)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24"
                  width="18"
                  className="text-white"
                >
                  <g fill="none">
                    <path
                      d="M5.503 4.627L5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123zM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3 text-sm flex-1">
            <div>
              <Reveal>
                <h1>Red</h1>
              </Reveal>
              <Reveal width="100%">
                <Slider
                  defaultValue={[red]}
                  onValueChange={(value) => setRed(value[0])}
                  max={225}
                  step={1}
                  color="bg-red-500"
                />
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h1>Green</h1>
              </Reveal>
              <Reveal width="100%">
                <Slider
                  defaultValue={[green]}
                  onValueChange={(value) => setGreen(value[0])}
                  max={225}
                  step={1}
                  color="bg-green-500"
                />
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h1>Blue</h1>
              </Reveal>
              <Reveal width="100%">
                <Slider
                  defaultValue={[blue]}
                  onValueChange={(value) => setBlue(value[0])}
                  max={225}
                  step={1}
                  color="bg-blue-500"
                />
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h1>Alpha</h1>
              </Reveal>
              <Reveal width="100%">
                <Slider
                  defaultValue={[alpha]}
                  onValueChange={(value) => setAlpha(value[0])}
                  max={1}
                  step={0.1}
                  color="bg-white/20"
                />
              </Reveal>
            </div>
          </div>
        </div>
        <div className="w-full h-max rounded-lg p-4 border border-neutral-700">
          <Reveal width="100%">
            <h1 className="text-white font-semibold">Hex To RGB</h1>
          </Reveal>

          <Reveal width="100%">
            <div className="grid grid-cols-5 mt-2 place-items-center">
              <input
                type="text"
                value={hex}
                placeholder="#FFFFFF"
                className="col-span-2 py-2 px-4 rounded text-white w-full sm:w-auto bg-neutral-700 focus:outline-none"
                onChange={(e) => setHex(e.target.value)}
              />
              <p className="col-span-1">{"👉"}</p>

              {hex && (
                <div
                  className={`w-full col-span-2 rounded text-sm p-2 gap-2 text-white flex justify-between items-center`}
                  style={{ backgroundColor: `${convert2}` }}
                >
                  <div>{convert2}</div>
                  <div
                    className="p-1 rounded bg-neutral-600 hover:bg-neutral-700 transition cursor-pointer"
                    onClick={() => copyToClipboard(convert2)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 24 24"
                      width="18"
                      className="text-white"
                    >
                      <g fill="none">
                        <path
                          d="M5.503 4.627L5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123zM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal width="100%">
            <h1 className="text-white font-semibold mt-6">RGB To Hex</h1>
          </Reveal>
          <Reveal width="100%">
            <div className="grid grid-cols-5 mt-2 place-items-center">
              <input
                type="text"
                value={rgb}
                placeholder="rgb(50, 10, 125)"
                className="col-span-2 py-2 px-4 rounded text-white w-full sm:w-auto bg-neutral-700 focus:outline-none"
                onChange={(e) => setRgb(e.target.value)}
              />
              <p className="col-span-1">{"👉"}</p>
              {rgb && (
                <div
                  className={`w-full col-span-2 rounded text-sm p-2 gap-2 text-white flex justify-between items-center`}
                  style={{ backgroundColor: `${convert3}` }}
                >
                  <div>{convert3}</div>
                  <div
                    className="p-1 rounded bg-neutral-600 hover:bg-neutral-700 transition cursor-pointer"
                    onClick={() => copyToClipboard(convert3)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 24 24"
                      width="18"
                      className="text-white"
                    >
                      <g fill="none">
                        <path
                          d="M5.503 4.627L5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123zM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        <Calculator />
      </div>
    </div>
  );
};

export default Playground;
