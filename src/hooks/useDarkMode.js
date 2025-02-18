import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (intitialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', intitialValue ) ;
    useEffect (() => { 
  if(darkMode) {
      document.body.classList.add('dark-mode');
  } else {
      document.body.classList.remove('dark-mode');
  }
    },[darkMode]);

return [darkMode, setDarkMode];
};

export default useDarkMode;