const modes = {
	dark: {
		primary: '#2B2A33',
		secondary: '#42414d',
		color: '#FFF',
	},
	light: {
		primary: '#CCC',
		secondary: '#FFF',
		color: '#2B2A33',
	}
}

export default (mode) => ({
	colors: {
		header: '#1E1E1E',
		green: '#13aa52',
		red: '#FF013C',
		yellow: '#fff000',
		white: '#FFF',
		...modes[mode]
	}
});