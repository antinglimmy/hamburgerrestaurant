import orders from "./orders.json"

export const GenerateOrders = () => {
  // Lowercase words for simplicity
  return orders[Math.floor(Math.random() * orders.length)];
};

// class generateOrders extends React.Component{
//  constructor(props) {
//     super(props);
//     // Initialise component state to contain "date" attribute with current date and tim
//   }
// // const generateOrders = () => {
  
//   const orders = [
//     ["Bun", "Lettuce", "Tomato"],
//     ["Bun", "Lettuce", "Lettuce", "Tomato"],
//     ["Bun", "Bun", "Lettuce", "Tomato"],
//   ]

//   const randomNumber = Math.floor((Math.random() * 3) + 1);
  
    
//   render() {
//     return (
//       orders[randomNumber]
//   );
    
//   }
// }

// export default orders