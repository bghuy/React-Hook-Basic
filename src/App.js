import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import { useState, useEffect } from 'react';
import axios from "axios"
import ToDo from './components/ToDo.js';
import Covid from './components/Covid19.js';
import Blog from './components/Blog.js'
import DetailBlog from './components/DetailBlog.js';
import { CountDown, NewCountDown } from './components/CountDown.js';
import AddNewBlog from './components/AddNewBlog.js';
import NotFound from './components/NotFound.js';
import YoutubeSearch from './components/YoutubeSearch.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
const App = () => {
  const [toDos, setToDo] = useState([
    { id: 1, title: "job", type: "huy" },
    { id: 2, title: "home", type: "hoang" },
    { id: 3, title: "house", type: "huy" }
  ]);
  const [currentToDo, setCurrentToDo] = useState({ id: -1, title: "", type: "huy" });
  const handleClick = (event) => {
    //ham setHuy la ham bat dong bo
    if (currentToDo.title) {
      setToDo([currentToDo, ...toDos]);
    }
    setCurrentToDo({ id: -1, title: "", type: "huy" });
  }
  const handleOnChange = (event) => {
    setCurrentToDo({ id: toDos.length + 1, title: event.target.value, type: "huy" })
  }
  const handleDeleteToDo = (Id) => {
    let cloneToDos = toDos;
    cloneToDos = cloneToDos.filter((todo) => todo.id !== Id)
    setToDo(cloneToDos);
  }
  const onTimeUp = () => {
    alert("time up")
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/timer">
            <CountDown onTimeUp={onTimeUp} />
            {/* <span>----------------</span>
            <NewCountDown onTimeUp={onTimeUp} /> */}
          </Route>
          <Route exact path="/todo">
            <input type='text' value={currentToDo.title} onChange={(event) => handleOnChange(event)}></input>
            <button onClick={(event) => handleClick(event)}>Click me</button>
            <ToDo toDos={toDos} title="All to do" handleDeleteToDo={handleDeleteToDo} />
            <br />
            {/* <ToDo toDos={toDos.filter(item => item.type === "huy")} title="Huy to do" handleDeleteToDo={handleDeleteToDo} /> */}
          </Route>
          <Route exact path="/">
            <Covid />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/blog/:id" exact>
            <DetailBlog />
          </Route>
          <Route path="/add-new-blog" exact>
            <AddNewBlog />
          </Route>
          <Route path="/Youtube-search" exact>
            <YoutubeSearch />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
          <Route path="/Youtube-search" exact>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
