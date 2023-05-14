import './footer.scss'
import video from "../../Assets/video1.mp4";
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { TbBrandTripadvisor } from 'react-icons/tb';
import useAos from './../../Animation';


const Footer = () => {

  useAos({duration: 2000})
  return (
    <div className='footer'>

     <div className="videoDiv">
     <div className="overlay"></div>
      <video src={video} loop muted autoPlay type="video/mp4"></video>
     </div>


      <div className="footercontent container">
      
      <div data-aos="fade-up" className="textDiv">
          <div>
          <span>keep in touch</span>
          <h1>travel with us</h1>
          </div>
         
          <form>
          <div className="contact flex">
            <label htmlFor="emai"></label>
            <input type="email" placeholder='Enter Emaill Adderess' />
            <button className='btn' type='submit'>Send <SendIcon className='icon'/> </button>
          </div>
          </form>

      </div>


      <div className="footeritems">
        <div className="footeritem">
          
          <div className="left">
          <div className="leftitem">
          <div data-aos="fade-right" className='logo flex'>
            <h1><TravelExploreIcon className='icon'/> Travel.</h1>
          </div>
        

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolores iure dignissimos illum! At cum neque illo doloremque error! Minima nesciunt ut aliquam, culpa impedit id fugiat quidem aperiam iste, numquam eius ad veniam quod.</p>

        <div data-aos="fade-left" className="socialIcon">
          <TwitterIcon className='icon'/>
          <YouTubeIcon className='icon'/>
          <InstagramIcon className='icon'/>
          <TbBrandTripadvisor className='icon'/>

        </div>
          </div>
          </div>
         
          <div className="right">
            
            <div className="list">
              <div className="listTitle">
                <h3>our agency</h3>
                <div data-aos="fade-up" data-aos-duration="3000" className="listitem">
                    <span> <ArrowForwardIosIcon className='icon'/> services</span>
                    <span> <ArrowForwardIosIcon className='icon'/> insurance</span>
                    <span> <ArrowForwardIosIcon className='icon'/> Agency</span>
                    <span> <ArrowForwardIosIcon className='icon'/> Tourism</span>
                    <span> <ArrowForwardIosIcon className='icon'/> Payment</span>
                </div>
              </div>

              <div className="listTitle">
                <h3>partners</h3>
                <div data-aos="fade-up" data-aos-duration="4000" className="listitem">
                    <span> <ArrowForwardIosIcon className='icon'/> booking</span>
                    <span> <ArrowForwardIosIcon className='icon'/> rentalCar</span>
                    <span> <ArrowForwardIosIcon className='icon'/> hostelWorld</span>
                    <span> <ArrowForwardIosIcon className='icon'/> trivago</span>
                    <span> <ArrowForwardIosIcon className='icon'/> tripAdvisor</span>
                </div>
              </div>


              <div data-aos="fade-up" data-aos-duration="5000" className="listTitle">
                <h3>our agency</h3>
                <div className="listitem">
                    <span> <ArrowForwardIosIcon className='icon'/> london</span>
                    <span> <ArrowForwardIosIcon className='icon'/> california</span>
                    <span> <ArrowForwardIosIcon className='icon'/> indonesia</span>
                    <span> <ArrowForwardIosIcon className='icon'/> europe</span>
                    <span> <ArrowForwardIosIcon className='icon'/> oceania</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      <div className="infofooter">
        <span>devolap my Moklasur rahman</span>
        <span>	&#169; Copyright reserved </span>
      </div>
      </div>





      </div>



    </div>
  )
}

export default Footer