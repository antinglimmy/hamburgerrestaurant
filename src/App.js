// import logo from './logo.svg';
import "./App.css";
import React from "react";
import bunImage from './images/595-5957396_hamburger-bun-png-hamburger-bun-transparent-background-png.png';
import tomatoImage from './images/png-clipart-sliced-tomato-pizza-tomato-vegetarian-cuisine-vegetable-tomato-food-nightshade-family.png';
import lettuceImage from './images/kisspng-romaine-lettuce-hamburger-salad-clip-art-lettuce-5abb7a7895a819.786040171522236024613.jpg';

// let selectedIngredientsTally = {}

// const listOfBurgers = () => {
//   hamburger:
// }

// const hamburger = ["Beef Patty", "Lettuce", "Tomato"]


class IngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIngredient: "",
      selectedIngredients: [],
      bun: false,
      // hamburger: ["Beef Patty", "Lettuce", "Tomato"],
      hamburger: { bun: 1, lettuce: 1, tomato: 1 },
      order: "hamburger",
      selectedIngredientsTally: {},
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  checkIngredients = () => {
    let selectedIngredientsTally = {};
    // let message = ""
    for (let i = 0; i < this.state.selectedIngredients.length; i++) {
      if (this.state.selectedIngredients[i] in selectedIngredientsTally) {
        selectedIngredientsTally[this.state.selectedIngredients[i]] += 1
      } else {
        selectedIngredientsTally[this.state.selectedIngredients[i]] = 1
      }
    }
    console.log(this.state.hamburger.bun)
    console.log(selectedIngredientsTally)

    // for (let i = 0; i < this.state.hamburger.length; i++){
    //   if (this.state.hamburger)
    // }

    //   if (this.state.hamburger.bun === selectedIngredientsTally.Bun){
    //     message = "You have the right number of buns"
    //     console.log ("i happen")
    //   }
    // return message
  }

  orderKeys = (obj, expected) => {

  var keys = Object.keys(obj).sort(function keyOrder(k1, k2) {
      if (k1 < k2) return -1;
      else if (k1 > k2) return +1;
      else return 0;
  });

  var i, after = {};
  for (i = 0; i < keys.length; i++) {
    after[keys[i]] = obj[keys[i]];
    delete obj[keys[i]];
  }

  for (i = 0; i < keys.length; i++) {
    obj[keys[i]] = after[keys[i]];
  }
  return obj;
  }

    // let message = ""
    // for (let ingredient of this.state.hamburger) 
    // {
    //   if (!this.state.selectedIngredients.includes(ingredient)) {
    //    message = "You have a wrong ingredient"
    //   }
    //   if (this.state.selectedIngredients.includes(ingredient)) {
        
    //   }
    //   if (score === this.state.hamburger.length) {
    //   return "You built the correct burger"
    // } else {
    //   return "You built the wrong burger, try again!"
    // }
    
  // checkIngredients = () => {
  //   let score = 1
  //   for (let ingredient of this.state.hamburger) 
  //   {
  //     if (this.state.selectedIngredients.includes(ingredient)) {
  //     score +=1
  //     }
  //   } 
  //   if (score === this.state.hamburger.length) {
  //     return "You built the correct burger"
  //   } else {
  //     return "You built the wrong burger, try again!"
  //   }
  //   }
  

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
        <h3>Burger Restaurant</h3>
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
    <tr>
      <td key={index}>{d}</td>
    </tr>))}
  </tbody>
</table>
      
      {this.checkIngredients()}
      {/* {this.orderKeys(selectedIngredientsTally)} */}

    </div>)};

  }  

export default IngredientForm;
