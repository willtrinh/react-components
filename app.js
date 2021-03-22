// Making applications interactive with state
// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    // `state` is just an object literal
    this.state = {
      done: false,
      hover: false
    };
  }
  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  onMouseOver() {
    this.setState({
      hover: true
    })
  }
  onMouseOut() {
    this.setState({
      hover: false
    })
  }
  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );

  }

}

var GroceryListItems = (props) => (
  <ul>
    {props.groceries.map(item =>
      <GroceryListItem item={item} />
      )}
  </ul>
);
// Update our `GroceryList` to use the new `GroceryListItem` component
// This can still be a stateless function component!
var GroceryList = (props) => (
  <div>
    <h2>My Grocery  List</h2>
    <GroceryListItems groceries={['Milk', 'Meat', 'Eggs', 'Bread']} />
  </div>
);

// Rendering
ReactDOM.render(<GroceryList />, document.getElementById("app"));
