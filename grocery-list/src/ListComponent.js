import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const shopItem = (name) => {
    return {
        type: "SHOP",
        data: {
            name,
            value: false,
        }
    }
}

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(data) {
        // console.log(data);
        // const index = this.props.list.indexOf(data);
        // const newList
        // console.log(index);
    }

    render() {
        const { list } = this.props;
        return (
            <ul>
                {list.map(el => <li onClick={() => this.handleClick(el)} className={el.value ? "red" : "black"}>{el.name}</li>)}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    list: state,
});
export default connect(mapStateToProps, null)(ListComponent);