import React from 'react';
import MoneyHeader from './MoneyHeader';
class SelectedTeam extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render(){
        return (
            <div>
            <MoneyHeader money = {this.props.money}/>
            {this.props.players.map(player => (
                <l1>{player}</l1>
            ))}
            </div>
        );
    }
}
export default SelectedTeam