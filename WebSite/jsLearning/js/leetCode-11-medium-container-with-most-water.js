var maxArea = (height) => {
    let area = 0, i = 0, j = height.length - 1;
    while (i < j) {
        let temp = (j - i) * Math.min(height[i], height[j]);
        area = Math.max(area, temp);
        if (height[i] > height[j]) j--;
        else i++;
    }
    return area;
}