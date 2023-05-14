import React, { useState } from 'react'
import './navbar.scss'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import GrainIcon from '@mui/icons-material/Grain';

import { Link } from 'react-router-dom';


const Navbar = () => {

  const [active, setActive] = useState('navbar')
  
  //mobile navbar active
  const showNav = ()=>{
    setActive('navbar activeNavbar') //'navbar' is css class name AND 'activeNavbar' is class name
  }

  //mobile navbar remove
  const removeNav = ()=>{
    setActive('navbar')
  }
  return (
    <section className='navBarSection'>
     
      <div className="header flex">
        <div className="warper">
          <div className='logo flex'>
            <h1><TravelExploreIcon className='icon'/> Travel.</h1>
          </div>
      
        <div className={active}> {/* navbar */}
         <ul className="navLists flex">
        
          <Link to="/">
          <li className='navitem'>
            <a className='navLink'> Home</a>
          </li>
          </Link>


          <li className='navitem'>
            <a  className='navLink'>Packages</a>
          </li>
          <li className='navitem'>
            <a className='navLink'>Shop</a>
          </li>
          <li className='navitem'>
            <a className='navLink'>About</a>
          </li>
          <li className='navitem'>
            <a  className='navLink'>Pages</a>
          </li>
          <li className='navitem'>
            <a  className='navLink'>News</a>
          </li>
          <li className='navitem'>
            <a className='navLink'>Contact</a>
          </li>
          <button className='btn'><a>Book Now</a></button>
         </ul>

         <div onClick={removeNav} className="closeNavbar">
            <CancelRoundedIcon className='icon'/>
         </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
              <GrainIcon className='icon'/>
        </div>
      
        </div>
      
      </div>

    </section>
  )
}

export default Navbar