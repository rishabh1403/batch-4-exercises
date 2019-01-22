import React from 'react';
import PropTypes from 'prop-types';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newGroceryItem: '',
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
    };
    this.onGroceryItemChange = this.onGroceryItemChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearGroceryList = this.clearGroceryList.bind(this);
  }

  onGroceryItemChange(evt) {
    this.setState({
      newGroceryItem: evt.target.value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { groceries, newGroceryItem } = this.state;
    this.setState({
      groceries: [...groceries, { name: newGroceryItem }],
    }, () => {
      this.setState({
        newGroceryItem: '',
      });
    });
  }

  clearGroceryList() {
    this.setState({
      groceries: [],
    });
  }

  render() {
    const { groceries, newGroceryItem } = this.state;
    const groceriesComponents = groceries.map(item => ( // eslint-disable-line no-unused-vars
      <GroceryListItem key={item.name} grocery={item} />
    ));
    return (
      <div>
        <ul>
          {groceriesComponents}
        </ul>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="grocery-item">Add Item to Grocery List</label>
          <input value={newGroceryItem} type="text" name="grocery-item" onChange={this.onGroceryItemChange} />
          <button type="submit">Add Item </button>
        </form>
        <button type="button" onClick={this.clearGroceryList}>Clear Grocery List</button>
      </div>
    );
  }
}

/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRed: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    const { isRed } = this.state;
    this.setState({
      isRed: !isRed,
    });
  }

  render() {
    const { grocery } = this.props;
    return (
      <li className={this.state.isRed ? 'red' : 'black'} onClick={this.toggleClass}>
        {grocery.name}
      </li>
    );
  }
}

GroceryListItem.propTypes = {
  grocery: PropTypes.object
};

export default GroceryList;
