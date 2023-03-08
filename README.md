# font-details

## About

This package allows for easy testing of what size a string from a font will be when it is rendered

## Usage

```ts
import { getFontDetails } from "font-details";
function main(): TextMetrics {
 const details = getFontDetails(10, "monospace");
 //Gets the details of "10px monospace" with the character 'a'
 return details;
}
// Returns
{
  "actualBoundingBoxAscent": 5,
  "actualBoundingBoxDescent": 0,
  "actualBoundingBoxLeft": 0,
  "actualBoundingBoxRight": 5,
  "fontBoundingBoxAscent": 9,
  "fontBoundingBoxDescent": 3,
  "width": 5.498046875
}
```

### Properties can just be directly returned

```ts
function getWidthExample(): number {
 const details = getFontDetails(10, "monospace");
 //Gets the details of "10px monospace" with the character 'a'
 return details.width; // 5.498046875, in this case
}
```

### Custom strings can also be used

The default string used for measuring text is simply "a"

```ts
function customStringExample(): number {
 const details = getFontDetails(10, "monospace", "ab");
 //Gets the details of "10px monospace" with the character 'a'
 return details.width; // 10.99609375, in this case
}
```

As this font is monospace, the width of "ab" is double the width of "a", as each glyph has the same width. This isn't the case for most fonts, where different letters have different widths

If you like this package, leave it a star on github:

[![Tommypop2 - font-details](https://img.shields.io/static/v1?label=Tommypop2&message=font-details&color=blue&logo=github)](https://github.com/Tommypop2/font-details "Go to GitHub repo")
[![stars - font-details](https://img.shields.io/github/stars/Tommypop2/font-details?style=social)](https://github.com/Tommypop2/font-details)
