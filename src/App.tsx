import "./App.css";
import { Container as CounterContainer } from "./feature/Counter";
import { Presenter } from "./feature/Counter/Presenter";

function App() {
  return (
    <>
      <h1>render prop</h1>
      <div>
        <CounterContainer
          render={({ count, increment, decrement }) => {
            return (
              <Presenter
                {...{
                  count,
                  increment: () => increment(),
                  decrement: () => decrement(),
                }}
              />
            );
          }}
        />
      </div>
    </>
  );
}

export default App;
