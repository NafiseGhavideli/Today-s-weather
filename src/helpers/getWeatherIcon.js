export function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [
      [0],
      "https://img.icons8.com/?size=100&id=aXgIQg8m0A4o&format=png&color=000000",
    ],
    [
      [1, 2, 3],
      "https://img.icons8.com/?size=100&id=OFU5h8HeWK3z&format=png&color=000000",
    ],
    [
      [45, 48],
      "https://img.icons8.com/?size=100&id=qHIFUjYhnsFU&format=png&color=000000",
    ],
    [
      [51, 53, 55],
      "https://img.icons8.com/?size=100&id=PIXtKMDAXCzo&format=png&color=000000",
    ],
    [[56, 57], ""],
    [
      [61, 63, 65],
      "https://img.icons8.com/?size=100&id=kKxyuLXD4w0n&format=png&color=000000",
    ],
    [
      [66, 67],
      "https://img.icons8.com/?size=100&id=fyJ8mNcBHced&format=png&color=000000",
    ],
    [
      [71, 73, 75],
      "https://img.icons8.com/?size=100&id=JBQOSn7KOSuD&format=png&color=000000",
    ],
    [
      [77],
      "https://img.icons8.com/?size=100&id=Mi2BdbZQWNYQ&format=png&color=000000",
    ],
    [
      [80, 81, 82],
      "https://img.icons8.com/?size=100&id=7Dcax1eBasEf&format=png&color=000000",
    ],
    [
      [85, 86],
      "https://img.icons8.com/?size=100&id=cyZConbteZk9&format=png&color=000000",
    ],
    [
      [95],
      "https://img.icons8.com/?size=100&id=GtgqQIYSqT50&format=png&color=000000",
    ],
    [
      [96, 99],
      "https://img.icons8.com/?size=100&id=6AAyqKfBlzoB&format=png&color=000000",
    ],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}
