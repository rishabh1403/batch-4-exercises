import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const addItem = (name) => {
    return {
        type: "ADD",
        data: {
            name,
            value: false,
        }
    }
}

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state.value);
        this.setState({
            value: "",
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="grocery-item">Add Item to list</label>
                <input value={this.state.value} onChange={this.handleChange} type="text" name="grocery-item" />

                <button type="submit" >Add Item</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    addItem
}

export default connect(null, mapDispatchToProps)(FormComponent);