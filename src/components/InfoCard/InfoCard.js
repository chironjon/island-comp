import React from 'react';
import './InfoCard.css';
function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}
const InfoCard = ({ critter, type }) => (
<div className="listItem">
	<div className="card">
	  <h1 className="name">{capital_letter(critter["Name"])}</h1>
    <div className="namePic">
      <img className="critterImg" src={`https://acnhcdn.com/latest/MenuIcon/${critter["Icon Filename"]}.png`}/>
    </div>
    <div className="spawnInfo">
			<p>TIME</p>
      <p>{critter["Where/How"]}</p>
      <p>{critter["Weather"]}</p>
    	<p>{critter["Shadow"]}</p>
			<p>{critter["Spawn Rates"]} spwnRate</p>
    </div>
		<div className="weatherMonths">
      <div className="hemispheres">
      	<div>
	      	<p>North Hemisphere</p>
	      </div>
	      <div className="monthLetter">
		      <p className={`${critter["NH Jan"] != "NA" ? "avail" : ""}`}>J</p>
		      <p className={`${critter["NH Feb"] != "NA" ? "avail" : ""}`}>F</p>
		      <p className={`${critter["NH Mar"] != "NA" ? "avail" : ""}`}>M</p>
		      <p className={`${critter["NH Apr"] != "NA" ? "avail" : ""}`}>A</p>
		      <p className={`${critter["NH May"] != "NA" ? "avail" : ""}`}>M</p>
		      <p className={`${critter["NH Jun"] != "NA" ? "avail" : ""}`}>J</p>
		      <p className={`${critter["NH Jul"] != "NA" ? "avail" : ""}`}>J</p>
		      <p className={`${critter["NH Aug"] != "NA" ? "avail" : ""}`}>A</p>
		      <p className={`${critter["NH Sep"] != "NA" ? "avail" : ""}`}>S</p>
		      <p className={`${critter["NH Oct"] != "NA" ? "avail" : ""}`}>O</p>
		      <p className={`${critter["NH Nov"] != "NA" ? "avail" : ""}`}>N</p>
		      <p className={`${critter["NH Dec"] != "NA" ? "avail" : ""}`}>D</p>
	      </div>
      </div>
    </div>    
    <div className="price">
      <h1>{critter["Sell"]}x</h1>
      <img className="priceImg" src="https://acnhcdn.com/latest/MenuIcon/MoneyBag069.png"/>
    </div>
    <div className="furnSize">
    	<p>Furn. Size: {critter["Size"]}</p>
    </div>
  </div>
</div>
)

export default InfoCard;