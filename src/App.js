import './App.css';
import CharacterCounter from './components/CharacterCounter';
import Counter from './components/Counter';
import PasswordMatch from './components/PasswordMatch';
import AlphaNumericPassword from './components/AlphaNumericPassword';
import AddToCart from './components/AddToCart';
import ToggleColor from './components/ToggleColor';

function App() {
  return (
    <div className="App">
      <h1>Exercises-React</h1>
      <hr />
      <Counter />
      <hr />
      <CharacterCounter />
      <hr />
      <PasswordMatch />
      <hr />
      <AlphaNumericPassword />
      <hr />
      <AddToCart />
      <hr />
      <ToggleColor />
      <hr />
    </div>
  );
}

export default App;
