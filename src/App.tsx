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

import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Alert onClose={() => setAlertVisibility(false)}>
        Hello <span>World</span>
      </Alert>
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        Example
      </Button>
    </div>
  );
};

export default App;
