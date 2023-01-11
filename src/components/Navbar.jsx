import React,{useState , useRouter} from 'react';
import {close,LOGO,menu} from '../assets';
import {navLinks} from '../constants';
import {LOGO2} from '../newassets';
import { Link, BrowserRouter, Router, Route,HashRouter,Routes } from "react-router-dom";
import CnLangApp from './cn/CnApp';


const Navbar = ()=>{
  const [toggle,setToggle] = useState(false);
  //const router = useRouter();
  return(
    <nav className='w-full flex py-6 justify-between items-cender navbar'>
      <img src={LOGO2} alt="hoobank" className="w-[104px] h-[104px]"/>
      {/*  #b7ff1a */}

      <ul className="list-none font-bold sm:flex hidden hidden justify-end items-center flex-1">


          <Link to='/cn' >
            <button className="bg-[#b7ff1a]  hover:bg-[#FFFFFF] text-[#000000] font-bold justify-end mr-[30px] py-1.5 px-4 rounded-full">中文</button>
          </Link>



        {navLinks.map((nav,index)=>(
          <li
            key ={nav.id}
            className={`font-poppins font-semibold  cursor-pointer text-[20px] ${index === navLinks.length - 1 ? 'mr-0':'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close:menu}/>
      </div>
    </nav>
  )
}

export default Navbar;