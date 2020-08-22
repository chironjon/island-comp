import React from 'react';

import './info-content.styles.scss';

function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

const InfoContent = ({currentItem, hemi}) => {
	
	return(
	<div className="item-info-content">
		<div className="card">
			<div className="type">
				<p>{currentItem["Type"]}</p>
			</div>
			<div className="item-name-container">
			<p>{capital_letter(currentItem["Name"])}</p>
			</div>
			<div className="namePic">
				<img className="critterImg" src={`https://acnhcdn.com/latest/MenuIcon/${currentItem["Icon Filename"]}.png`} alt="critImg"/>
			</div>
			<div className="spawnInfo">
				<p>{currentItem["Time"]}</p>
				<p>{currentItem["Where/How"]}</p>
				<p>{currentItem["Weather"]}</p>
				<p>{currentItem["Shadow"]}</p>
				<p>{currentItem["Movement Speed"]}</p>
				<p>{currentItem["Spawn Rates"]} spwnRate</p>
			</div>
			<div className="weatherMonths">
				<div className="hemispheres">
					{ hemi === "NH"
					? <div>
							<p>North Hemisphere</p>
							<div className="monthLetter">
								<p className={`${currentItem["NH Jan"] !== "NA" ? "avail" : ""}`}>Jan</p>
								<p className={`${currentItem["NH Feb"] !== "NA" ? "avail" : ""}`}>Feb</p>
								<p className={`${currentItem["NH Mar"] !== "NA" ? "avail" : ""}`}>Mar</p>
								<p className={`${currentItem["NH Apr"] !== "NA" ? "avail" : ""}`}>Apr</p>
								<p className={`${currentItem["NH May"] !== "NA" ? "avail" : ""}`}>May</p>
								<p className={`${currentItem["NH Jun"] !== "NA" ? "avail" : ""}`}>Jun</p>
								<p className={`${currentItem["NH Jul"] !== "NA" ? "avail" : ""}`}>Jul</p>
								<p className={`${currentItem["NH Aug"] !== "NA" ? "avail" : ""}`}>Aug</p>
								<p className={`${currentItem["NH Sep"] !== "NA" ? "avail" : ""}`}>Sep</p>
								<p className={`${currentItem["NH Oct"] !== "NA" ? "avail" : ""}`}>Oct</p>
								<p className={`${currentItem["NH Nov"] !== "NA" ? "avail" : ""}`}>Nov</p>
								<p className={`${currentItem["NH Dec"] !== "NA" ? "avail" : ""}`}>Dec</p>
							</div>
						</div>
					: hemi === "SH" &&
						<div>
							<p>South Hemisphere</p>
							<div className="monthLetter">
								<p className={`${currentItem["SH Jan"] !== "NA" ? "avail" : ""}`}>Jan</p>
								<p className={`${currentItem["SH Feb"] !== "NA" ? "avail" : ""}`}>Feb</p>
								<p className={`${currentItem["SH Mar"] !== "NA" ? "avail" : ""}`}>Mar</p>
								<p className={`${currentItem["SH Apr"] !== "NA" ? "avail" : ""}`}>Apr</p>
								<p className={`${currentItem["SH May"] !== "NA" ? "avail" : ""}`}>May</p>
								<p className={`${currentItem["SH Jun"] !== "NA" ? "avail" : ""}`}>Jun</p>
								<p className={`${currentItem["SH Jul"] !== "NA" ? "avail" : ""}`}>Jul</p>
								<p className={`${currentItem["SH Aug"] !== "NA" ? "avail" : ""}`}>Aug</p>
								<p className={`${currentItem["SH Sep"] !== "NA" ? "avail" : ""}`}>Sep</p>
								<p className={`${currentItem["SH Oct"] !== "NA" ? "avail" : ""}`}>Oct</p>
								<p className={`${currentItem["SH Nov"] !== "NA" ? "avail" : ""}`}>Nov</p>
								<p className={`${currentItem["SH Dec"] !== "NA" ? "avail" : ""}`}>Dec</p>
							</div>
						</div>
					}
				</div>
			</div>    
			<div className="item-price">
				<img className="item-price-img" src="https://acnhcdn.com/latest/MenuIcon/MoneyBag069.png" alt="bellBag"/>
				<h1>x{currentItem["Sell"]}</h1>
			</div>
			<div className="furnInfo">
				<p>Furn. Size: {currentItem["Size"]}</p>
				<p>Surface Space: {currentItem["Surface"]}</p>
			</div>
		</div>
	</div>
)}



export default InfoContent;