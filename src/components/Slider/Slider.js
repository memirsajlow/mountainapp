import React from "react";

import Carousel from "react-elastic-carousel";
import "./Slider.scss";
import DSC02586 from "../../images/DSC02586.JPG";
import DSC01920 from "../../images/DSC01920.JPG";
import DSC01954 from "../../images/DSC01954.JPG";
import DSC01968 from "../../images/DSC01968.JPG";
import DSC02234 from "../../images/DSC02234.JPG";
import DSC02323 from "../../images/DSC02323.JPG";
import SAM_2369 from "../../images/SAM_2369.JPG";
import DSC02411 from "../../images/DSC02411.JPG";
import SAM_1129 from "../../images/SAM_1129.JPG";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Slider() {
  return (
    <>
      
      <div className="Slider">
        <Carousel breakPoints={breakPoints}>
        <img src={DSC02586} alt="DSC02586" />
        <img src={DSC01920} alt="DSC01920" />
        <img src={DSC01954} alt="DSC01954" />
        <img src={DSC01968} alt="DSC01968" />
        <img src={DSC02234} alt="DSC02234" />
        <img src={DSC02323} alt="DSC02323" />
        <img src={SAM_2369} alt="SAM_2369"/>
        <img src={DSC02411} alt="DSC02411" />
        <img src={SAM_1129} alt="SAM_1129" />
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
export default Slider;