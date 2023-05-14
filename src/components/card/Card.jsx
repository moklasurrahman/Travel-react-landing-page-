import React from "react";
import img from "../../Assets/1.jpg";
import img2 from "../../Assets/2.jpg";
import img3 from "../../Assets/3.jpg";
import img4 from "../../Assets/4.jpg";
import img5 from "../../Assets/5.jpg";
// import img6 from "../../Assets/6.jpg";
// import img7 from "../../Assets/7.jpg";
// import img8 from "../../Assets/8.jpg";
// import img9 from "../../Assets/9.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import "./card.scss";
import useAos from './../../Animation';
const Card = () => {
  useAos({duration: 2000})
 
  const data = [
    {
      id: 1,
      imgScr: img,
      title: "Bora Bora",
      location: "New Zealand",
      grade: "CULTURAL RELAX",
      fees: "$700",
      desc: "The epitome of romance, Bora Bora is on of the of the best travel destionation is the world. This place is Known for its luxurious stays and adventrous activities",
    },

    {
      id: 2,
      imgScr: img2,
      title: "Bora haub",
      location: "pakistan",
      grade: "CULTURAL RELAX",
      fees: "$700",
      desc: "The epitome of romance, Bora Bora is on of the of the best travel destionation is the world. This place is Known for its luxurious stays and adventrous activities",
    },

    {
      id: 3,
      imgScr: img3,
      title: "paharpur",
      location: "Nowga bd",
      grade: "CULTURAL RELAX",
      fees: "$700",
      desc: "The epitome of romance, Bora Bora is on of the of the best travel destionation is the world. This place is Known for its luxurious stays and adventrous activities",
    },

    {
      id: 4,
      imgScr: img3,
      title: "sopnopuri",
      location: "dinajpur",
      grade: "CULTURAL RELAX",
      fees: "$700",
      desc: "The epitome of romance, Bora Bora is on of the of the best travel destionation is the world. This place is Known for its luxurious stays and adventrous activities",
    },

    {
      id: 5,
      imgScr: img4,
      title: "sopnopuri",
      location: "dinajpur",
      grade: "CULTURAL RELAX",
      fees: "$700",
      desc: "The epitome of romance, Bora Bora is on of the of the best travel destionation is the world. This place is Known for its luxurious stays and adventrous activities",
    },


    {
      id: 6,
      imgScr: img5,
      title: "sopnopuri",
      location: "dinajpur",
      grade: "CULTURAL RELAX",
      fees: "$700",
      desc: "The epitome of romance, Bora Bora is on of the of the best travel destionation is the world. This place is Known for its luxurious stays and adventrous activities",
    },
    
    
  ];
  return ( 
    <section className="cardSection container">
      <div className="allcontainer">
      <div className="sectiontitle">
        <h3 data-aos="fade-right">Most visited destinations:</h3>
      </div>

      <div className="cartContent grid">
        
        {data.map((item) => (
    
          <div data-aos="fade-up" data-aos-duration="5000 4000 5000" key={item.id} className="itemCont">
           
            <div className="item">
              <div className="image">
                <img src={item.imgScr} alt="" />
              </div>

              <div className="cardInfocont">
                <div className="info">
                  <div className="cardTitle">
                    <h3>{item.title}</h3>
                    <div className="location">
                      <LocationOnOutlinedIcon className="icon" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <hr />

                  <div className="cardprice flex">
                    <h4>
                      cultural <br /> relax <span className="relax">+1</span>
                    </h4>
                    <h1>{item.fees}</h1>
                  </div>

                  <hr />

                  <div className="cardDesc">
                    <p>{item.desc}</p>
                  </div>

                  <button className="btn">
                    Details <AssignmentTurnedInOutlinedIcon className="icon" />{" "}
                  </button>
                </div>
              </div>
            </div>
           
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Card;
