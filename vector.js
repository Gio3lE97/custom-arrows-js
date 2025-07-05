function MakeArrow(ctx, xi, yi, xf, yf, length = 15, angle = 30) {
  // Convert angle from degrees to radians
  let phi = angle * (Math.PI / 180);

  // Calculate angles for the arrowhead segments
  let phiAngle1 = Math.PI - phi;
  let phiAngle2 = phiAngle1 + 2 * phi;

  ctx.beginPath();

  // Draw the main line of the arrow
  ctx.moveTo(xi, yi);
  ctx.lineTo(xf, yf);

  // Calculate the length of the main line
  let r = Math.sqrt((xf - xi) ** 2 + (yf - yi) ** 2);

  // Calculate the angle of the main line in radians (0 to 2π)
  let theta = Math.atan2(yf - yi, xf - xi);
  if (theta < 0) theta += 2 * Math.PI;

  // Calculate coordinates for the first arrowhead segment
  let vx1 = length * Math.cos(theta + phiAngle1) + r * Math.cos(theta) + xi;
  let vy1 = length * Math.sin(theta + phiAngle1) + r * Math.sin(theta) + yi;

  ctx.moveTo(xf, yf);
  ctx.lineTo(vx1, vy1);

  // Calculate coordinates for the second arrowhead segment
  let vx2 = length * Math.cos(theta + phiAngle2) + r * Math.cos(theta) + xi;
  let vy2 = length * Math.sin(theta + phiAngle2) + r * Math.sin(theta) + yi;

  ctx.moveTo(xf, yf);
  ctx.lineTo(vx2, vy2);

  ctx.stroke();
}
