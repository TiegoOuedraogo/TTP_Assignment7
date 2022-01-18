import React from 'react';
import './css/Gift.css';
class SingleGift extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const gift =  this.props.gift
    // const url = "https://media4.giphy.com/media/4oLa6g7JBY1H2/giphy.gif?cid=203293aba8c0vensyu93rmucioi90qcdzo9au9qu4d9t1f9m&rid=giphy.gif&ct=g";
    // const title = "Kenan And Kel Reaction GIF";
    // const size = "695187";
    // const width = "480"
    // const height = "310"
    return (
      <div className="col mainContainer ">
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