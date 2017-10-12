import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var inputs = {
  send: {
    name: "Billy Something",
    address: "123 Main Street",
    city: "Miami, FL"
  },
  receive: {
    name: "Bili Something",
    address: "321 Side Street",
    city: "Norfolk, VA"
  },
  stamp: "http://www.stamp-collecting-resource.com/images/us-postage-stamp-price-eagle.jpg"
}

//stamp urls:
  //http://www.usphila.com/stamps/us/122/price-of-us-stamp-scott-122-1869-90-cents-pictorial-lincoln-siegel-1107-248.jpg
  //https://i.pinimg.com/736x/1c/b5/7c/1cb57ca2b9af52d483e284b9a65480eb--moon-landing-passport-stamps.jpg
  //http://www.stamp-collecting-resource.com/images/us-postage-stamp-price-eagle.jpg

function FromPerson({sender}) {
  const {name, address, city} = sender;
  return (
    <div className="send">
      <div>{name}</div>
      <div>{address}</div>
      <div>{city}</div>
    </div>
  )
}

function ToPerson({recipient}) {
  const {name, address, city} = recipient;
  return (
    <div className="receive">
      <div>{name}</div>
      <div>{address}</div>
      <div>{city}</div>
    </div>
  )
}

function Stamp({stamp}) {
  return (
    <div className="stamp-section">
      <img src={stamp} className="stamp" alt="stamp" />
    </div>
  )
}

function Envelope({input}) {
  return (
    <div className="envelope">
      <FromPerson sender={input.send} />
      <ToPerson recipient={input.receive} />
      <Stamp stamp={input.stamp} />
    </div>
  )
}
ReactDOM.render(<Envelope input={inputs}/>, document.getElementById('root'));
