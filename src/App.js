import { useState } from "react";
import "./assets/styles/App.css";
import { lightTheme, darkTheme } from "./assets/styles/Themes";
import { Homepage } from "./components/Pages/Home";

const App = () => {
    // setup theme toggler
    const [theme, setTheme] = useState(lightTheme);
    const themeToggler = () => {
        theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    };
    // setup page toggler
    const [page, setPage] = useState();
    const pageToggler = (page) => {
        setPage(page);
    };
    // set homescreen as page
    if (page === undefined)
        pageToggler(Homepage(theme, themeToggler, pageToggler));
    // return page
    return page;
};

export default App;
