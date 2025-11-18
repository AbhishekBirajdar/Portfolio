// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // set active based on current path
    const current = navLinks.find((nav) =>
      nav.path === "/" ? location.pathname === "/" : location.pathname === nav.path
    );
    setActive(current ? current.title : "");
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <nav
    //   className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
    //     scrolled ? "bg-primary" : "bg-transparent"
    //   }`}
    // >
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#ffefd5]/90 backdrop-blur-md`}>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-20 h-10 object-contain" />
          <p className="text-[#000000] text-[18px] font-bold cursor-pointer flex">
            &nbsp;<span className="sm:block hidden">| Home</span>
          </p>
        </Link>

        {/* Desktop menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#000000]" : "text-white"
              } hover:text-[#000000] text-[18px] font-bold cursor-pointer flex`}
            >
              <Link
                to={nav.path}
                onClick={() => {
                  setActive(nav.title);
                  window.scrollTo(0, 0);
                }}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 white-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-bold cursor-pointer text-[16px] ${
                    active === nav.title ? "text-[#000000]" : "text-secondary"
                  }`}
                >
                  <Link
                    to={nav.path}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
