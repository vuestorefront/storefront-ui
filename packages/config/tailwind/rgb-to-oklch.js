// Converts RGB color palette taken from figma to OKLCH css variables to be used in config.css
// Run this script in the browser console!

`50
#F9FBFA`.split('\n').map((v, i, arr) => {
    if (i%2 === 0) return;
    $0.style.color = `oklch(from ${v} l c h)`;
    const value = window.getComputedStyle($0).color;
    return `--color-neutral-${arr[i-1]}: ${value}`;
}).filter(Boolean).join('\n')