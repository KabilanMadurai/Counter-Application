import { useState } from "react";
import "./App.css";
import hero from "./assets/hero.jpg";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => setCount(0);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="glass">

        <h3>React useState Project</h3>

        <h1>Counter Application</h1>

        <div className="counter">

          {count}

        </div>

        <div className="buttons">

          <button onClick={decrement}>−</button>

          <button onClick={reset}>Reset</button>

          <button onClick={increment}>+</button>

        </div>

        <div className="status">

          {count === 0 && "🔴 Minimum Limit"}

          {count > 0 && count <= 10 && "🟢 Great Start"}

          {count > 10 && count <= 25 && "🚀 Keep Going"}

          {count > 25 && count <= 50 && "🔥 Amazing"}

          {count > 50 && "👑 Counter Master"}

        </div>

      </div>
    </div>
  );
}

export default App;