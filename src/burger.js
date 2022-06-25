import React from "react";
import Bun from "./images/TopBun.png";
import Tomato from "./images/Tomato.png";
import Lettuce from "./images/Lettuce.png";
import Cheese from "./images/Cheese.png";
import "./App.css";
import { GenerateOrders } from "./utils";

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
    );
  }
}

class Burger extends React.Component {
  // renderIngredients() {
  //   const arr = [];
  //   for (let i = 0; i < 5; i++) {
  //     arr.push(<img src={String({ i })} alt={i} />);
  //     console.log(<img src={String({ i })} alt={i} />);
  //   }
  //   return arr;
  // }

  // renderIngredients(selectedIngredients) {
  //   for (let i = 0; i < selectedIngredients.length; i++) {
  //     let images;
  //     if (selectedIngredients[i] === "Bun") {
  //       images += <img src={Bun} alt="bun" className="Bun" />;
  //     } else if (selectedIngredients[i] === "Lettuce") {
  //       images += <img src={Bun} alt="bun" className="Bun" />;
  //     }
  //     return images;
  //   }
  // }

  render() {
    const selectedIngredients = this.props.selectedIngredients;
    return (
      <div className="burger">
        <div> My burger</div>
        {/* {this.renderIngredients(selectedIngredients)} */}
        {/* 
        {selectedIngredients.map(i => {
            return <CheeseClass />;
        })} */}
        {/* {selectedIngredients.map((i) => {
          console.log({ i });
          return <img src={i} alt={i} className={i} />;
        })}

        {this.renderIngredients().map((item) => item)} */}
        {/* {selectedIngredients.includes("Bun") === true && (
          <img src={Bun} alt="bun" className="Bun" />
        )}
        <br />
        {selectedIngredients.includes("Tomato") === true && (
          <img src={Tomato} alt="tomato" className="Tomato" />
        )}
        <br />
        {selectedIngredients.includes("Lettuce") === true && (
          <img src={Lettuce} alt="lettuce" className="Lettuce" />
        )}
        <br />
        {selectedIngredients.includes("Cheese") === true && <CheeseClass />} */}
        {/* {selectedIngredients.forEach((element) => {
          if (element === "Bun") {
            <img src={Bun} alt="bun" className="Bun" />;
            console.log("i happen");
          }
        })} */}
      </div>
    );
  }
}

export { Burger, CheeseClass };
