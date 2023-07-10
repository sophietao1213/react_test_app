// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import './styles.css';
function App() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">12*24</div>
        <div className="current-operand">600</div>
      </div>

      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>/</button>

      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>

      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>

      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>

      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  )
}

export default App;