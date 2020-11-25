import React from 'react';
import {Link} from "react-router-dom";
import "./Wyprawy.scss";
import DSC02586 from "../../images/DSC02586.JPG";
import SAM_2398 from "../../images/SAM_2398.JPG";
import SAM_1336 from "../../images/SAM_1336.JPG";

const Wyprawy = () => {
  return (
    <>
      <div className="App-wyprawy">
      <h2 id="move-down">WYPRAWY</h2>
        <div className="articles">

            <article>
                <img src={DSC02586} alt="DSC025869" width="200px" height="200px"/>
                <h3>MONT BLANC (4808,72 m n.p.m.). Alpy Zachodnie</h3>
                <p>Najwyższy szczyt Alp położony w Masywie Mont Blanc, w Alpach Graickich, w Alpach Zachodnich. Potocznie nazywanym często Dachem Europy, choć to, czy jest najwyższym szczytem tego Kontynentu jest przedmiotem sporów, wynikających z różnych definicji granic Europy.</p>
                <Link to = "/more" style={{textDecoration:"none"}}>
                <a href="#" className="read-more">Więcej</a>
                </Link>
            </article>
            <article>
                <img src={SAM_2398} alt="SAM_2398" width="200px" height="200px"/>
                <h3>PIK LENINA (7134 m n.p.m.). Góry Zaałajskie w Pamirze.</h3>
                <p>Szczyt w Górach Zaałajskich w Pamirze, w Azji, na granicy Tadżykistanu i Kirgistanu, drugi co do wysokości (po Szczycie Ismaila Samaniego) w górach Pamiru. Do czasu rozpadu Związku Radzieckiego był drugim co do wysokości szczytem radzieckiego Pamiru i trzecim w ogóle szczytem ZSRR. </p>
                <Link to = "/more" style={{textDecoration:"none"}}>
                <a href="#" className="read-more">Więcej</a>
                </Link>
            </article>
            <article>
                <img src={SAM_1336} alt="SAM_1336" width="200px" height="200px"/>
                <h3>CASTOR (4228 m n.p.m.) i POLLUX (4092 m n.p.m.). Alpy Pennińskie. </h3>
                <p>Castor i Pollux nazwane są bliźniakami (niem. „Zwillinge”). Szczyt można zdobyć ze schronisk Monte Rosa Hut (2795 m) i Gandegg Hütte (3029 m) po stronie szwajcarskiej oraz Rifugio Quintino Sella (3585 m) i Rifugio Ottorino Mezzalama (3036 m) po stronie włoskiej. Lodowiec pod szczytem to Lodowiec Zwilling. </p>
                <Link to = "/more" style={{textDecoration:"none"}}>
                <a href="#" className="read-more">Więcej</a>
                </Link>
            </article>
        </div>
        </div>
     
   </>
  );
};

export default Wyprawy;