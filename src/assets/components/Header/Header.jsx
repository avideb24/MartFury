import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Header = () => {

    const [isSearchVisible, setIsSearchVisible] = useState(false);

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li>
                                <a>Category</a>
                                <ul className="p-2">
                                    <li><a>Glasses</a></li>
                                    <li><a>Laptops</a></li>
                                    <li><a>Smartphonse</a></li>
                                </ul>
                            </li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">MartFury</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Category</summary>
                                <ul className="p-2">
                                    <li><a>Glasses</a></li>
                                    <li><a>Laptops</a></li>
                                    <li><a>Smartphonse</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <div className="relative">
                        <button onClick={() => setIsSearchVisible(!isSearchVisible)} className="text-2xl p-1"><AiOutlineSearch></AiOutlineSearch></button>
                        {
                            isSearchVisible ?
                                <div className="absolute top-9 -left-44 flex w-52 h-8 duration-500 z-50">
                                    <input className="w-[85%] h-full px-2 outline-none text-sm border-2 border-yellow-500" type="text" placeholder="Search here..." />
                                    <button className="w-[15%] h-full bg-yellow-500"><span className="inline-block mx-auto text-white font-extrabold"><AiOutlineSearch></AiOutlineSearch></span></button>
                                </div>
                                :
                                <div className="absolute top-9 -left-44 flex w-52 h-0 invisible duration-500 z-50">
                                    <input className="w-[85%] h-full px-2 outline-none text-sm border-2 border-yellow-500" type="text" placeholder="Search here..." />
                                    <button className="w-[15%] h-full bg-yellow-500"><span className="inline-block mx-auto text-white font-extrabold"><AiOutlineSearch></AiOutlineSearch></span></button>
                                </div>
                        }
                    </div>
                    <div className="relative">
                        <button className=" text-2xl  p-1"><AiOutlineHeart></AiOutlineHeart></button>
                        <p className="text-xs text-white text-center bg-yellow-500 w-4 h-4 absolute -top-1 -right-1 rounded-full">2</p>
                    </div>
                    <div className="relative">
                        <button className=" text-2xl  p-1"><AiOutlineShoppingCart></AiOutlineShoppingCart></button>
                        <p className="text-xs text-white text-center bg-yellow-500 w-4 h-4 absolute -top-1 -right-1 rounded-full">2</p>
                    </div>
                    <div className="relative">
                        <button className="text-2xl p-1"><AiOutlineUser></AiOutlineUser></button>
                        <p className="text-xs text-white text-center bg-yellow-500 w-4 h-4 absolute -top-1 -right-1 rounded-full">2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;