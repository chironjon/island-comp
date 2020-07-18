import React from 'react';
import './InfoCard.scss';
function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

const InfoCard = ({ critter, hemi }) => (
<div className="listItem">
	<div className="card">
	   <div className="type">
    	<p>{critter["Type"]/* === "insect" ? <img className="typeImg" src={`https://acnhcdn.com/latest/FtrIcon/ToolNetPattern_Remake_7_0.png`} alt="typeimg"/>: <p></p>*/}</p>
    </div>
	  <h1 className="name">{capital_letter(critter["Name"])}</h1>
    <div className="namePic">
      <img className="critterImg" src={`https://acnhcdn.com/latest/MenuIcon/${critter["Icon Filename"]}.png`} alt="critImg"/>
    </div>
    <div className="spawnInfo">
			<p>{critter["Time"]}</p>
      <p>{critter["Where/How"]}</p>
      <p>{critter["Weather"]}</p>
    	<p>{critter["Shadow"]}</p>
    	<p>{critter["Movement Speed"]}</p>
			<p>{critter["Spawn Rates"]} spwnRate</p>
    </div>
		<div className="weatherMonths">
      <div className="hemispheres">
		      { hemi === "NH"
		    ? <div>
			      <p>North Hemisphere</p>
			      <div className="monthLetter">
				      <p className={`${critter["NH Jan"] !== "NA" ? "avail" : ""}`}>Jan</p>
				      <p className={`${critter["NH Feb"] !== "NA" ? "avail" : ""}`}>Feb</p>
				      <p className={`${critter["NH Mar"] !== "NA" ? "avail" : ""}`}>Mar</p>
				      <p className={`${critter["NH Apr"] !== "NA" ? "avail" : ""}`}>Apr</p>
				      <p className={`${critter["NH May"] !== "NA" ? "avail" : ""}`}>May</p>
				      <p className={`${critter["NH Jun"] !== "NA" ? "avail" : ""}`}>Jun</p>
				      <p className={`${critter["NH Jul"] !== "NA" ? "avail" : ""}`}>Jul</p>
				      <p className={`${critter["NH Aug"] !== "NA" ? "avail" : ""}`}>Aug</p>
				      <p className={`${critter["NH Sep"] !== "NA" ? "avail" : ""}`}>Sep</p>
				      <p className={`${critter["NH Oct"] !== "NA" ? "avail" : ""}`}>Oct</p>
				      <p className={`${critter["NH Nov"] !== "NA" ? "avail" : ""}`}>Nov</p>
				      <p className={`${critter["NH Dec"] !== "NA" ? "avail" : ""}`}>Dec</p>
			      </div>
			     </div>
			    : hemi === "SH" &&
		      <div>
			      <p>South Hemisphere</p>
			      <div className="monthLetter">
				      <p className={`${critter["SH Jan"] !== "NA" ? "avail" : ""}`}>Jan</p>
				      <p className={`${critter["SH Feb"] !== "NA" ? "avail" : ""}`}>Feb</p>
				      <p className={`${critter["SH Mar"] !== "NA" ? "avail" : ""}`}>Mar</p>
				      <p className={`${critter["SH Apr"] !== "NA" ? "avail" : ""}`}>Apr</p>
				      <p className={`${critter["SH May"] !== "NA" ? "avail" : ""}`}>May</p>
				      <p className={`${critter["SH Jun"] !== "NA" ? "avail" : ""}`}>Jun</p>
				      <p className={`${critter["SH Jul"] !== "NA" ? "avail" : ""}`}>Jul</p>
				      <p className={`${critter["SH Aug"] !== "NA" ? "avail" : ""}`}>Aug</p>
				      <p className={`${critter["SH Sep"] !== "NA" ? "avail" : ""}`}>Sep</p>
				      <p className={`${critter["SH Oct"] !== "NA" ? "avail" : ""}`}>Oct</p>
				      <p className={`${critter["SH Nov"] !== "NA" ? "avail" : ""}`}>Nov</p>
				      <p className={`${critter["SH Dec"] !== "NA" ? "avail" : ""}`}>Dec</p>
			      </div>
			     </div>
			    }
      </div>
    </div>    
    <div className="price">
      <img className="priceImg" src="https://acnhcdn.com/latest/MenuIcon/MoneyBag069.png" alt="bellBag"/>
    	<h1>x{critter["Sell"]}</h1>
    </div>
    <div className="furnInfo">
    	<p>Furn. Size: {critter["Size"]}</p>
    	<p>Surface Space: {critter["Surface"]}</p>
    </div>
  </div>
</div>
)

export default InfoCard;