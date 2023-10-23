import "./App.css";
import { CounterProvider } from "./feature/CounterProvider";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <h1>render prop</h1>
      <div>
        <CounterProvider
          render={({ count, increment }) => {
            return (
              <div>
                <h2>count: {count}</h2>
                <Button onClick={() => increment()}>increment</Button>
              </div>
            );
          }}
        />
        <hr />
        <CounterProvider
          render={({ count, increment }) => {
            return (
              <div>
                <h2>count: {count}</h2>
                <Button variant="blue" onClick={() => increment(2)}>
                  increment by 2
                </Button>
              </div>
            );
          }}
        />
      </div>
    </>
  );
}

export default App;
