# MakeArrow

A simple JavaScript function to draw arrows on an HTML5 canvas.  
It allows you to customize the length and angle of the arrowheads for precise vector visualization.

---

## Features

- Draws a vector line with arrowheads on both ends.
- Customizable arrowhead length.
- Customizable arrowhead angle.
- Easy to integrate in any canvas-based project.

---

## Usage

Include your canvas context and call the function with the following parameters:

```js
MakeArrow(ctx, xi, yi, xf, yf, length, angle);
```
### Parameters

- `ctx` — The **CanvasRenderingContext2D** object, representing the drawing context of the HTML5 canvas.
- `xi`, `yi` — The starting coordinates (x, y) of the arrow's main line.
- `xf`, `yf` — The ending coordinates (x, y) of the arrow's main line.
- `length` — (Optional) The length of each arrowhead segment in pixels. Default value is `20`.
- `angle` — (Optional) The angle in degrees between each arrowhead segment and the main line. Default value is `30`.

For example:  
`MakeArrow(ctx, 50, 50, 200, 100, 25, 35);`  
draws an arrow from point (50,50) to (200,100) with arrowheads 25px long and 35° angle.
