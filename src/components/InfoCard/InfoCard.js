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
const InfoCard = (props) => (
<div className="listItem">
	<div className="card">
    <div className="img">
      <img src={`https://acnhcdn.com/latest/MenuIcon/${props.critter["Icon Filename"]}.png`}/>
    </div>
    <div className="furnSize">
    	<p>Furn. Size: {props.critter["Size"]}</p>
    </div>
    <div className="nameInfo">
      <h1>{capital_letter(props.critter["Name"])}</h1>
      <p>{props.critter["Where/How"]}</p>
      <p>{props.critter["Weather"]}</p>
    </div>
    <div className="weatherMonths">
      <div className="hemispheres">
      	<div>
	      	<p>North Hemisphere</p>
	      </div>
	      <div className="monthLetter">
		      <p>J</p>
		      <p>F</p>
		      <p>M</p>
		      <p>A</p>
		      <p>M</p>
		      <p>J</p>
		      <p>J</p>
		      <p>A</p>
		      <p>S</p>
		      <p>O</p>
		      <p>N</p>
		      <p>D</p>
	      </div>
	      {/*<p>SH</p>
	      <div className="monthLetter">
		      <p>J</p>
		      <p>F</p>
		      <p>M</p>
		      <p>A</p>
		      <p>M</p>
		      <p>J</p>
		      <p>J</p>
		      <p>A</p>
		      <p>S</p>
		      <p>O</p>
		      <p>N</p>
		      <p>D</p>
	      </div>*/}
      </div>
    </div>
    <div className="spawnInfo">
      <p>{props.critter["Shadow"]} Shdw</p>
    	<p>{props.critter["Spawn Rates"]} spwnRate</p>
    	<p>TIME</p>
    </div>
    <div className="price">
      <img className="priceImg" src="https://acnhcdn.com/latest/MenuIcon/MoneyBag069.png"/>
      <p>x{props.critter["Sell"]}</p>
    </div>
  </div>
</div>
)

export default InfoCard;