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
    <div className="nameInfo">
      <p>Furn. Size: {props.critter["Size"]}</p>
      <h2>{capital_letter(props.critter["Name"])}</h2>
      <p>{props.critter["Where/How"]}</p>
      <p>{props.critter["Shadow"]}</p>
    </div>
    <div className="spawnInfo">
      <p>{props.critter["Spawn Rates"]}/{props.critter["Weather"]}</p>
      <p>TIME</p>
      <p>NH</p>
      <p>SH</p>
    </div>
    <div className="price">
      <img className="priceImg" src="https://acnhcdn.com/latest/MenuIcon/MoneyBag069.png"/>
      <p>x{props.critter["Sell"]}</p>
    </div>
  </div>
</div>
)

export default InfoCard;