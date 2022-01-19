import React from 'react';
import './css/Gift.css';
class SingleGift extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const gift =  this.props.gift;
    return (
      <div className="col mainContainer " >
        <div className="image row">
          <img src={gift.images.original.url} alt="Single image" className="img"/>
        </div>
        <div className="description row">
          Title: {gift.title}<br />
          Size:   {gift.images.original.size}<br />
          Width:  {gift.images.original.width}<br />
          height: {gift.images.original.height}
        </div>
      </div>
    );
  }
}

export default SingleGift;