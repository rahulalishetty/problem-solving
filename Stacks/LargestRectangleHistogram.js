function largestRectangleHistogram(heights) {
    let maxArea = 0;
    const stack = [];
    heights = [0].concat(heights).concat([0]);
    for (let i = 0; i < heights.length; i++) {
        while (stack && heights[stack[stack.length - 1]] > heights[i]) {
            const j = stack.pop();
            // finds the largest area of the rectangle with height heights[j]
            maxArea = Math.max((i - stack[stack.length - 1] - 1) * heights[j], maxArea);
        }
        stack.push(i);
    }
    return maxArea;
}