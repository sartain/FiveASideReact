import './App.css';
import React from 'react';

//We want the app to hold a placeholder team
//App (All)
//

class MoneyHeader extends React.Component {
  
 render() {
    return (
      <h1>Money: £{this.props.money}M</h1>
    );
  }
}
export default MoneyHeader