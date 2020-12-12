import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header(props) {
    const [click, setClick] = useState(false);
    const [searchClick, setSearchClick] = useState(false);
    const inputRef = useRef();

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
        setClick(false);
    };

    const openSearchBox = () => {
        setSearchClick(true);
    };
    useEffect(() => {
        if (searchClick === true) {
            inputRef.current.focus();
        }
    }, [searchClick]);

    const closeSearchBox = () => {
        setSearchClick(false);
    };

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <img src='./logo.PNG' alt='' />
                    </Link>
                    <div className='navbar-menu-container'>
                        <div className='menu-icon' onClick={handleClick}>
                            <FontAwesomeIcon
                                icon={
                                    click ? ["fas", "times"] : ["fas", "bars"]
                                }
                            />
                        </div>
                        <div className={click ? "nav-menu active" : "nav-menu"}>
                            <div className='nav-item'>
                                <Link
                                    to='/'
                                    className='nav-links underline-news'
                                    onClick={closeMobileMenu}
                                >
                                    NEWS TODAY
                                </Link>
                            </div>
                            <div className='nav-item'>
                                <Link
                                    to='/sport'
                                    className='nav-links underline-sport'
                                    onClick={closeMobileMenu}
                                >
                                    SPORTS
                                </Link>
                            </div>
                            <div className='nav-item'>
                                <Link
                                    to='/culture'
                                    className='nav-links underline-culture'
                                    onClick={closeMobileMenu}
                                >
                                    CULTURE
                                </Link>
                            </div>
                            <div className='nav-item'>
                                <Link
                                    to='/lifestyle'
                                    className='nav-links underline-lifestyle'
                                    onClick={closeMobileMenu}
                                >
                                    LIFESTYLE
                                </Link>
                            </div>
                        </div>
                        <div className='search-container'>
                            {searchClick ? (
                                <div className='full-search underline-search'>
                                    <FontAwesomeIcon
                                        className='search-icon'
                                        icon={["fas", "search"]}
                                    />
                                    <input
                                        type='text'
                                        className='search-input'
                                        placeholder='search'
                                        ref={inputRef}
                                        onBlur={(e) => {
                                            e.target.value === "" &&
                                                closeSearchBox();
                                        }}
                                        onChange={(e) => {
                                            if (e.target.value === "") {
                                                closeSearchBox();
                                            }
                                            props.seachTextHandle(
                                                e.target.value
                                            );
                                        }}
                                    />
                                </div>
                            ) : (
                                <div
                                    className='mini-search underline-search'
                                    onClick={openSearchBox}
                                >
                                    <FontAwesomeIcon icon={["fas", "search"]} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
