import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentInfoItem } from '../../redux/info/info.selectors';

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
	
	return(
	<div className="item-info-content">
		<div className="card">
			<div className="type">
				<p>{currentInfoItem["Type"]}</p>
			</div>
			<div className="item-name-container">
			<p>{capital_letter(currentInfoItem["Name"])}</p>
			</div>
			<div className="namePic">
				<img className="critterImg" src={`https://acnhcdn.com/latest/MenuIcon/${currentInfoItem["Icon Filename"]}.png`} alt="critImg"/>
			</div>
			<div className="spawnInfo">
				<p>{currentInfoItem["Time"]}</p>
				<p>{currentInfoItem["Where/How"]}</p>
				<p>{currentInfoItem["Weather"]}</p>
				<p>{currentInfoItem["Shadow"]}</p>
				<p>{currentInfoItem["Movement Speed"]}</p>
				<p>{currentInfoItem["Spawn Rates"]} spwnRate</p>
			</div>
			<div className="weatherMonths">
				<div className="hemispheres">
					{ hemi === "NH"
					? <div>
							<p>North Hemisphere</p>
							<div className="monthLetter">
								<p className={`${currentInfoItem["NH Jan"] !== "NA" ? "avail" : ""}`}>Jan</p>
								<p className={`${currentInfoItem["NH Feb"] !== "NA" ? "avail" : ""}`}>Feb</p>
								<p className={`${currentInfoItem["NH Mar"] !== "NA" ? "avail" : ""}`}>Mar</p>
								<p className={`${currentInfoItem["NH Apr"] !== "NA" ? "avail" : ""}`}>Apr</p>
								<p className={`${currentInfoItem["NH May"] !== "NA" ? "avail" : ""}`}>May</p>
								<p className={`${currentInfoItem["NH Jun"] !== "NA" ? "avail" : ""}`}>Jun</p>
								<p className={`${currentInfoItem["NH Jul"] !== "NA" ? "avail" : ""}`}>Jul</p>
								<p className={`${currentInfoItem["NH Aug"] !== "NA" ? "avail" : ""}`}>Aug</p>
								<p className={`${currentInfoItem["NH Sep"] !== "NA" ? "avail" : ""}`}>Sep</p>
								<p className={`${currentInfoItem["NH Oct"] !== "NA" ? "avail" : ""}`}>Oct</p>
								<p className={`${currentInfoItem["NH Nov"] !== "NA" ? "avail" : ""}`}>Nov</p>
								<p className={`${currentInfoItem["NH Dec"] !== "NA" ? "avail" : ""}`}>Dec</p>
							</div>
						</div>
					: hemi === "SH" &&
						<div>
							<p>South Hemisphere</p>
							<div className="monthLetter">
								<p className={`${currentInfoItem["SH Jan"] !== "NA" ? "avail" : ""}`}>Jan</p>
								<p className={`${currentInfoItem["SH Feb"] !== "NA" ? "avail" : ""}`}>Feb</p>
								<p className={`${currentInfoItem["SH Mar"] !== "NA" ? "avail" : ""}`}>Mar</p>
								<p className={`${currentInfoItem["SH Apr"] !== "NA" ? "avail" : ""}`}>Apr</p>
								<p className={`${currentInfoItem["SH May"] !== "NA" ? "avail" : ""}`}>May</p>
								<p className={`${currentInfoItem["SH Jun"] !== "NA" ? "avail" : ""}`}>Jun</p>
								<p className={`${currentInfoItem["SH Jul"] !== "NA" ? "avail" : ""}`}>Jul</p>
								<p className={`${currentInfoItem["SH Aug"] !== "NA" ? "avail" : ""}`}>Aug</p>
								<p className={`${currentInfoItem["SH Sep"] !== "NA" ? "avail" : ""}`}>Sep</p>
								<p className={`${currentInfoItem["SH Oct"] !== "NA" ? "avail" : ""}`}>Oct</p>
								<p className={`${currentInfoItem["SH Nov"] !== "NA" ? "avail" : ""}`}>Nov</p>
								<p className={`${currentInfoItem["SH Dec"] !== "NA" ? "avail" : ""}`}>Dec</p>
							</div>
						</div>
					}
				</div>
			</div>    
			<div className="item-price">
				<img className="item-price-img" src="https://acnhcdn.com/latest/MenuIcon/MoneyBag069.png" alt="bellBag"/>
				<h1>x{currentInfoItem["Sell"]}</h1>
			</div>
			<div className="furnInfo">
				<p>Furn. Size: {currentInfoItem["Size"]}</p>
				<p>Surface Space: {currentInfoItem["Surface"]}</p>
			</div>
		</div>
	</div>
)}

const mapStateToProps = createStructuredSelector({
	currentInfoItem: selectCurrentInfoItem
})

export default connect(mapStateToProps)(InfoContent);