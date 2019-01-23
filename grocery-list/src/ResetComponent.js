import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const clear = () => {
    return {
        type: "CLEAR"
    }
}

class ResetComponent extends React.Component {
    render() {
        const { clear } = this.props;
        return (
            <button onClick={clear} type="button" >Clear List</button>
        )
    }
}

const mapDispatchToProps = {
    clear
}

export default connect(null, mapDispatchToProps)(ResetComponent);