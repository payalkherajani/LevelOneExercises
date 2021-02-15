import './App.css';
import CharacterCounter from './components/CharacterCounter';
import Counter from './components/Counter';
import PasswordMatch from './components/PasswordMatch';

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
    </div>
  );
}

export default App;
