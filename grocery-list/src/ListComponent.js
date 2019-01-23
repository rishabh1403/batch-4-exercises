import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const shopItem = (list) => {
    return {
        type: "SHOP",
        data: list
    }
}

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(data) {
        // console.log(data);
        const index = this.props.list.indexOf(data);
        const newList = JSON.parse(JSON.stringify(this.props.list))
        newList[index] = {
            name: newList[index].name,
            value: !newList[index].value,
        };
        this.props.shopItem(newList);
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

const mapDispatchToProps = {
    shopItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);