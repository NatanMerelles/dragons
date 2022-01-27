const modes = {
	dark: {
		background: '#2B2A33',
		secondary: '#42414d',
		text: '#FFF',
	},
	light: {
		background: '#CCC',
		secondary: '#FFF',
		text: '#2B2A33',
	}
}

export default (mode) => ({
	colors: {
		header: '#1E1E1E',
		...modes[mode]
	}
});