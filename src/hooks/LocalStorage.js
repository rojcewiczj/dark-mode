import { useState } from 'react';

const LocalStorage = (key, initialValue) => {
 const [storedValue, setStoredValue] = useState(initialValue);
 const setValue = value => {
     window.localStorage.setItem(key, JSON.stringify(value))
     setStoredValue(value);
 }
 return [storedValue, setValue]
};
//useState(initialValue)------>[value, setValue]
export default LocalStorage;