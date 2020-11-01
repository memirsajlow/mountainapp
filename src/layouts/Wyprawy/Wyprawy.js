import React from 'react';

import "./Wyprawy.scss";
import DSC03709 from "../../images/DSC03709.JPG";

const Wyprawy = () => {
  return (
    <>
      <div className="App-wyprawy">
      <h2 id="move-down">WYPRAWY</h2>
        <div className="articles">

            <article>
                <img src={DSC03709} alt="DSC03709" width="200px" height="200px"/>
                <h3>LOREM IPSUM SIT DOLOR</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quis at obcaecati recusandae tempora? In vitae libero itaque beatae veniam perferendis, et magnam. Suscipit illo quaerat deserunt veritatis in inventore.</p>
                <a href="#" className="read-more">READ MORE</a>
            </article>
            <article>
                <img src={DSC03709} alt="DSC03709" width="200px" height="200px"/>
                <h3>LOREM IPSUM SIT DOLOR</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quis at obcaecati recusandae tempora? In vitae libero itaque beatae veniam perferendis, et magnam. Suscipit illo quaerat deserunt veritatis in inventore.</p>
                <a href="#" className="read-more">READ MORE</a>
            </article>
            <article>
                <img src={DSC03709} alt="DSC03709" width="200px" height="200px"/>
                <h3>LOREM IPSUM SIT DOLOR</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quis at obcaecati recusandae tempora? In vitae libero itaque beatae veniam perferendis, et magnam. Suscipit illo quaerat deserunt veritatis in inventore.</p>
                <a href="#" className="read-more">READ MORE</a>
            </article>
        </div>
        </div>
     
   </>
  );
};

export default Wyprawy;