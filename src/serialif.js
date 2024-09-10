class Serialif {
	constructor() {
		this.api = "https://color.serialif.com"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getColorByKeyword(keyword) {
		const response = await fetch(
			`${this.api}/keyword=${keyword}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getColorByHex(hex) {
		const response = await fetch(
			`${this.api}/hex=${keyword}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getColorByRgb(rgb) {
		const response = await fetch(
			`${this.api}/rgb=${rgb}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getColorByRgba(rgba) {
		const response = await fetch(
			`${this.api}/rgba=${rgba}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getColorByHsl(hsl) {
		const response = await fetch(
			`${this.api}/hsl=${hsl}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getColorByHsla(hsla) {
		const response = await fetch(
			`${this.api}/hsla=${hsla}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {Serialif}
