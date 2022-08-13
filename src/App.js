import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Recipe from "./pages/receipe/Recipe";
import Search from "./pages/search/Search";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";
import './App.css'
import {useTheme} from "./hooks/useTheme";

function App() {
  const {mode} = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar/>
        <ThemeSelector/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/recipes/:id">
            <Recipe/>
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App
