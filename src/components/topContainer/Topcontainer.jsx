import React from "react";
import video from "../../Assets/3.mp4";
import './topcontaine.scss'
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { TbBrandTripadvisor } from 'react-icons/tb';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { TbApps } from 'react-icons/tb';

//from animation
import useAos from './../../Animation';


const Topcontainer = () => {
 
  useAos({duration: 2000});
  
  return (
    <secshon className="topcontainer">
      <div className="overlay"></div>
      <video src={video} loop muted autoPlay type="video/mp4"></video>

      <div className="topContent container">
        
        <div className="textDiv">
          <span>Our packages</span>
          <h1 data-aos="fade-up">Search your Holiday</h1>
        </div>

        {/* for Search destination */}
        <div className="holidaySearch grid">
         
          <div className="destinationInput">
            
            <label  htmlFor="city">Search your destination: </label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here.." id="city" />
              <AddLocationOutlinedIcon className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Search your date: </label>

            <div className="input flex">
              <input className="input" type="date" id="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3>$4000</h3>
            </div>

            <div className="input flex">
              <input className="input" type="range" id="price" name="price"
                    min="400" max="8000"/>
            </div>
          </div>

                <div className="searchOptions flex">
                    <FilterAltOutlinedIcon className="icon"/>
                    <span>MORE FILTERS</span>
                </div>
        </div>

        <div data-aos="fade-up" className="topContactList flex">
            
                <div className="item">
                    <FacebookOutlinedIcon className="icon"/>
                    <InstagramIcon className="icon"/>
                    <TbBrandTripadvisor className="icon"/>
                </div>
            
            <div className="item">
                <FormatListBulletedIcon className="icon"/>
                <TbApps className="icon"/>
            </div>
        </div>

      </div>
    </secshon>
  );
};

export default Topcontainer;
