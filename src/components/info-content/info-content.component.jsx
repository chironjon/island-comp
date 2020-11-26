import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentInfoItem } from '../../redux/info/info.selectors';

import './info-content.styles.scss';
import { selectHemi } from '../../redux/input/input.selectors';

function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

const InfoContent = ({currentInfoItem, hemi}) => {
	//(currentInfoItem)
	return(
	<div className="item-info-content">
		<div className="card">
			<div className="type">
				<p>{currentInfoItem.item["Type"]}</p>
			</div>
			<div className="item-name-container">
			<p>{capital_letter(currentInfoItem.item["Name"])}</p>
			</div>
			<div className="namePic">
				<img className="critterImg" src={`https://acnhcdn.com/latest/MenuIcon/${currentInfoItem.item["Icon Filename"]}.png`} alt="critImg"/>
			</div>
			<div className="spawnInfo">
				<p>{currentInfoItem.currentItemCurrentMonthAvail}</p>
				<p>{currentInfoItem.item["Where/How"]}</p>
				<p>{currentInfoItem.item["Weather"]}</p>
				<p>{currentInfoItem.item["Shadow"]}</p>
				<p>{currentInfoItem.item["Movement Speed"]}</p>
				<p>{currentInfoItem.item["Spawn Rates"]} spwnRate</p>
			</div>
			<div className="weatherMonths">
				<div className="hemispheres">
					{ hemi === "NH"
					? <div>
							<p>North Hemisphere</p>
							<div className="monthLetter">
								<p className={`${currentInfoItem.item["NH Jan"] !== "NA" ? "avail" : ""}`}>Jan</p>
								<p className={`${currentInfoItem.item["NH Feb"] !== "NA" ? "avail" : ""}`}>Feb</p>
								<p className={`${currentInfoItem.item["NH Mar"] !== "NA" ? "avail" : ""}`}>Mar</p>
								<p className={`${currentInfoItem.item["NH Apr"] !== "NA" ? "avail" : ""}`}>Apr</p>
								<p className={`${currentInfoItem.item["NH May"] !== "NA" ? "avail" : ""}`}>May</p>
								<p className={`${currentInfoItem.item["NH Jun"] !== "NA" ? "avail" : ""}`}>Jun</p>
								<p className={`${currentInfoItem.item["NH Jul"] !== "NA" ? "avail" : ""}`}>Jul</p>
								<p className={`${currentInfoItem.item["NH Aug"] !== "NA" ? "avail" : ""}`}>Aug</p>
								<p className={`${currentInfoItem.item["NH Sep"] !== "NA" ? "avail" : ""}`}>Sep</p>
								<p className={`${currentInfoItem.item["NH Oct"] !== "NA" ? "avail" : ""}`}>Oct</p>
								<p className={`${currentInfoItem.item["NH Nov"] !== "NA" ? "avail" : ""}`}>Nov</p>
								<p className={`${currentInfoItem.item["NH Dec"] !== "NA" ? "avail" : ""}`}>Dec</p>
							</div>
						</div>
					: hemi === "SH" &&
						<div>
							<p>South Hemisphere</p>
							<div className="monthLetter">
								<p className={`${currentInfoItem.item["SH Jan"] !== "NA" ? "avail" : ""}`}>Jan</p>
								<p className={`${currentInfoItem.item["SH Feb"] !== "NA" ? "avail" : ""}`}>Feb</p>
								<p className={`${currentInfoItem.item["SH Mar"] !== "NA" ? "avail" : ""}`}>Mar</p>
								<p className={`${currentInfoItem.item["SH Apr"] !== "NA" ? "avail" : ""}`}>Apr</p>
								<p className={`${currentInfoItem.item["SH May"] !== "NA" ? "avail" : ""}`}>May</p>
								<p className={`${currentInfoItem.item["SH Jun"] !== "NA" ? "avail" : ""}`}>Jun</p>
								<p className={`${currentInfoItem.item["SH Jul"] !== "NA" ? "avail" : ""}`}>Jul</p>
								<p className={`${currentInfoItem.item["SH Aug"] !== "NA" ? "avail" : ""}`}>Aug</p>
								<p className={`${currentInfoItem.item["SH Sep"] !== "NA" ? "avail" : ""}`}>Sep</p>
								<p className={`${currentInfoItem.item["SH Oct"] !== "NA" ? "avail" : ""}`}>Oct</p>
								<p className={`${currentInfoItem.item["SH Nov"] !== "NA" ? "avail" : ""}`}>Nov</p>
								<p className={`${currentInfoItem.item["SH Dec"] !== "NA" ? "avail" : ""}`}>Dec</p>
							</div>
						</div>
					}
				</div>
			</div>    
			<div className="item-price">
				<img className="item-price-img" src="https://acnhcdn.com/latest/MenuIcon/MoneyBag069.png" alt="bellBag"/>
				<h1>x{currentInfoItem.item["Sell"]}</h1>
			</div>
			<div className="furnInfo">
				<p>Furn. Size: {currentInfoItem.item["Size"]}</p>
				<p>Surface Space: {currentInfoItem.item["Surface"]}</p>
			</div>
		</div>
	</div>
)}

const mapStateToProps = createStructuredSelector({
	currentInfoItem: selectCurrentInfoItem,
	hemi: selectHemi
})

export default connect(mapStateToProps)(InfoContent);