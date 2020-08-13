import React from 'react';
import { connect } from 'react-redux';
import Emoji from '../emoji/emoji.component';


import { toggleInfoHidden, addItemInfo } from '../../redux/info/info.actions';

import './collection-item.styles.scss';

function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

const CollectionItem = ({item, toggleInfoHidden, addItemInfo}) => {
  
  return (
  <div className='collection-item' >
  <div className='info-mark' onClick={() => {toggleInfoHidden(); addItemInfo(item);}}><Emoji symbol={"?"} /></div>
      <div key={item["Unique Entry ID"]} className='item-card'>
      <span className='name'>{capital_letter(item["Name"])}</span>
    {(() => { 
        switch(item["Type"]) {
          case 'insect':
            return (
              <div className='item-card'>
                <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/${item["Icon Filename"]}.png)`}}/>
                <div className='collection-footer'>
                  <span className='time'>{item["Time"]}</span>
                  <span className='price'>{item["Sell"]}</span>
                </div>
              </div>
            );
          case 'fish':
            return (
              <div className='item-card'>
                <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/${item["Icon Filename"]}.png)`}}/>
                <div className='collection-footer'>
                  <span className='time'>{item["Time"]}</span>
                  <span className='price'>{item["Sell"]}</span>
                </div>
              </div>
            );
          case 'sea':
            return (
              <div className='item-card'>
                <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/${item["Icon Filename"]}.png)`}}/>
                <div className='collection-footer'>
                  <span className='time'>{item["Time"]}</span>
                  <span className='price'>{item["Sell"]}</span>
                </div>
              </div>
            );
          case 'art':
            return (
              <div className='item-card'>
                <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/FtrIcon/${item["Filename"]}.png)`}}/>
                <div className='collection-footer'>
                  <span className='name'>{item["Name"]}</span>
                  <span className='genuine'>{item["Genuine"]}</span>
                </div>
              </div>
            );
          case 'fossil':
            return (
              <div className='item-card'>
                <div className='image' style={{backgroundImage: `url(https://acnhcdn.com/latest/FtrIcon/${item["Filename"]}.png)`}}/>
                <div className='collection-footer'>
                  <span className='name'>{item["Name"]}</span>
                  <span className='price'>{item["Sell"]}</span>
                </div>
              </div>
            );
          default:
            return (
              <div>{item["Unique Entry ID"]}</div>
            )
        }
      })()}
      <div className='found'><Emoji symbol={"✔"} /></div>
      </div>
  </div>
)};
    
const mapDispatchToProps = dispatch => ({
  toggleInfoHidden: () => dispatch(toggleInfoHidden()),
  addItemInfo: item => dispatch(addItemInfo(item))
})

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);