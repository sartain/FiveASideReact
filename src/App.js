import React from 'react';
import SelectedTeam from './SelectedTeam';
import PlayerSelection from './PlayerSelection';
import SelectedPlayer from './SelectedPlayer';
//We want the app to hold a placeholder team
//App (All)
//

function canAffordPlayer(existingPlayerPrice, playerPrice, money) {
  var totalMoney = existingPlayerPrice + money;
  if(playerPrice <= totalMoney){
    return true;
  }
  return false;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      money: 10,
      players: [
        <SelectedPlayer position = {"gk"} name = {"Pick a goalkeeper"} price = {0}/>,
        <SelectedPlayer position = {"def"} name = {"Pick a defender"} price = {0}/>,
        <SelectedPlayer position = {"mid"} name = {"Pick a midfielder (option 1)"} price = {0}/>,
        <SelectedPlayer position = {"mid2"} name = {"Pick a midfielder (option 2)"} price = {0}/>,
        <SelectedPlayer position = {"for"} name = {"Pick a forward"} price = {0}/>,
    ]
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  };

  updatePlayersSelected(playerToAddPrice, playerToAddPosition, playerToAddName){
    //Index corresponds to position 
    //Sort out interesting part when midfielder (seleciting 2)
    //Update state w/new money etc only when purchase made
    var playerList = this.state.players;
    var playersIndex = 0;
    var existingPlayerPrice = 0;
    var canBuy = false;
    switch(playerToAddPosition){
      case("gk"):
        playersIndex = 0;
        break;
      case("def"):
        playersIndex = 1;
        break;
      case("mid1"):
        playersIndex = 2;
        break;
      case("mid2"):
        playersIndex = 3;
        break;
      case("for"):
        playersIndex = 4;
        break;
      default:
        break;
    }
    existingPlayerPrice = parseInt(playerList[playersIndex].props.price);
    canBuy = canAffordPlayer(existingPlayerPrice, playerToAddPrice, this.state.money);
    if(canBuy){
      playerList[playersIndex] = <SelectedPlayer position = {playerToAddPosition} name = {playerToAddName} price = {playerToAddPrice}/>
      const newMoney = (this.state.money + existingPlayerPrice) - playerToAddPrice;
      this.setState({
        money: newMoney,
        players: playerList
      });
    }
  }

  handleSearchChange (price, position, name) {
    this.updatePlayersSelected(price, position, name);
}
  
 render() {
    return (
      <div className="App">
        <SelectedTeam money = {this.state.money} players = {this.state.players}/>
        <PlayerSelection updateMoney={this.handleSearchChange}/>
      </div>
    );
  }
}
/*
        <SelectedTeam/>
        <PlayerSelection/>
        */