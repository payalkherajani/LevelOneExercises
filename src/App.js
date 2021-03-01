import './App.css';
import CharacterCounter from './components/twittercounter/CharacterCounter';
import Counter from './components/counter/Counter';
import PasswordMatch from './components/passwordmatch/PasswordMatch';
import AlphaNumericPassword from './components/alphanumericpassword/AlphaNumericPassword';
import AddToCart from './components/cart/AddToCart';
import ToggleColor from './components/togglecolor/ToggleColor';
import FigmaTool from './components/minifigma/FigmaTool';
import Tabs from './components/tabs/Tabs';
import Toast from './components/toast/Toast';
import Todo from './components/todo/Todo';
import LikeList from './components/like/LikeList';

//Fp
import Filter from './functionalprogramming/HighOrderFunc/Filter';
import Questions from './functionalprogramming/Immutability/Questions';
import PureQue from './functionalprogramming/purefunctions/PureQue';
import Homework from './functionalprogramming/Homework/Homework';

//Async
import LiveQuestions from './Async/Livecoding/LiveQuestions';


function App() {
  return (
    <div className="App">
      <h1>Async Await</h1>
      <LiveQuestions />
      <h1>Functional Programming</h1>
      <Filter />
      <Questions />
      <PureQue />
      <h4>FP Homework Questions</h4>
      <Homework />
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
      <Toast />
      <hr />
      <Todo />
      <hr />
      <ToggleColor />
      <hr />
      <LikeList />
      <hr />
    </div>
  );
}

export default App;
