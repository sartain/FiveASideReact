import React from 'react';
import playerList from './playerList.json'
import PlayerSelectionRow from './PlayerSelectionRow';
class PlayerSelection extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    };
    handleChange(price, position, name){
        this.props.updateMoney(price, position, name);
    }
    render() {
        return (
            <div>
            {playerList.map(emojiData => (
                <PlayerSelectionRow
                  name={emojiData.name}
                  position={emojiData.position}
                  price={emojiData.price}
                  handleClick={() => this.handleChange(emojiData.price, emojiData.position, emojiData.name)}
                />
            ))}
            </div>
        );
    }
}
export default PlayerSelection