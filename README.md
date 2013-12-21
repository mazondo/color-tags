# colorTags.js
A small library to help generate deterministic colors based on any text input.  Great for color coding tags across your interface without having to store color codes in your data layer.

## Example
![colorTags example](https://github.com/mazondo/color-tags/raw/master/example.png)

## Generating a Color
```javascript
var color = colorTag("tag-name"),
  hex = color.hex();
  rgb = color.rgb();
```

## Determining the most readable color
Also useful when working with tags is the ability to determine the most readable color for a given background color.
```javascript
var color = colorTag("tag-name"),
  mostReadable = color.readable("#000000", "#ffffff");

console.info(mostReadable.hex());
```
That will return the most readable color out of the list of colors you provided.  If no colors are provided, `#000000` and `#ffffff` will be used.