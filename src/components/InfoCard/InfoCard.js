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
	  <h1 className="name">{capital_letter(props.critter["Name"])}</h1>
    <div className="namePic">
      <img className="critterImg" src={`https://acnhcdn.com/latest/MenuIcon/${props.critter["Icon Filename"]}.png`}/>
    </div>
    <div className="spawnInfo">
			<p>TIME</p>
      <p>{props.critter["Where/How"]}</p>
      <p>{props.critter["Weather"]}</p>
    	<p>{props.critter["Shadow"]}</p>
			<p>{props.critter["Spawn Rates"]} spwnRate</p>
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
      </div>
    </div>    
    <div className="price">
      <h1>{props.critter["Sell"]}x</h1>
      <img className="priceImg" src="https://acnhcdn.com/latest/MenuIcon/MoneyBag069.png"/>
    </div>
    <div className="furnSize">
    	<p>Furn. Size: {props.critter["Size"]}</p>
    </div>
  </div>
</div>
)

export default InfoCard;