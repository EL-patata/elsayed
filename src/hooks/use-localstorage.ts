import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue?: T) {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item !== null ? (JSON.parse(item) as T) : initialValue;
		} catch (error) {
			console.error('Error reading localStorage key “' + key + '”: ', error);
			return initialValue;
		}
	});

	useEffect(() => {
		try {
			window.localStorage.setItem(key, JSON.stringify(storedValue));
		} catch (error) {
			console.error('Error writing localStorage key “' + key + '”: ', error);
		}
	}, [key, storedValue]);

	return { storedValue, setStoredValue } as const;
}
