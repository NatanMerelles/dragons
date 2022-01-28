import { ThemeProvider } from 'styled-components';
import { useGlobalContext } from '../contexts';
import theme from './theme';

const Provider = ({ children }) => {
	const global = useGlobalContext();

	return (
		<ThemeProvider
			theme={theme(global.mode)}
		>
			{children}
		</ThemeProvider>
	);
}

export default Provider;