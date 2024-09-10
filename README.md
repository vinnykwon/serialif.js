# serialif.js
Web-API for [color.serialif.com](https://color.serialif.com) an REST API to get a requested color, its complementary and its grayscale in different formats and the black or white text corresponding to each color according to its brightness

## Example
```JavaScript
async function main() {
	const { Serialif } = require("./serialif.js");
	const serialif = new Serialif()
	const color_info = await serialif.getColorByKeyword("blue")
	console.log(color_info)
}

main()
```
