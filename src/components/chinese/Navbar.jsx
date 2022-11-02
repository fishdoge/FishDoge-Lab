import React,{useState} from 'react';
import {close,LOGO,menu} from '../assets';
import {navLinks} from '../constants';
import {LOGO2} from '../newassets';



const Navbar = ()=>{
  const [toggle,setToggle] = useState(false);

  return(
    <nav className='w-full flex py-6 justify-between items-cender navbar'>
      <img src={LOGO2} alt="hoobank" className="w-[104px] h-[104px]"/>
      <ul className="list-none font-bold sm:flex hidden hidden justify-end items-center flex-1">
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