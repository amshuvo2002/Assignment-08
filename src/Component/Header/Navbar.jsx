import React from 'react';
import Logo from '../../assets/logo.png'
import Github from '../../assets/icons8-github-logo-30.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "underline underline-offset-4 font-bold" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Apps"
                                    className={({ isActive }) =>
                                        isActive ? "underline underline-offset-4 font-bold" : ""
                                    }
                                >
                                    Apps
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Installation"
                                    className={({ isActive }) =>
                                        isActive ? "underline underline-offset-4 font-bold" : ""
                                    }
                                >
                                    Installation
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "underline underline-offset-4 font-bold btn btn-ghost text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent flex items-center gap-2"
                                : "btn btn-ghost text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent flex items-center gap-2"
                        }
                    >
                        <img className='w-[40px]' src={Logo} alt="Logo" /> HERO.IO
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "underline underline-offset-4 font-bold" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Apps"
                                className={({ isActive }) =>
                                    isActive ? "underline underline-offset-4 font-bold" : ""
                                }
                            >
                                Apps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Installation"
                                className={({ isActive }) =>
                                    isActive ? "underline underline-offset-4 font-bold" : ""
                                }
                            >
                                Installation
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <button onClick={() => window.open("https://github.com/amshuvo2002", "_blank")} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2">
                        <img className='w-[30px] invert' src={Github} alt="Github" /> Contribute
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
