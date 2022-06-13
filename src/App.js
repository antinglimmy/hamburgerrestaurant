// import logo from './logo.svg';
import "./App.css";
import React from "react";
import bunImage from './images/595-5957396_hamburger-bun-png-hamburger-bun-transparent-background-png.png';
import tomatoImage from './images/png-clipart-sliced-tomato-pizza-tomato-vegetarian-cuisine-vegetable-tomato-food-nightshade-family.png';
import lettuceImage from './images/kisspng-romaine-lettuce-hamburger-salad-clip-art-lettuce-5abb7a7895a819.786040171522236024613.jpg';

// import React, { useState } from "react";
// import img6 from '../../Assets/First.png'
// import img7 from '../../Assets/Second.png'

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
      hamburger: ["Beef Patty", "Lettuce", "Tomato"],
      order: "hamburger"
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  checkIngredients = () => {
    let score = 1
    for (let ingredient of this.state.hamburger) 
    {
      if (this.state.selectedIngredients.includes(ingredient)) {
      score +=1
      }
    } 
    if (score === this.state.hamburger.length) {
      return "You built the correct burger"
    } else {
      return "You built the wrong burger, try again!"
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
 
  // Location = () => {
  // const [imageClicked, setImageClicked] = useState({
  //   first: false,
  //   second: false,
  //   ground: false
  // });
    
  //   onClickHandler = (order) => {
  //   setImageClicked((prevState) => ({
  //     ...prevState,
  //     [order]: !prevState[order]
  //   }));
  // };
    // const imgArr = [
    //  {
    //   id: 'bun',
    //   image: bun
    //  }, 
    // ]

    // const [open, setOpen] = useState(null);

    // const [showImage, setShowImage] = useState({
    //   showImageNow: true,
    //   showImageId: null,
    // })
    // const {showImageNow, showImageId} = showImage;

    // const OpenImage = (a) => {
    //  setOpen(a.image);
    //  setShowImage({
    //    showImageNow: !showImageNow,
    //    showImageId: a.id
    //  });
    // }

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
{/* <div>
  {imageClicked.ground && <img src={bun} alt="bun" />}
</div> */}


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

{/* {<img src={bun} alt={"Bun"}/>} */}

 {/* {imgArr.map((a, i) => 
           <div key={i}>
             <button 
              onClick={() => OpenImage(a)}
              className="ground" 
             >
              {a.id}
             </button>

             <br />
        
             {showImageNow && showImageId === a.id ?
               <img
                src={open} 
                alt={a.id} 
               />
             :null}
           </div>
         )} */}

    </div>)};

  }

/* //         <header>
//           <h3>Burger Restaurant</h3>
//           <button onClick={this.handleClick}>Bun</button>
//           <button onClick={this.handleClick}>Tomato</button>
//           <button onClick={this.handleClick}>Lettuce</button>

//           {/* {this.state.selectedIngredients} */
//         </header>
//      <table>
//          <tbody>
//     <tr>
//       <th>Ingredient List</th>
//     </tr>
//  {this.state.selectedIngredients.map((d, index) =>  */}
//       <tr>
//         <td key={index}>{d}</td>
//       </tr>
//       )}
//       </tbody>
//       </table>

//  {imgArr.map((a, i) => 
//            <div key={i}>

//              <button 
//               onClick={() => OpenImage(a)}
//               className="ground" 
//              >
//               {a.id}
//              </button>

//              <br />
        
//              {showImageNow && showImageId === a.id ?
//                <img
//                 src={open} 
//                 alt={a.id} 
//                />
//              :null}
//            </div>
//          )}
  
    // )};
  

export default IngredientForm;
