const modes = {
	dark: {
		colorScheme: 'dark',
		primary: '#2B2A33',
		secondary: '#42414d',
		color: '#FFF',
		colorSecondary: '#CCC',
	},
	light: {
		colorScheme: 'light',
		primary: '#CCC',
		secondary: '#FFF',
		color: '#2B2A33',
		colorSecondary: '#42414d',
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