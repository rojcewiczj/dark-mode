import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
 const item = JSON.parse(localStorage.getItem(key));
 const [storedValue, setStoredValue] = useState(item || initialValue);
 const setValue = value => {
     window.localStorage.setItem(key, JSON.stringify(value))
     setStoredValue(value);
 }
 return [storedValue, setValue]
};
//useState(initialValue)------>[value, setValue]
export default useLocalStorage;