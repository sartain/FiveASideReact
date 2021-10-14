import React from "react";
import "./PlayerSelectionRow.css"
export default class PlayerSelectionRow extends React.Component {
    handleChange(playerPrice){
        this.props.handleClick(playerPrice);
    }
  render() {
    const playerName = this.props.name;
    const playerPosition = this.props.position;
    const playerPrice = this.props.price;
    return (
      <div className = "component-player-selection-row"
      onClick= {() => this.handleChange(playerPrice)}
      >
        <span className="name">{playerName}</span>
        <span className="position">{playerPosition}</span>
        <span className="price">£{playerPrice}M</span>
      </div>
    );
  }
}