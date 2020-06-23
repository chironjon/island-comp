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

			<div className='card-container'>
				<h2>{capital_letter(props.insect["Name"])}</h2>
				<p>Where: {props.insect["Where/How"]}</p>
				<p>Weather: {props.insect["Weather"]}</p>
				<p>Sell: {props.insect["Sell"]}</p>
			</div>

)

export default InfoCard;