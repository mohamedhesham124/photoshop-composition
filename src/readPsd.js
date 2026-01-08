import fs from "fs";
import { readPsd } from "ag-psd";

const buffer = fs.readFileSync("examples/example.psd");
const psd = readPsd(buffer);

console.log("psd width:", psd.width);
console.log("psd height:", psd.height);

if (psd.children) {
  psd.children.forEach((layer, i) => {
    console.log(`layer ${i}:`, layer.name);
  });
}