import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            age: this.props.age
        }
    };
    incAge = () => {
        // this.setState({message: "Here is a birthday"});
        this.setState({ age: this.state.age + 1})
    };
    render() {
        return(
            <>
                {/* <h1>{this.state.message}</h1> */}
                <h1> {this.props.firstName} {this.props.lastName} </h1>
                <p> Age: {this.state.age} </p>
                <p> Hair color: {this.props.hair} </p>
                <button onClick={this.incAge}> Birthday button</button>
            </>
        )
    }
}

export default PersonCard;