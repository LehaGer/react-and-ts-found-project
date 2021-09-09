import React from 'react';
import Card, {variantsSet} from "./components/Card";

function App() {
  return (
    <div className="App">
        <Card width={200} height={100} someVariant={variantsSet.primary} onClick={(num) => {console.log("click from Card, num: " + num)}}>
            <div style={{width: "100px", height: "50px", backgroundColor: "gray"}}>
                Some div element in card component
            </div>
        </Card>
    </div>
  );
}

export default App;
