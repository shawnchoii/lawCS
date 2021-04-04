import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Render from "./pages/Render";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" render={() => <Home/>} />
        <Route exact path="/form" render={() => <Form/>}/>
        <Route exact path="/render"  render={() => <Render/>}/>
      </Router>
    </div>
  );
}

export default App;
