# ag-psd

**ag-psd** is a JavaScript library for **reading and writing Photoshop PSD files**.  
It works in **Node.js, browsers, and Web Workers** and follows Adobe’s PSD file specification.

---

## features
- read PSD structure (layers, text, images)
- write basic PSD files
- supports RGB, 8-bit per channel
- works with canvas / offscreen canvas
- usable in Node.js and browser environments

---

## limitations
- RGB color mode only
- no CMYK, LAB, Indexed, Duotone, or Multichannel
- no 16-bit per channel
- no PSB (large document format)
- no animations, patterns, or 3D effects
- text layer support is incomplete
- does not auto-rebuild composite or layer images after edits

---

## installation
```bash
npm install ag-psd
