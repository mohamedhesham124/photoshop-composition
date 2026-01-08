import fs from "fs";
import { writePsd } from "ag-psd";
import { createCanvas } from "canvas";

const canvas = createCanvas(200, 200);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(0, 0, 200, 200);

const psd = {
  width: 200,
  height: 200,
  children: [
    {
      name: "red layer",
      canvas
    }
  ]
};

const buffer = writePsd(psd);
fs.writeFileSync("output.psd", buffer);

console.log("output.psd created");