import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeProvider";

const Navbar = () => {
  const { storedValue, setStoredValue } = useContext(ThemeContext);

  useEffect(() => {
    if (storedValue === "dark") {
      document.documentElement.setAttribute("data-theme", storedValue);
    } else {
      document.documentElement.setAttribute("data-theme", storedValue);
    }
  }, [storedValue]);

  console.log(storedValue);

  return (
    <div className="nav_container">
      <img src="https://picsum.photos/200/300" width={30} alt="Logo" />
      <div className="nav_links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {storedValue === "dark" ? (
          <button onClick={() => setStoredValue("")}>Light</button>
        ) : (
          <button onClick={() => setStoredValue("dark")}>Dark</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
