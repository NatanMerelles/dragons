import { ThemeProvider } from 'styled-components';
import { useGlobalContext } from '../contexts';
import theme from './theme';

export default ({ children }) => {
	const global = useGlobalContext();

	return (
		<ThemeProvider
			theme={theme(global.mode)}
		>
			{children}
		</ThemeProvider>
	);
}