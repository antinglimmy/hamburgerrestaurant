// import logo from './logo.svg';
import "./App.css";
import React from "react";
import bunImage from './images/595-5957396_hamburger-bun-png-hamburger-bun-transparent-background-png.png';
import tomatoImage from './images/png-clipart-sliced-tomato-pizza-tomato-vegetarian-cuisine-vegetable-tomato-food-nightshade-family.png';
import lettuceImage from './images/kisspng-romaine-lettuce-hamburger-salad-clip-art-lettuce-5abb7a7895a819.786040171522236024613.jpg';
import { GenerateOrders } from "./utils.js";

class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIngredient: "",
      selectedIngredients: [],
      // bun: false,
      // hamburger2: ["Bun", "Lettuce", "Tomato"],
      // hamburger: {Bun: 1, Lettuce: 2, Tomato: 1 },
      order: GenerateOrders(),
      // selectedIngredientsTally: {},
      // selectedIngredientsObject: {"Bun": false, "Lettuce": false, "Tomato": false},
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.tallyIngredients = this.tallyIngredients.bind(this);
  }

  tallyIngredients = () => {
    let selectedIngredientsTally = {};
      console.log(this.state.selectedIngredients)
    // let message = ""
    for (let i = 0; i < this.state.selectedIngredients.length; i++) {
      if (this.state.selectedIngredients[i] in selectedIngredientsTally) {
        selectedIngredientsTally[this.state.selectedIngredients[i]] += 1
      } else {
        selectedIngredientsTally[this.state.selectedIngredients[i]] = 1
      }
    }

    
    // for (let i = 0; i < this.state.selectedIngredients.length; i++) {
      // if (selectedIngredientsTally.Bun === this.state.hamburger.Bun) {
      //   console.log("Buns are right")
      // }
      // if (selectedIngredientsTally.Lettuce === this.state.hamburger.Lettuce) {
      //   console.log("Lettuce are right")
      // }
    
    let sortedSelectedIngredients = this.state.selectedIngredients.sort();
    console.log(sortedSelectedIngredients)
    console.log(this.state.order)
    for (let i = 0; i < sortedSelectedIngredients.length; i++) {
      if (!(sortedSelectedIngredients[i] === this.state.order[i])) {
        console.log("Something is missing")
      } else if (sortedSelectedIngredients[i] === this.state.order[i]) {
        console.log("Looking good")
      }
    }
  }

  handleClick = (event) => {
      let selectedIngredient2 = event.target.innerText
      this.setState((state) => ({
         selectedIngredient: event.target.innerText,
        selectedIngredients: [...state.selectedIngredients, selectedIngredient2],
      // event.target.innerText === "Bun" && bun: true,
      }));
  }
  
  render() {
   
    return (<div>

 <header>
        <h1 className = "gameTitle">Burger Restaurant</h1>
        <h3>Build me a {this.state.order}</h3>       
        <button onClick={this.handleClick}>Bun</button>
        {/* <button onClick={this.onClick= onClickHandler("ground")}>Bun</button> */}
        <button onClick={this.handleClick}>Tomato</button>
        <button onClick={this.handleClick}>Lettuce</button>
        
</header>

      {this.state.selectedIngredients.includes("Bun") === true && <img src={bunImage} alt="bun" className="Bun" />}
      {this.state.selectedIngredients.includes("Tomato") === true && <img src={tomatoImage} alt="tomato" className="Tomato" />}
      {this.state.selectedIngredients.includes("Lettuce") === true && <img src={lettuceImage} alt="lettuce" className="Lettuce" />}


      <table>
        <tbody>
          <tr>
      <th>Ingredient List</th>
    </tr>
      {this.state.selectedIngredients.map((d, index) => (
    <tr key={index}>
      <td>{d}</td>
        </tr>))}
        </tbody>
      </table>
      
      <button onClick={this.tallyIngredients}>Tally Ingredients</button>

    </div>)
  };

  }  

export default IngredientForm;
