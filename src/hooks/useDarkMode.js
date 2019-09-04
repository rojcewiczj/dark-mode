import { sideEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key) => {
    const [values, setValues] = useLocalStorage(key);


}