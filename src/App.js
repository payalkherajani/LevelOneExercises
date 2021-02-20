import './App.css';
import CharacterCounter from './components/CharacterCounter';
import Counter from './components/Counter';
import PasswordMatch from './components/PasswordMatch';
import AlphaNumericPassword from './components/AlphaNumericPassword';
import AddToCart from './components/AddToCart';
import ToggleColor from './components/ToggleColor';
import FigmaTool from './components/FigmaTool';
import Tabs from './components/tabs/Tabs';


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
      <FigmaTool />
      <hr />
      <AddToCart />
      <hr />
      <Tabs />
      <hr />
      <ToggleColor />
      <hr />


    </div>
  );
}

export default App;
