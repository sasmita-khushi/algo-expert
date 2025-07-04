var largestTriangleArea = function (points) {
  let maxArea = 0;

  // Loop through all combinations of three points
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        const area = calculateArea(points[i], points[j], points[k]);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
};

function calculateArea(p, q, r) {
  const x1 = p[0],
    y1 = p[1];
  const x2 = q[0],
    y2 = q[1];
  const x3 = r[0],
    y3 = r[1];

  return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
}

console.log(
  largestTriangleArea([
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
    [2, 2],
    [1, 1],
    [1, 2],
    [2, 1],
  ])
);
