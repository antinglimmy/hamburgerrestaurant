import "./App.css";
import React from "react";
// import bunImage from './images/595-5957396_hamburger-bun-png-hamburger-bun-transparent-background-png.png';
// import tomatoImage from './images/png-clipart-sliced-tomato-pizza-tomato-vegetarian-cuisine-vegetable-tomato-food-nightshade-family.png';
// import lettuceImage from './images/kisspng-romaine-lettuce-hamburger-salad-clip-art-lettuce-5abb7a7895a819.786040171522236024613.jpg';
import { GenerateOrders } from "./utils.js";
import { Burger } from "./burger.js";

class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIngredient: "",
      selectedIngredients: [],
      order: GenerateOrders(),
      result: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.tallyIngredients = this.tallyIngredients.bind(this);
  }

  tallyIngredients = () => {
    let selectedIngredientsTally = {};
    for (let i = 0; i < this.state.selectedIngredients.length; i++) {
      if (this.state.selectedIngredients[i] in selectedIngredientsTally) {
        selectedIngredientsTally[this.state.selectedIngredients[i]] += 1;
      } else {
        selectedIngredientsTally[this.state.selectedIngredients[i]] = 1;
      }
    }

    let sortedSelectedIngredients = this.state.selectedIngredients.sort();
    for (let i = 0; i < sortedSelectedIngredients.length; i++) {
      if (!(sortedSelectedIngredients[i] === this.state.order[i])) {
        this.setState({ result: false });
      } else if (sortedSelectedIngredients[i] === this.state.order[i]) {
        this.setState({ result: true });
      }
    }
    console.log(this.state);
  };

  handleClick = (event) => {
    let selectedIngredient2 = event.target.innerText;
    this.setState((state) => ({
      selectedIngredient: event.target.innerText,
      selectedIngredients: [...state.selectedIngredients, selectedIngredient2],
    }));
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <header>
          <h1 className="gameTitle">Burger Restaurant</h1>
          <h3>Build me a {this.state.order}</h3>
          <button onClick={this.handleClick}>Bun</button>
          <button onClick={this.handleClick}>Tomato</button>
          <button onClick={this.handleClick}>Lettuce</button>
          <button onClick={this.handleClick}>Cheese</button>
        </header>

        {/* <table>
        <tbody>
          <tr>
      <th>Ingredient List</th>
    </tr>
      {this.state.selectedIngredients.map((d, index) => (
    <tr key={index}>
      <td>{d}</td>
        </tr>))}
        </tbody>
      </table> */}

        <Burger selectedIngredients={this.state.selectedIngredients} />

        <button onClick={this.tallyIngredients}>Tally Ingredients</button>
        {this.state.result === true && (
          <div> You have made the correct order!</div>
        )}
      </div>
    );
  }
}

export default IngredientForm;
