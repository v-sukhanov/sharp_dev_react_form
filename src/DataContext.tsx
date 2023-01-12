import { createContext, ReactNode, useContext, useState } from 'react';


const DataContext = createContext({});

export const DataProvider = ({children}: {children: ReactNode}) => {
	const [data, setData] = useState({});
	const setValues = (values: {}) => {
		setData((prevData) => ({
			...prevData,
			...values
		}))
	}

	return (
		<DataContext.Provider value={{data, setValues}}>
			{children}
		</DataContext.Provider>
	)
}

export const useData = () => useContext(DataContext);
