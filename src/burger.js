import React from "react";
import Bun from './images/TopBun.png'
import Tomato from './images/Tomato.png';
import Lettuce from './images/Lettuce.png';
import Cheese from './images/Cheese.png'
import "./App.css";

class CheeseClass extends React.Component {
  
  // displayCheeseMethod = () => {
  //   const selectedIngredients = this.props.selectedIngredients;
  //   selectedIngredients.map(i => {
  //       return (Cheese)
  //   })
  // }

  render() {
    return (
    <div>
    <img src={Cheese} alt="cheese" className="Cheese" />
        {/* {this.displayCheeseMethod} */}
    </div>
    )
  }
}

class Burger extends React.Component {

  render() {
    const selectedIngredients = this.props.selectedIngredients;
    return (
      <div className = "burger">
        <div> My burger</div>

        {selectedIngredients.map(i => {
            return <CheeseClass />;
        })}
        {/* {selectedIngredients.map(i => {
          return <img src={({i})} alt={i} />;
         })} */}


        {/* {selectedIngredients.includes("Bun") === true && <img src={bunImage} alt="bun" className="Bun" />}
        <br />
        {selectedIngredients.includes("Tomato") === true && <img src={tomatoImage} alt="tomato" className="Tomato" />}
        <br />
        {selectedIngredients.includes("Lettuce") === true && <img src={lettuceImage} alt="lettuce" className="Lettuce" />}
        <br /> */}
        {selectedIngredients.includes("Cheese") === true && <CheeseClass />}
      </div>
    )
  };
}

export { Burger, Cheese };