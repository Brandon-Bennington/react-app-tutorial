import React, { Component } from 'react';

class Form extends Component {
    // constructors are initialized when Form is created (instantiated)
    // we set the initial state of our form and save it to state.
    constructor(props){
        super(props); //inheriting props from Component
        
        //set the initial state of the Form
        this.initialState = {
            name: '',
            job: ''
        };
        
        //set our initial state to state
        this.state = this.initialState;
    }
    
    handleChange = event => {
        //get name, value out of target (element that changed)
        const{ name, value } = event.target;

        //update our state
        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        //standard code for onSubmits
        event.preventDefault();
        
        //set the current state of our form to the handle submit
        this.props.addCharacter(this.state);

        //clear inputs by setting 
        this.setState(this.initialState);
    }

    render() {
        //hook in data from state
        const { name, job } = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Name:</label><br/>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    /><br/>
                <label for="job">Job:</label><br/>
                <input 
                    type="text" 
                    id="job" 
                    name="job"
                    value={job}
                    onChange={this.handleChange}
                    />
                <button type="submit">
                    Submit
                </button>
            </form>
    )
    }
}

export default Form