import React from "react";
export default class SelectedPlayer extends React.Component {

  render() {
    const playerName = this.props.name;
    const playerPrice = this.props.price;
    var playerPosition = this.props.position;
    if(playerPosition === "mid1" || playerPosition === "mid2"){
      playerPosition = "mid"
    }
    return (
      <div>
        <span className="position">{playerPosition}: </span>
        <span className="name">{playerName} </span>
        <span className="name">(£{playerPrice}M)</span>
      </div>
    );
  }
}