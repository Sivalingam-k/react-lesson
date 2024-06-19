//import logo from './logo.svg';
import './App.css';
import SetStateComp from './components/SetStateComp';
// import ClassComp from './components/ClassComp';
// import FunctionComp from './components/FunctionCom';
// import MyDetails from './components/MyDetails';
import MethodEvent from './components/MethodEvent';
import CondRenderCom from './components/CondRenderCom';
import MyImages from './components/MyImages';
import ToggleImageCom from './components/ToggleImageCom';
import ParentComp from './components/ParentComp';
import MyCssComp from './components/MyCssComp';
import ClickCounterCom from './components/ClickCounterCom';
import MouseOverIncrease from './components/MouseOverIncrease';
import HOCComp from './components/HOCComp';
import MySlideComp from './components/MySlideComp';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <h2>Welcome you all!!</h2>
      <FunctionComp myName="Shiva" post="Software Developer"></FunctionComp>
      <ClassComp myName="Basil" post="Full Stack  Developer"></ClassComp> */}

      {/* <MyDetails fname="shiva" lname="lingam" email="siva12@gmail.com" contact="978765436"></MyDetails> */}
      {/* <MethodEvent></MethodEvent>
      <SetStateComp></SetStateComp>
      <CondRenderCom></CondRenderCom>
      <MyImages></MyImages>
      <ToggleImageCom></ToggleImageCom>
      <ParentComp></ParentComp>
      <MyCssComp></MyCssComp> */}
      {/* <ClickCounterCom></ClickCounterCom>
      <MouseOverIncrease></MouseOverIncrease> */}
      {/* <HOCComp></HOCComp> */}
      <MySlideComp></MySlideComp>
    </div>
  );
}

export default App;
