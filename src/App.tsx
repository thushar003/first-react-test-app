// import ListGroup from "./components/ListGroup";
// import { Fragment } from "react";

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }

//   return (
//     <div>
//       <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
//     </div>
//   );
//   // or return <div><Message /></div>;
// }

// export default App;

import React from 'react'
import Alert from './components/Alert';

const App = () => {
  return (
    <div>
      <Alert text="Hello World"/>
    </div>
  )
}

export default App;