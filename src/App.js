import logo from './logo.svg';
import './App.css';
import Greet from './components/functional/Greet';
import { NamedGreet } from './components/functional/NamedGreet';
import Welcome from './components/class/Welcome';
import Sample from './components/functional/Sample';
import Test from './components/class/Test';

function App() {
  return (
    <div className="App">
      <h1> Hello Guys Welcom to ReactJS </h1>
      <Greet />
      <NamedGreet />
      <Welcome />
      <Sample />
      <Test />
    </div>
  );
}

export default App;
