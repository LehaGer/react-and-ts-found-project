import React from 'react';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
        <Card width={200} height={100}>
            <div style={{width: "100", height: "50", backgroundColor: "gray"}}>
                Some div element in card component
            </div>
        </Card>
    </div>
  );
}

export default App;
