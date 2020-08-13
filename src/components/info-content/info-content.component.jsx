import React from 'react';
import { connect } from 'react-redux';

import './info-content.styles.scss';

function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

const InfoContent = ({currentInfoItem, hemi}) => {
	hemi = "NH";
	console.log(currentInfoItem, hemi)
	return(
	<div className="item-info-content">
		<div className="card">
			<div className="type">
				<p>{currentInfoItem[0]["Type"]/* === "insect" ? <img className="typeImg" src={`https://acnhcdn.com/latest/FtrIcon/ToolNetPattern_Remake_7_0.png`} alt="typeimg"/>: <p></p>*/}</p>
			</div>
			<div className="item-name-container">
			<p>{capital_letter(currentInfoItem[0]["Name"])}</p>
			</div>
			<div className="namePic">
				<img className="critterImg" src={`https://acnhcdn.com/latest/MenuIcon/${currentInfoItem[0]["Icon Filename"]}.png`} alt="critImg"/>
			</div>
			<div className="spawnInfo">
				<p>{currentInfoItem[0]["Time"]}</p>
				<p>{currentInfoItem[0]["Where/How"]}</p>
				<p>{currentInfoItem[0]["Weather"]}</p>
				<p>{currentInfoItem[0]["Shadow"]}</p>
				<p>{currentInfoItem[0]["Movement Speed"]}</p>
				<p>{currentInfoItem[0]["Spawn Rates"]} spwnRate</p>
			</div>
			<div className="weatherMonths">
				<div className="hemispheres">
					{ hemi === "NH"
					? <div>
							<p>North Hemisphere</p>
							<div className="monthLetter">
								<p className={`${currentInfoItem[0]["NH Jan"] !== "NA" ? "avail" : ""}`}>Jan</p>
								<p className={`${currentInfoItem[0]["NH Feb"] !== "NA" ? "avail" : ""}`}>Feb</p>
								<p className={`${currentInfoItem[0]["NH Mar"] !== "NA" ? "avail" : ""}`}>Mar</p>
								<p className={`${currentInfoItem[0]["NH Apr"] !== "NA" ? "avail" : ""}`}>Apr</p>
								<p className={`${currentInfoItem[0]["NH May"] !== "NA" ? "avail" : ""}`}>May</p>
								<p className={`${currentInfoItem[0]["NH Jun"] !== "NA" ? "avail" : ""}`}>Jun</p>
								<p className={`${currentInfoItem[0]["NH Jul"] !== "NA" ? "avail" : ""}`}>Jul</p>
								<p className={`${currentInfoItem[0]["NH Aug"] !== "NA" ? "avail" : ""}`}>Aug</p>
								<p className={`${currentInfoItem[0]["NH Sep"] !== "NA" ? "avail" : ""}`}>Sep</p>
								<p className={`${currentInfoItem[0]["NH Oct"] !== "NA" ? "avail" : ""}`}>Oct</p>
								<p className={`${currentInfoItem[0]["NH Nov"] !== "NA" ? "avail" : ""}`}>Nov</p>
								<p className={`${currentInfoItem[0]["NH Dec"] !== "NA" ? "avail" : ""}`}>Dec</p>
							</div>
						</div>
					: hemi === "SH" &&
						<div>
							<p>South Hemisphere</p>
							<div className="monthLetter">
								<p className={`${currentInfoItem[0]["SH Jan"] !== "NA" ? "avail" : ""}`}>Jan</p>
								<p className={`${currentInfoItem[0]["SH Feb"] !== "NA" ? "avail" : ""}`}>Feb</p>
								<p className={`${currentInfoItem[0]["SH Mar"] !== "NA" ? "avail" : ""}`}>Mar</p>
								<p className={`${currentInfoItem[0]["SH Apr"] !== "NA" ? "avail" : ""}`}>Apr</p>
								<p className={`${currentInfoItem[0]["SH May"] !== "NA" ? "avail" : ""}`}>May</p>
								<p className={`${currentInfoItem[0]["SH Jun"] !== "NA" ? "avail" : ""}`}>Jun</p>
								<p className={`${currentInfoItem[0]["SH Jul"] !== "NA" ? "avail" : ""}`}>Jul</p>
								<p className={`${currentInfoItem[0]["SH Aug"] !== "NA" ? "avail" : ""}`}>Aug</p>
								<p className={`${currentInfoItem[0]["SH Sep"] !== "NA" ? "avail" : ""}`}>Sep</p>
								<p className={`${currentInfoItem[0]["SH Oct"] !== "NA" ? "avail" : ""}`}>Oct</p>
								<p className={`${currentInfoItem[0]["SH Nov"] !== "NA" ? "avail" : ""}`}>Nov</p>
								<p className={`${currentInfoItem[0]["SH Dec"] !== "NA" ? "avail" : ""}`}>Dec</p>
							</div>
						</div>
					}
				</div>
			</div>    
			<div className="item-price">
				<img className="item-price-img" src="https://acnhcdn.com/latest/MenuIcon/MoneyBag069.png" alt="bellBag"/>
				<h1>x{currentInfoItem[0]["Sell"]}</h1>
			</div>
			<div className="furnInfo">
				<p>Furn. Size: {currentInfoItem[0]["Size"]}</p>
				<p>Surface Space: {currentInfoItem[0]["Surface"]}</p>
			</div>
		</div>
	</div>
)}

const mapStateToProps = ({ info: { currentInfoItem }}) => ({
  currentInfoItem
})

export default connect(mapStateToProps)(InfoContent);