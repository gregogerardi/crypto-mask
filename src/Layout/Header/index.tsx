import {useState} from "react";
import style from "./style.module.css";
import fonts from "theme/fonts/fonts.module.css";
import classNames from "classnames";
const optionCls = classNames(fonts.defaultFont, fonts.size18, style.option)

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const navOptionsWrapperCls = classNames(style.navWrapper, {[style.active]: click})
    const navOptionsCls = classNames(style.nav, {[style.active]: click})
    const headerCls = classNames(style.header, {[style.active]: click})
    const clickOutsideCls = classNames(style.clickOutside, {
        [style.active]: click,
    })
    return (
        <nav className={headerCls}>
            <div className={navOptionsWrapperCls}>
            <ul className={navOptionsCls}>
                <li className={optionCls} onClick={closeMobileMenu}>
                    <a href="#Story">Story</a>
                </li>
                <li className={optionCls} onClick={closeMobileMenu}>
                    <a href="#NFTs">NFTs</a>
                </li>
                <li className={optionCls} onClick={closeMobileMenu}>
                    <a href="#Roadmap">Roadmap</a>
                </li>
                <li className={optionCls} onClick={closeMobileMenu}>
                    <a href="#Discord">Discord</a>
                </li>
                <li className={optionCls} onClick={closeMobileMenu}>
                    <a href="#Twitter">Twitter</a>
                </li>
                <li className={optionCls} onClick={closeMobileMenu}>
                    <a href="#OpenSea">OpenSea</a>
                </li>
                <li className={optionCls} onClick={closeMobileMenu}>
                    <a href="#Mail">Mail</a>
                </li>
            </ul>
            </div>
            <div className={style.menuIcon} onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="32" height="32"
                     viewBox="0 0 48 48"
                >
                    <path d="M6 22H42V26H6zM6 10H42V14H6zM6 34H42V38H6z"/>
                </svg>
            </div>
            <div className={clickOutsideCls} onClick={closeMobileMenu}/>
        </nav>
    );
};

export default Header;
