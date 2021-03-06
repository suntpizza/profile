import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

import { TopPage } from "components/TopPage";
import { SubPage } from "components/SubPage";

// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
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

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/todo/new' component={TopPage} />
        <Route path='/todo/:id' component={SubPage} />
      </Switch>
      <Link to='/'>Back To Top</Link>
    </BrowserRouter>
  )
}

export default App;
