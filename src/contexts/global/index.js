import { createContext, useState, useEffect, useContext } from 'react';

const GlobalContext = createContext(null);

const GlobalContextProvider = ({ children }) => {
	const [user, setUser] = useState(localStorage && localStorage.getItem('username'));
	const [mode, setMode] = useState(localStorage && localStorage.getItem('mode') || 'dark');

	const signin = (newUser) => {
		return new Promise((resolve, reject) => {
			try {
				setUser(newUser);
				localStorage.setItem('username', newUser);

				resolve(newUser);
			} catch (error) {
				reject(error);
			}
		})
	};

	const signout = () => {
		return new Promise((resolve, reject) => {
			try {
				setUser(null);
				localStorage.removeItem('username');

				resolve();
			} catch (error) {
				reject(error);
			}
		})
	};

	const changeMode = (mode) => {
		setMode(mode);
		localStorage.setItem('mode', mode);
	}


	return (
		<GlobalContext.Provider
			value={{ user, mode, signin, signout, changeMode }}
		>
			{children}
		</GlobalContext.Provider>
	)
}

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContextProvider, useGlobalContext }