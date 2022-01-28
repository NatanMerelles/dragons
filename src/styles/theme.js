const modes = {
	dark: {
		colorScheme: 'dark',
		primary: '#2B2A33',
		secondary: '#42414d',
		color: '#FFF',
		colorSecondary: '#EDEDED',
		buttonPrimary: '#FAFAFA',
		buttonSecondary: '#555463',
		hoverPrimary: '#E0E0E0',
		hoverSecondary: '#4f4e5c'
	},
	light: {
		colorScheme: 'light',
		primary: '#EDEDED',
		secondary: '#FFF',
		color: '#2B2A33',
		colorSecondary: '#42414d',
		buttonPrimary: '#555463',
		buttonSecondary: '#FAFAFA',
		hoverPrimary: '#4f4e5c',
		hoverSecondary: '#E0E0E0'
	}
}

const theme = (mode) => ({
	colors: {
		header: '#1E1E1E',
		green: '#13aa52',
		red: '#FF013C',
		yellow: '#fff000',
		white: '#FFF',
		...modes[mode]
	}
});

export default theme;