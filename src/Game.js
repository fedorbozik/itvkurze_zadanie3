import React from 'react';
import './App.css';
import Board from './Board';


class ShowName extends React.Component {
    render() {
        const meno = this.props.name;

        return (
            <div /*style={{width: "100%"}}*/ className="showname">
                <h2>Name: {meno}</h2>
            </div>
        );
    }
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        /*return <ShowName name={this.state.value}/>;*/
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    /*showName() {
        return <ShowName name={this.state.value}/>;
    }*/

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <ShowName name={this.state.value}/>
            </div>
        );
    }
}


class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <NameForm />
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}


export default Game;
