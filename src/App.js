// import logo from './logo.svg';
import "./App.css";
import React from "react";
import bunImage from './images/595-5957396_hamburger-bun-png-hamburger-bun-transparent-background-png.png';
import tomatoImage from './images/png-clipart-sliced-tomato-pizza-tomato-vegetarian-cuisine-vegetable-tomato-food-nightshade-family.png';
import lettuceImage from './images/kisspng-romaine-lettuce-hamburger-salad-clip-art-lettuce-5abb7a7895a819.786040171522236024613.jpg';

class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIngredient: "",
      selectedIngredients: [],
      bun: false,
      // hamburger: ["Bun", "Lettuce", "Tomato"],
      hamburger: {"Bun": 1, "Lettuce": 1, "Tomato": 1 },
      order: "hamburger",
      selectedIngredientsTally: {},
      selectedIngredientsObject: {"Bun": false, "Lettuce": false, "Tomato": false},
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkIngredients2 = this.checkIngredients2.bind(this);
  }

  checkIngredients2 = () => {
    // let ingredientsToAdd = []
    for (let i = 0; i < 3; i++) {
      const hamburgerObject = this.state.hamburger
      let currentIngredient = this.state.selectedIngredients[i]
      if (currentIngredient in hamburgerObject) {
        console.log(currentIngredient)
        this.setState(prevState => ({
          selectedIngredientsObject: { ...prevState.selectedIngredientsObject, currentIngredient:true }
        }))

    }
      }
    console.log(this.state)

      
    return(this.state.selectedIngredients[0])
  } 

  handleClick = (event) => {
      let selectedIngredient2 = event.target.innerText
      this.setState((state) => ({
         selectedIngredient: event.target.innerText,
        selectedIngredients: [...state.selectedIngredients, selectedIngredient2],
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
      <th>Ingredient List Test</th>
    </tr>
      {this.state.selectedIngredients.map((d, index) => (
    <tr key={index}>
      <td>{d}</td>
        </tr>))}
        </tbody>
      </table>
      
      <button onClick={this.checkIngredients2}>Check Ingredients</button>

    </div>)
  };

  }  

export default IngredientForm;
